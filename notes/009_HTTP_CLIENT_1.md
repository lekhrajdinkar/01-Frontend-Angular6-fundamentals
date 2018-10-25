# [HttpClient](https://angular.io/api/common/http/HttpClient)
Angular app communicate with backend services over the HTTP protocol.

### 1. Features:
1. HttpClient in `@angular/common/http`  - It simplifies and provides abstraction over XMLHttpRequest.
2. Additional benefits 
- typed request and response objects, 
- request interception --> eg : to attach token to request,
- response interception -->  eg: to log response.
- Observable --> to make asyn call. eg: `this.http.get()` will return observable
- streamlined error handling. 
```
before:
this.http.get().map() --> to transform data, no error hadnling

After: pipe and CatchError operator.
this.http.get()pipe( map(), catchError(), ...)
```
- testability features

3. It is a best practice to separate `presentation of data` from `data access`.
- Define Http request in service and
- invoke/subscribe from Component.

***

### 2. StepUp - HttpClient:
1. `HttpClientModule` --> Most apps do so in the `root AppModule`
2. Inject the `HttpClient` service into any application class.
3. then use it to make http requests - get post put etc

### 3. Example1 - GET CALL to recive JSON data:
1. SERVICE : config.service.ts --> define get() observable of `Config` type.:
```
import { HttpClient } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService 
{
  constructor(private http: HttpClient) { }  
  getConfig() {  return this.http.get(assets/config.json); } //observable
}
```

2. ./assets/config.json:
```
{
  "heroesUrl": "api/heroes",
  "textfile": "assets/textfile.txt"
}
```

3. **Type-checking** the response in SERVICE. new code:
```
getConfig() {  
  return this.http.get<Config>(this.configUrl);
}
```
note:
> - Check EXAMPLE-3 to error handling at Observable/get()
> - it returns an Observable of Config type. == `{heroesUrl:'',textfile:'' }` type == `Config` type
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/1.jpg)

4. **Invoke observable/get() in COMPONENT** --> `config.component.ts`
- Injects the `ConfigService` and calls the getConfig() method.
- The subscription 1st callback returns the data.
- The subscription 2nd callback returns the error.

> `HttpClient` will return an error object instead of a successful response:
> - If the request fails on the server
> - if a poor network connection prevents it from even reaching the server.

```
constructor(private http: HttpClient) { }

showConfig() {
  this.configService.getConfig().subscribe(
		 //1st callback
		(data: Config) => this.config = { heroesUrl: data['heroesUrl'], textfile:  data['textfile']}
		
		//or, (data: Config) => { this.config = { ...data } ;} 			
		//or, (data) => { this.config = { ...data } ;} //safer and easier use.
		
		//2nd Callback
		(error) => {... handle error, received from observable...}
	);	
}
```
***

### 4. Example2 - GET CALL to recive Full response:
1. Add observe: 'response' in Service code:
- it returns HttpResponse, which is generic type.
```
getConfig(): Observable<HttpResponse<Config>> 
{
  return this.http.get<Config>(    
		"assets/config.json", 
		{ observe: 'response' } //2nd arg 
	);
}
```

2. **Invoke observable/get() in COMPONENT**  
```
showConfig() {
  this.configService.getConfig().subscribe(
		//1st callback
		(data) => { 
		this.config = { resp.body } ;
		
		// display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>`${key}: ${resp.headers.get(key)}`);
	  }
		
		//2nd Callback
		(error) => {... handle error, received from observable...}
	);	
}
```

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/2.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/3.jpg)
***
### 5. Example3 - Handle error at httpClient.get() observable.
1. Error inspection:
> 1. TYPE-1 : `server backend` might reject the request, returning an HTTP response with a status code such as 404 or 500
> 2. TYPE-2 :  JavaScript ErrorEvent objects at client side --> network error \ an exception thrown in an RxJS operator.

so HttpClient captures both types ( type-1 and type-2) of errors in `HttpErrorResponse`

2. `Retry` : network interruptions are common in mobile scenarios, and trying again may produce a successful result.
```
//0. imports:
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//1. catchError:
this.http.get()pipe( 
map(... ), 
catchError(this.handleError),
retry(3)
);

//2. Devise an error handler --> this.handleError :
private handleError(error: HttpErrorResponse) 
{
  // 1. A client-side or network error occurred
  if (error.error instanceof ErrorEvent) {    
    console.error('An error occurred:', error.error.message);
  } 
  else
  {
    // 2. The backend returned an unsuccessful response code.   
    console.error(  `Backend returned code ${error.status}, ` +  `body was: ${error.error}`);
  }
  
  //  Finally return RxJS ErrorObservable with a user-friendly error message
  return throwError( 'Something bad happened; please try again later.');
};
```
***

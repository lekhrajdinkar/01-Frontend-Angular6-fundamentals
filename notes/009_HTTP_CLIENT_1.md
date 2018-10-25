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

After: pipe operator and CatchError operator.
this.http.get(),pipe( map(), catchError(), ...)
```
- testability features

3. it is a best practice to separate `presentation of data` from `data access`.
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
- it returns an Observable of Config type. == `{heroesUrl:'',textfile:'' }` type == `Config` type


4. **Invoke observable/get() in COMPONENT** --> `config.component.ts`
- Injects the `ConfigService` and calls the getConfig() method.
- The subscription 1st callback returns the data.
- The subscription 12nd callback returns the error.

```
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
***


## Error handling

- If the request fails on the server, or if a poor network connection prevents it from even reaching the server.
- `HttpClient` will return an error object instead of a successful response.
- handle error in the component by adding a `second callback` to the .subscribe():
```
.subscribe(
      (response) => this.config = { ...data }, // success path
      (error) => this.error = error // error path
    );
```

2. handle error inside Service --> 
2.1. Error inspection:
> TYPE-1 : `server backend` might reject the request, returning an HTTP response with a status code such as 404 or 500

> TYPE-2 :  JavaScript ErrorEvent objects at client side --> network error \ an exception thrown in an RxJS operator.

Note: HttpClient captures both types of errors in `HttpErrorResponse`
```
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

2.2. interpretation resolution


***
- Sometimes the error is transient and will go away automatically if you try again. 
For example, network interruptions are common in mobile scenarios and trying again may produce a successful result.

The RxJS library offers several retry operators that are worth exploring. The simplest is called retry() and it automatically re-subscribes to a failed Observable a specified number of times. Re-subscribing to the result of an HttpClient method call has the effect of reissuing the HTTP request.


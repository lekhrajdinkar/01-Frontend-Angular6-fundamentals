# httpClientModule
## 1. intro
- Asynchronously load/store data to/from backend server.
- old : ajax, fetch/promise
- HttpClient in `@angular/common/http` (simple, abstraction)
- **Additional benefits**
  - typed request and response objects,
  - request interception --> eg : to attach token to request,
  - response interception -->  eg: to log response.
  - returns Observable<T> --> to make **async** call.
  - streamlined error handling.
  
## 2. Developer guide
- Add `httpClientModule` in rootModule
- create service1(inject `HttpClient`)
```
import { HttpClient } from '@angular/common/http';

  - store_1$ = this.http.get("url1") : observable<T>
  - store_2$ = store_1$.pipe(map(x->x), catchError(err->{}), ...)
  - store_2$.subscribe(data->{}, err-> {})
```

## Example/s
### GET
```json5
//==== config.json ====
// ./assets/config.json
{
  "heroesUrl": "api/heroes",
  "textfile": "assets/textfile.txt"
}
```
```
export interface Config {  heroesUrl: string;  textfile: string; }

@Injectable()
export class ConfigService 
{
  constructor(private http: HttpClient) { } 
   
  getConfig() {  return this.http.get<Config>(assets/config.json); } //observable
  
  consume() {
    this.configService.getConfig()
    .subscribe(
       (data: Config) => this.config = { heroesUrl: data['heroesUrl'], textfile:  data['textfile']}
       (error: any)   => {... handle error, received from observable...}
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

## option object:
- this.http.get(url, option-object)

### 1. {observe:'response' , responseType:'text'}
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/4.jpg)

### 2. {observe:'body' , responseType:'json'}
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/5.jpg)

### 3. {observe:'event'}
- Sent GET request > event-1: GET , event-2: httpResponse
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/6.jpg)

- send post and Subscribe response data is of `HttpEvent<>` type
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/7.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/8.jpg)

### 4. Header
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/9.jpg)

### 5. query param
- new HttpParam().set(k,v)
- new HttpParam().append(k,v)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/10.jpg)

***

### 6. reportProgress
- Another way to create and send http request
- create --> new HttpRequest(type, url, data, option-object)
- reportProgress : true
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/11.jpg)

- send
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/12.jpg)

- output > events
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/13.jpg)

***

## Interceptors
- declare Interceptor:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/14.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/18.jpg)

- eg: implemets HttpInterceptor > override intercept(httpRequest, httpHandler)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/15.jpg)

### Request Interceptor
- Auth token interceptor
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/16.jpg)

- logging interceptor
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http2/17.jpg)

### Response Interceptor

***





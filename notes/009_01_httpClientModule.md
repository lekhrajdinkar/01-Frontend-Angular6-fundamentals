# httpClientModule
## A. intro
- Asynchronously load/store data to/from backend server.
- old : ajax, fetch/promise
- HttpClient in `@angular/common/http` (simple, abstraction)
- **Additional benefits**
  - typed request and response objects,
  - request interception --> eg : to attach token to request,
  - response interception -->  eg: to log response.
  - returns Observable<T> --> to make **async** call.
  - streamlined error handling.
  
## B. Developer guide
- Add `httpClientModule` in rootModule
- create service1(inject `HttpClient`)
- error handling: catchError(err->{}), retry(3)
- http.get/post/put/delete( "url", { }) 
  - **2nd argument / option object** :
    - { observe: '**response**' , responseType:'**text**'}
    - { observe: '**body**' , responseType:'**json**'}
    - { observe: '**event**'} // HttpEvent<>
    - { param : {} , queryParam: {} }
    - 
```
import { HttpClient } from '@angular/common/http';

  - store_1$ = this.http.get("url1") : observable<T>
  - store_2$ = store_1$.pipe(map(x->x), catchError( (err:HttpErrorResponse)->{ }), retry(3), ...)
  - store_2$.subscribe(data->{}, err-> {})
```

## C Example/s
### 1. get
```json5
//==== config.json ====
// ./assets/config.json
{
  "heroesUrl": "api/heroes",
  "textfile": "assets/textfile.txt"
}
```
```typescript
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
---
### 2. get :: Full response / HttpResponse
```typescript
getConfig(): Observable<HttpResponse<Config>> {
  return this.http.get<Config>(  "assets/config.json", { observe: 'response' } );  <<<
}

consume() {
  this.configService.getConfig()
  .subscribe(
		(resp) => { 
		  this.config = { resp.body } ;    <<<
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>`${key}: ${resp.headers.get(key)}`); //print response header
	  }
		(error) => {}
	);	
}
```
---
### 3. HttpErrorResponse
- backend error 500
- network issue (client error), **ErrorEvent**

```typescript
this.http.get().pipe( 
  map(... ), 
  catchError(this.handleError),
  retry(3)
);

//2. Devise an error handler --> this.handleError :
private handleError(error: HttpErrorResponse) 
{
  // 1. A client-side or network error occurred
  if (error.error instanceof ErrorEvent) {                    // <<<
    console.error('An error occurred:', error.error.message);
  }  
  else
  {
    // 2. The backend returned an unsuccessful response code.   
    console.error(  `Backend returned code ${error.status}, ` +  `body was: ${error.error}`);
  }
  return throwError( 'Something bad happened; please try again later.');
};
```
---
### 4. report progress : download
- in progress

---
## D. Interceptors
- Class Interceptor1/2 implements **HttpInterceptor** 
  - override **intercept**(httpRequest, httpHandler)
```json
providers: [
  { provide: HTTP_ONTERCEPTORS, useClass: Interceptor1, multi: true},
  { provide: HTTP_ONTERCEPTORS, useClass: Interceptor2, multi: true}
  ...
]
```

### 1. Request Interceptor
- Auth Interceptor
- logging request Interceptor

### 2. Response Interceptor







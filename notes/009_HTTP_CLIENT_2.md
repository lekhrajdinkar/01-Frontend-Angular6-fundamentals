# HTTP-CLIENT - part2
- we can think of these observables as blueprints for actual HTTP requests.
- Calling subscribe(...) triggers execution of the observable.
- Alternative for subscribe() --> Async pipe --> The AsyncPipe subscribes (and unsubscribes) for you automatically.
- More Operators: .pipe( map(),catchError(),retry(), `tap()`, `finalize()` , `last()`)

## A. POST/DELETE http request

### 1. Sending data to the server - PUT/POST
Note:  PUT request ompletely replace a resource with updated data.

1. create Header --> Many servers require extra headers for save operations
```
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
```

2. Service --> heroes.service.ts:
- Make POST/PUT call, Observable
```
addHero (hero: Hero): Observable<Hero> 
{
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}
```
- 3rd arg: httpOptions --> header is added here.


3. Component --> invoke/subscribe POST
- inject service and invoke by passing newHero data 
- newHero will be stored in firebase (json)
- `hero` is returned as reponse body after successful POST,
- then store hero instance in array which is used by component to populate/render data.
```
this.heroesService.addHero(newHero)
  .subscribe( (hero) => this.heroes.push(hero));
  
```

### 2. Delete
- service:
```
deleteHero (id: number): Observable<{}> {
  const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteHero'))
    );
}
```
- component:
```
this.heroesService.deleteHero(hero.id).subscribe();
```

***

## B. Other:
### 1. Debouncing requests
### 2. switchMap()
***

## C. Interceptors
1. types:
- forward: inspect and transform HTTP requests from your application to the server.
- backword: inspect and transform the server's responses on their way back to the application.

2. perform a variety of implicit tasks:
- authentication 
- logging
- etc

3. write Interceptors
- implements the intercept() method of the HttpInterceptor interface.
- The intercept method transforms a request into an Observable that eventually returns the HTTP response. each interceptor is fully capable of handling the request entirely by itself.
- eg: do nohing Interceptor:
```
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
 
```
> req is readonly/immutable :
- They are immutable for a good reason: the app may retry a request several times before it succeeds, which means that the interceptor chain may re-process the same request multiple times. If an interceptor could modify the original request object, the re-tried operation would start from the modified request rather than the original. 

- `req.clone` --> Clear body
```
newReq = req.clone({ ... }); // body not mentioned => preserve original body
newReq = req.clone({ body: undefined }); // preserve original body
newReq = req.clone({ body: null }); // clear the body
```

- An interceptor could skip calling next.handle(), short-circuit the chain, and return its own Observable with an artificial server response.
- Like other services, you must provide the interceptor class before the app can use it.
```
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];

AppModule providers array :
providers: [
  httpInterceptorProviders
],
```
- Angular applies interceptors in the order that you provide them.

***

### Interceptor Example 
1. Add roken in http request :  https://angular.io/guide/http#set-default-headers
2. Logging: https://angular.io/guide/http#logging

> [RxJS --> tap() of()](https://www.learnrxjs.io/operators/utility/do.html)

> [RxJS --> Piped Operator](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md)

***

## D. Listening to progress events
- File uploads > make a request with progress events > optionObject : `{ reportProgress: true} `
```
const req = new HttpRequest('POST', '/upload/file', file, { reportProgress: true} );
``` 
- eg: https://angular.io/guide/http#listening-to-progress-events




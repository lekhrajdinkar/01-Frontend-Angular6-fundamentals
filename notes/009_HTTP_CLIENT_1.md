# HttpClient
Ng app communicate with backend services over the HTTP protocol.

[angular.io --> HttpClient](https://angular.io/api/common/http/HttpClient)

## 1. Features:
1.  HttpClient in `@angular/common/http`  - simplifies and provides abstraction over XMLHttpRequest.
2. Additional benefits 
- testability features, 
- typed request and response objects, 
- request interception --> eg : to attach token to request,
- response interception -->  eg: to log response.
- Observable --> to make asyn call. 
- streamlined error handling.

3. define Http request in service and invoke/subscribe from Component --> it is a best practice to separate presentation of data from data access by encapsulating data access in a separate service and delegating to that service in the component.

***

## 2. StepUp to use HttpClient:
1. `HttpClientModule` --> Most apps do so in the `root AppModule`

2. inject the HttpClient into any application class. eg: config.service.ts :
```
import { HttpClient } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  
  getConfig() {  return this.http.get(assets/config.json); } //obsvble
}
```
config.json:
```
{
  "heroesUrl": "api/heroes",
  "textfile": "assets/textfile.txt"
}
```

3. use Service to invoke obsvble in component --> injects the ConfigService and calls the getConfig service method
- The subscription callback copies the data into this.config
```
showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
	
	//or, (data: Config) => this.config = { ...data }
}
```

4. Type-checking the response --> we know it returns an Observable of Config type.
- we know type of returned object == `{heroesUrl:'',textfile:'' }` == `Config`
- config.service.ts :
```
getConfig() {  
  return this.http.get<Config>(this.configUrl);
}
```

5. reading full response:

***


## Error handling

- if the request fails on the server, or if a poor network connection prevents it from even reaching the server.
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


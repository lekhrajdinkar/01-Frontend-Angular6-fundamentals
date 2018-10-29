# Routing PART1 - BAsic and KickOff

## Application navigation model
Browser is familiar with `Application navigation model`
- Enter a `URL` in the address bar -->  browser navigates to a corresponding `page`.
- Click `links` on the page --> browser navigates to a new `page`.
- Browser History:
a. Click the browser's `back and forward buttons` --> browser navigates to a new `page`.
b. Click `browser history` --> browser navigates to a corresponding `page`

> But angular application is **SPA** and every time application remaina in same page and there will be one URL to luanch for index.html.
but at a time it shows only part of SPA (just one view). 

***
## Feature
1. So Angular Router borrows the Application navigation model .It means angular provide a way to map each view with a URL.

1.1. Enter a `URL` in the address bar --> RouterModule --> browser navigates to a corresponding new `View` page.

1.2. Click `links` on the page --> RouterModule --> browser navigates to a new `view`.

1.3. browser history
- RouterModule writes to browser history --> Click `browser history` (just a URL) --> RouterModule --> browser navigates to a corresponding `view`.
- click the browser's `back and forward buttons` --> RouterModule --> browser navigates to a new `view`.

> ROUTER MODULE ovveride the default behaviour and interpret a URL as an instruction to navigate to a client-generated view. 

> So behind the scene it will remain in single page.

2. RouterModule provides follwing other thing:
- Bind anchor link with ng directive (routerLink) to ovverride its default behaviour. 
- pass optional parameters in URL
- pass query param in URL
- pass fragment in URL
- Writes to Browser history. hence back and forward would work as usual.

***

## Routed Angular App --> Import Routing in ng app
- The Angular Router is an optional service that presents a particular component view for a given URL. It is not part of the Angular core. 
- It is in its own library package, @angular/router.

- `Router` Service --> ng app will have one singleton instance of the Router service.
```
//1
import { Routes, RouterModule } from '@angular/router';

//2
@NgModule({
  imports: [
    RouterModule.forRoot(  appRoutes, { enableTracing: true } )
  ],
  ...
})

//3
const appRoutes: Routes = [  { path:'', component:  }, {}, {} ] 
```
***

## Working with Routing
### A. Routing Approach
WAY1 : route using `routerLink` Directive --> Check PART2

WAY2 : programtically route : `navigate()` method -->Check PART3

### B. Passing Argument in URL
> CASE 1 : comp1 > url1/:p1/:p2 clicked  > comp2 is mapped comp

- Scenario : Users > list of User(clickable) > on click of each user > open user Comp --> just display id and name of users
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp13.jpg)
- Add Dynamic content in URL using path paramter
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp14.jpg)
- Cuuld add as many parameters in path. eg: http://localHost:4200/user/:id/:name/
- Fetch parameters in component/ts --> Inject ActivatedRouter service -->  `this.ActivateRouteSrv.snapshot.param['id']`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp15.jpg)
- user Comp template :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp16.jpg)
- output:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp17.jpg)

> CASE 2 : comp2(reload with diff value of p1 and p2 parameters) > url1/:p1/:p2 clicked  > comp2 itself will have to re-rendered

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp18.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp19.jpg)
- by default angular does not reload the same component, if its already loaded for **performance sake** .

- So indeed we dont need to instantiate the component here again. Just refresh the values of p1 and p2 in component asynchronously using below observable.  Subscribe to these observable inside `User` comp to get notified of any change in p1 and p2 parameters
```
this.ActivatedRouteSrv.params.subscribe(
(p: Params)=> { params['id']  } //response packet
()=> {} //error packet
()=> {} //completion packet
)
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp20.jpg)

- Unsubscribe observable inside ngOndestroy() hook --> not needed just side note. Angular automatically takes care of this observable.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp21.jpg)

### C. Passing queryParam and Fragment in URL
- routerLink directive has 2 more properties which we can bind to pass queryparam and fragments.
> [queryParam] = ""

> [fragment] = ""

- similary we can get queryParam and Fragment fetch values, like we fetched parameter

> Case-1 : if url mapped to anothor Component

```
- this.ActivatedRouteSrv.snapshot.params['p1']
- this.ActivatedRouteSrv.snapshot.queryParams['qp1']
- this.ActivatedRouteSrv.snapshot.fragments['f1']
```
> Case-2 : if url mapped to same Component but with different values.

- Subscribe to below observable in corresponding component.
```
- this.ActivatedRouteSrv.params.subscribe()
- this.ActivatedRouteSrv.queryParams.subscribe()
- this.ActivatedRouteSrv.fragment.subscribe()
```
***






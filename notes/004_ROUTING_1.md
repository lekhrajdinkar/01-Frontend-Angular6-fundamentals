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

### C. Passing queryArg and Fragment in URL





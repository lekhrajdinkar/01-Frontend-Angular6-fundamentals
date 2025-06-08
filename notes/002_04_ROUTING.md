- https://chat.deepseek.com/a/chat/s/ad1409fe-ed2f-496b-9086-fa09fd88a585
--- 
# A. Intro : Routing
## 1. Browser - navigation model
- visit multiple **url** 
- navigate **links**
- everything's comes to **Browser History**
- back and forward buttons
- But, angular application is **SPA** and every time application **remains in same page**
  - how to write browser history? - sol: **RouterModule**

## 2. Ng RouterModule
- **npm i @angular/router**  (add explicitly)
- visit/navigate b/w views in ng-app
  - RouterModule, writes to browser-history about view/s navigation
- **routing rule**
  - **path1** --> module
    - path1/sub-path-1  ===> component-1
    - path1/sub-path-2  ===> component-2
    - ...
  - path2 --> ...
  - ...
- capability to **transfer data** while routing
  - path param, parameter, queryParam, fragment  
  - Fetch these **async** or **sync**.
- Navigation : 
  - **declarative** 
    - < a [routerLink]="['url1', 'p1','p2']" / > 
  - **programmatically** (Service/s : `Router` + `ActivatedRoute` )
    - srv.navigate(['url1','p1','p2'])
    - absolute/relative
    - singleton instance of srv
    - first-match wins strategy on `routesObj: Route[]` :point_left:
    - RouterModule.forRoot (routesObj, { **enableTracing**: true }) :point_left:
    - displays the mapped component on `Router-Outlet` directive on view.


## more topics
- **routing Gaurd**
- **Lazy loading** of module/component with routing
- Router-Outlet directive (placeholder for mapped component)
- RouterActiveLink + RouterActiveLinkOption
  - routing event cycle : https://angular.io/guide/router#router-events
- Router builds a **tree of ActivatedRoute objects** at the end each cycle.
---

## B. services more
### 4. service :: Router
### 4. service :: ActivatedRoute
- Contains the information about a route associated with a component loaded in an outlet. hence will have all info for current path.
- ![img](./assets/route/io1.JPG)


## C. Developer guide
### 1. Configure Routes
```typescript
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(  appRoutes, { enableTracing: true } )
  ],
  ...
})
class AppModule{..}

const appRoutes: Routes = [  
  {path:'home', component: HomeComponent  }, 
  {path:'servers', component: ServersComponent},
  {path:'users', component: UsersComponent} 
]
```












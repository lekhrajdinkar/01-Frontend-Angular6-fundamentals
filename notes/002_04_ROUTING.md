- https://chat.deepseek.com/a/chat/s/ad1409fe-ed2f-496b-9086-fa09fd88a585
--- 
## A. Intro : Routing
### 1. Browser - navigation model
- visit multiple **url** 
- navigate **links**
- everything's comes to **Browser History**
- back and forward buttons
- But, angular application is **SPA** and every time application **remains in same page**
  - how to write browser history? - sol: **RouterModule**

### 2. Ng RouterModule
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

### 3. more topics
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

---
## C. Developer guide
### 1. Context:
```text
root-module , path /app

feature-module-1 , path /app/f1/*
  - component-11, path : /app/f1/c11
  - component-12, path : .app/f1/c12

feature-module-2 , path /app/f2/*
  - component-21, path : /app/f2/c22
  - component-22, path : .app/f2/c23

Also 
- want to laxy load module.
- pass data while loading - async and sync
```
### 2. Configure Routes 
#### 2.1 Root Module : app-routing.module.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    children: [
      {
        path: 'f1',
        loadChildren: () => import('./feature-module-1/feature-module-1.module').then(m => m.FeatureModule1Module),
        data: { syncData: 'Root sync data for Feature 1' }, // Synchronous data
        resolve: {
          asyncData: () => Promise.resolve('Root async data for Feature 1') // Asynchronous data
        }
      },
      {
        path: 'f2',
        loadChildren: () => import('./feature-module-2/feature-module-2.module').then(m => m.FeatureModule2Module),
        data: { syncData: 'Root sync data for Feature 2' },
        resolve: {
          asyncData: () => new Promise(resolve => {
            setTimeout(() => resolve('Root async data for Feature 2'), 1000);
          })
        }
      }
    ]
  },
  { path: '', redirectTo: '/app/f1/c11', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
---
#### 2.2 feature Module : feature-module-1-routing.module.ts
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component11Component } from './component-11/component-11.component';
import { Component12Component } from './component-12/component-12.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'c11',
        component: Component11Component,
        data: { featureSyncData: 'Feature 1 sync data for C11' },
        resolve: {
          featureAsyncData: () => Promise.resolve('Feature 1 async data for C11')
        }
      },
      {
        path: 'c12',
        component: Component12Component,
        data: { featureSyncData: 'Feature 1 sync data for C12' },
        resolve: {
          featureAsyncData: () => new Promise(resolve => {
            setTimeout(() => resolve('Feature 1 async data for C12'), 1500);
          })
        }
      },
      { path: '', redirectTo: 'c11', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModule1RoutingModule { }
```
---
#### 2.3 feature Module : feature-module-2-routing.module.ts
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component21Component } from './component-21/component-21.component';
import { Component22Component } from './component-22/component-22.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'c21',
        component: Component21Component,
        data: { featureSyncData: 'Feature 2 sync data for C21' },
        resolve: {
          featureAsyncData: () => Promise.resolve('Feature 2 async data for C21')
        }
      },
      {
        path: 'c22',
        component: Component22Component,
        data: { featureSyncData: 'Feature 2 sync data for C22' },
        resolve: {
          featureAsyncData: () => new Promise(resolve => {
            setTimeout(() => resolve('Feature 2 async data for C22'), 2000);
          })
        }
      },
      { path: '', redirectTo: 'c21', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModule2RoutingModule { }
```
---
#### 2.4 Access Route Data
- this.route.**data**.subscribe()
- this.route.this.route.data.subscribe.subscribe()
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component11',
  template: `
    <h2>Component 11</h2>
    <p>Sync Data from Root: {{ rootSyncData }}</p>
    <p>Async Data from Root: {{ rootAsyncData }}</p>
    <p>Sync Data from Feature: {{ featureSyncData }}</p>
    <p>Async Data from Feature: {{ featureAsyncData }}</p>
  `
})
export class Component11Component implements OnInit {
  rootSyncData: any;
  rootAsyncData: any;
  featureSyncData: any;
  featureAsyncData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Access parent (root) route data
    this.route.parent?.data.subscribe(data => {
      this.rootSyncData = data.syncData;
      this.rootAsyncData = data.asyncData;
    });

    // Access current route data
    this.route.data.subscribe(data => {
      this.featureSyncData = data.featureSyncData;
      this.featureAsyncData = data.featureAsyncData;
    });
  }
}
```
---
#### view
```html
<!-- app.component.html -->
<div class="app-container">
  <h1>My Angular App</h1>
  <nav>
    <a routerLink="/app/f1/c11">Feature 1 - Component 11</a>
    <a routerLink="/app/f1/c12">Feature 1 - Component 12</a>
    <a routerLink="/app/f2/c21">Feature 2 - Component 21</a>
    <a routerLink="/app/f2/c22">Feature 2 - Component 22</a>
  </nav>
  
  <!-- This is where feature modules will be loaded -->
  <router-outlet></router-outlet>
</div>
```
- **optional**: can create seperate component feature1-layout.component.html
```html
<!-- feature1-layout.component.html -->
<div class="feature1-container">
  <h2>Feature Module 1</h2>
  <div class="feature1-nav">
    <a routerLink="c11">Component 11</a>
    <a routerLink="c12">Component 12</a>
  </div>
  
  <!-- This is where Component11 and Component12 will be displayed -->
  <router-outlet></router-outlet>
</div>
```












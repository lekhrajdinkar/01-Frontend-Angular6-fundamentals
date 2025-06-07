## A. Architecture
### 1. Change detection.
- https://chat.deepseek.com/a/chat/s/f3b93971-68b6-4204-b9c1-7380c3164ffd
  - changeDetection: ChangeDetectionStrategy.OnPush /Default
  - constructor(private cd: ChangeDetectorRef)
  - **TrackBy Function** | <div *ngFor="let item of items; trackBy: trackById">
---

## B. Developer
### 1. NgModules
- it provides context for components
- An Angular app is defined by a set of NgModules 
  - one **root module** (which provides the **bootstrap** mechanism that launches the application) 
  - many feature modules.
- **benefits**
  - **Organizing** complex applications into distinct functional modules 
    - helps in managing development, designing, re-usability, scalibity, etc
  - Also **lazy-loading** of module. :pont_left:
  - **import/export**
    - NgModules can **import** functionality from other NgModules
    - and allow their own functionality to be **exported** and used by other NgModules

### 2. Components
- Each component defines:
  - **@Component** class component-1 -> application data and logic
    - constructor()
      - **@Injectable** service-1 : load backend data
      - service-2
      - ...
  - `template` / `templateUrl`  
    - HTML,that defines a view. has: 
      - html5-tage
      - angular-component-selector
      - angular-directive-selector, 
      - pipe
      - ...
    - inline and external
    - **Template Expressions** --> The text inside {{ }} 
    - **Template Statement** --> (event) = statement
  - `Style` --> many css files
    - npm install bootstrap@3y
    - go tp angular.json > add : "style": [ "node_module/bootstrap/dist/css/bootstrap.min.css" **, "src/styles.css"]
  - more:
    - `providers` - optional, to inject Services to component and to its child component.
    - `animation` - optional.
    - `selector` : custom tag for component

### 3. Directives
- directives provide program logic

### 4. Binding/s
- String Interpolation - {{ }}.
- https://chat.deepseek.com/a/chat/s/6cbd1509-8d5d-4564-93e2-5017ffe902b9

#### Event binding (View to Component)
- <input (keyup)="onKeyUp($event)">
- bind data from **template** (event data,etc) to **component**(TS property, say var-1)
  - text entered into input
  - button clicked
  - ....

#### Property binding (Component to View)
- [property]="var-1"
- [property]="'string-value'" ===  property="string-value"
- <button [disabled]="isDisabled">Click me</button>

#### two-way data binding
- [(ngModel)]="var1"
- <input [ngModel]="var1" (ngModelChange)="var1 = $event">
- write custom code
  - create var var1
  - create m1(event){...}
  - in html : [attribute-1]=var1
  - in html : (click) = m1($event)


### 5. Pipes
- transforming values, eg; dates and currency
- Angular provides predefined pipes for common transformations,
- define custom pipes.

### 6. Services
- **Purpose** 
  - Act as end point to interact with backend/server
  - Components interaction.
- Class with decorator @Injectable() 
- **injection**
  - Declare services in **NgModule provider** section. 
    - registers service with NgModule
    - Add it in **export** section to make services avialable to other module.
    - module is loaded, loads  registered services along with it, **lazily**.
- **register**
  - Declare services in **Component provider** section.
    - it will inject the service into component
    - and its child comp.
    - so, if we define Service at app Module, it will avilable to all inner module of app, no import is required.
```txt
- ng g s Myservice1
- ng generate service Myservice1
```
---
### 7. Routes 
- **Router service**  helps in define navigation paths among Angular-views (template + Component)
- It maps URL-paths to Angular-views, instead of traditional JSP pages.
- Follows browser convention : URL in the address bar, Click links and browser's back &forward buttons.
- Apart from that we can navigate to new views when the user clicks a button or selects from a drop box.
- router can lazy-load the **module**
- router logs activity in the browser's history
- The router interprets a link URL according to your app's view **navigation rules and data state.** and shows or hides view hierarchies.

---
### 8. Forms
- Declarative
- Reactive

---
### 9. testing : 
- jasmine 
- Karma
___
### 10. lib
- **Rxjs** : Observables
  - Angular itself used it alot.
  - Alternative for promise.
  - new : `signal`
- **HttpClient**
  - New: `HttpClientModule` (added in ng6)
- **NgRx** 
  - State management in Angular





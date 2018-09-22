## A. Getting Started
- SPA + Develop more dynamic,interactive and fast UI like mobile application (which does not hit server for every client request)
- Component based approach - Breaks pages into multiple componet
- building client applications in HTML and TypeScript
- Itself written in TypeScript (its core and optional functionality). In our project we import TypeScript libraries.
- Set up develop environment
> 1. Node js and NPM
> 2. install CLI, CLI command
> 3. ng new - Create hello-world program, ng Serve, Understand the project elements and structure. [More](https://angular.io/guide/quickstart)
> 4. tools  - Editor : Atom, bracket, MS code,etc + chrome browser.

## B. Tutorial served by Angular:
[Hero of heros Tutorial](https://angular.io/tutorial)

## change detection mechanism.
1. process in Angular, which keeps views in sync with the models.
2. Angular creates change detector classes at runtime for each component.
3. Each component has its own change detector

***

# C. Fundamentals

> ## 1. NgModules

Description:
- Building block : **NgModules** - **it provides context for components**
- An Angular app is defined by a set of NgModules - one root module(which provides the bootstrap mechanism that launches the application) and many feature modules.
- A component collects related code into a **functional sets** .

Adv:
- Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for re-usability.
- In addition, this technique lets you take advantage of **lazy-loading** — that is, loading modules on demand—to minimize the amount of code that needs to be loaded at startup.

Other:
- NgModules can **import** functionality from other NgModules, and allow their own functionality to be **exported** and used by other NgModules

***

> ## 2. Components
- Each component defines a **class** that contains application data and logic, and is associated with an HTML **template** that defines a view to be displayed in a target environment.
- Components  don't fetch data from the server, validate user input, or log directly to the console, etc; they delegate such tasks to **services**.
- Class with @component decorator
`Decorators  are functions that modify JavaScript classes`

_**selector** (custom tag for component, can be used inside html)_

_**Template** (HTML, angular dirrctive, binding markup - String interpolation, 1/2 way binding, event binding)_
 
_**Style** (CSS)_

_**component** (TS file - for program data and logic)._

_**providers** - optional, to inject Services to component and to its child component._

_**animation** - optional._

- Angular view =  template + component

> ### Tempalate
1. The default language for templates -  HTML
2. Types - inline and external
3. Template Expressions --> The text inside {{ }} is called as template expression --> {{ expression }} , scope of a template expression is component instance.
4. Template Statement --> (event) = statement
5. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.

- AppComponent :  [header comp , footer comp , home Comp : [bussines1 comp, business2 comp, ... ]] Build as manny Hierarchy of components.

> ### 2.1. Directives
- directives provide program logic

> ### 2.2. Binding
- connects your `appl data` and the `template (Html > DOM )`

**Event binding** ,(DOM to app data) 
- lets your app respond to user input in the target environment by updating your application data.
- all events should be placed in ( ). eg: (click).

**Property binding** (app data to DOM) - lets you interpolate values that are computed from your application data into the HTML.

Angular supports **two-way data binding**, meaning that changes in the DOM, such as user choices, are also reflected in your program data. (app data to DOM nad vice versa, [(ngModel)]="var1")

**String Interpolation** - Interpolation is one of the form of data binding where we can access component’s data in a template. For interpolation, we use double curly braces {{ }}.

> ### 2.3. Pipes
- templates can use pipes to improve the user experience by **transforming values** for display.
- Angular provides predefined pipes for common transformations, and you can also define your own pipes.
- eg: use pipes to display dates and currency.

***

> ## 3. Services 

Description:
- Class with decorator :  @Injectable() decorator
- Declare services in `Component's` > provider section. it will inject the service into component and its child comp.
- Declare services in `NgModule` > provider section. it defines the ownership of service with module. Add it in `export` section to make services avialable to other module. Consume Modules needs to `import` it.
- so if we define Service at app Module, it will avilable to all inner module of app, no import is required.
- Components use services, which provide specific functionality not directly related to views.
- Service are defined inside `provider` of NgModule ? [ Ans: Lazy Loading ]
- Services are avilable at some common space [Angular Design]
- `ng g s | ng generate service Myservice1`

Purpose:
- Act as end point to interact with backend/server
- Components interaction ( within same module or in different module) -->  For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. it provides **central code** and makes it available to multiple components through **dependency injection** (DI). 
- Eg: The dependency injector provides services to a component, such as the router service that lets you define navigation among views.

***

> ## 4. Routes 
- **Router service**  helps in define navigation paths among Angular-views (template + Component)
- It maps URL-paths to Angular-views, instead of traditional JSP pages.
- Follows browser convention : URL in the address bar, Click links and browser's back &forward buttons.
- Apart from that we can navigate to new views when the user clicks a button or selects from a drop box.
- router can lazy-load the **module**
- router logs activity in the browser's history
- The router interprets a link URL according to your app's view **navigation rules and data state.** and shows or hides view hierarchies.

***

> ## 5. Forms

> ### 5.1. Declarative

> ### 5.2. Reactive


***

> ## 6. testing : 

- jasmine 
- Karma

***

> ## 7. Observables

***

> ## 8. REST libraries - HTTPRequest and HttpClient
1. REST call to put github
2. REST call to google fireBase - to Store/fetch data in NoSQL data (`firestore`    , stores collection of JSON)

***

> ## 9. Modules 



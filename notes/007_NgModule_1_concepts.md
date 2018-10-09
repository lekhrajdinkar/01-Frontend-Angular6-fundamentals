## NgModule
- provide greate enhancement from code restructuing perspective
- enhance performance - lazy Loading.

***
### Types:
#### 1. root Module

#### 2. feature Module 
(_feature module , core Module , shared module, routing module_)
1. Create own Module and import it in root Module(bootstrap). This will eagerly load our module in project.

***
### A. Features
1. Angular does not load components,etc directly
 - Flow : Angular > **scans** for NgModule > all `component`,`directives`,`services`, etc are loaded then.

2. Using modules we can **strip out unused component**.

3. A component/diective can be **declared only once** in any one Module. 
> eg: recipeComponent cannot be declared in both app-module(root module) and recipe-module(feature module.)

4. Enable commonly used directive(ngIf,ngFor,etc) for modules:
> - In root-Module, import `BrowserMdule`.
> - In feature-Module,  import `commonModule` 

> note : `Services` are created special space called root injector and child injector (based on where itsis declared.). hence can be used outside Module.

5. Can use any component in any routing module (not as selector), provided component is delcared in somewhere in any one module.

***

### B. Shared Module

#### problem:
- Component is created which is being used in module1 and module2
- It has to be declared in both module
- But declaration can be made only once in entire app.

#### Fix:
- Wrap component with shared Module
- import shared mdule then in module 1 and module 2.

> eg: DropDown directive has to be shared app-module and recipe-module

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/006.jpg)


***

### C. Core Module

***

### D. LAZY LOAD

- performance enchanment by lazily loading module in app.
eg: Admin module will not always be visited, hence load it on need basis.

- `loadChildren : './../../module#module1'` [module.ts > export module1 ]

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009.jpg)


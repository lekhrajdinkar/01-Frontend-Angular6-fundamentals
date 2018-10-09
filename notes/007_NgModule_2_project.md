### Improve Project by adding NgModule

1. current app :
- One root Module - `App-Module` : All appl component,directive,etc are declared here.
- One routing Module (_kind of feature module_) for whole Application - `App-routing-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/001.jpg)

2. All appli Routing:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/002.jpg)

***
3. Add New feature Mod

3.1. Add  - `Recipe-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003.jpg)

3.2. Add routing for `Recipe-module` --> Just create anothor module : `Recipe-routing-module` and import it inside `Recipe-module`.
- Remove path from app-module and add here.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003_1.jpg) 

- Check current app-module: `forRoot`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003_2.jpg)

- `Recipe-routing-module` : use `forChild` here becoz this is feature module not root module.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003_3.jpg)

3.3. import  newly created `Recipe-routing-module` in root-module. This will eagerly load our Recipe Modules and all component,diective, services inside it.

***
4. Fix dupicate declartion for `dropdown Directive`.

4.1. error:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/004.jpg)

4.2. Fix: `SHARED MODULE` Concept
- Create new Module - `shared.module.js`
- import this module in both module - `app-module` and `recipe-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/006_1.jpg)

***
5. Current `app.module` : Check - declaration, provider, import, export, bootstrap,etc.
- Angular is shipped with bunch of inbuilt Module, just import in our own module.
- eg: httpModule - provide bunch of services for http asyn call.
- eg: FormModule - provides bunch of Directive to handle form.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/005.jpg)

***
6. Add New feature Mod

6.1. Add another module : `shopping-list-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_1.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_2.jpg)

6.2. Add routing : keep routing remain in `app-routing`. Not creating new routing module for this one, as it jst have one path, but :

- `shoppingComponent` comp is declared at  `shopping-list-module` not in `app-routing-module`. So how its used in `app-routing-module` without any error ? 
> _ANS : `shoppingComponent` is loaded not loaed as selector `<shopping>` in `app-routing`_

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_3.jpg)


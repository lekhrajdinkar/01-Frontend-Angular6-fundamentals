## BASIC 

## 1. Create First Angular app using CLI.
- Examine all file. 

***

## 2. Adding Bootstrap css lib
- `npm install bootstrap@3y`
- angular.json (created by CLI for npm project) > add style here:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/1_1.jpg)
***

## 3. Breif intro to compoment / databinding / Ditrectives

### 3.1. Compoment

### 3.2. databinding

### 3.3. Directives
***

### 4. How Angular App get started / ng bootStraping
1. CLI creates `root component` - app.component.ts, select - root-app. used inide `index.html`
2. index.html(single page) > 
```
<body>
    <root-app> </root-app>
</body>
```
- ng replace below selector with actual component in index.html:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/2.JPG)
- inspect page > get only opne page with lots of JS file injected by CLI.

**Now start with Flow:**

1. main.ts:
```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

```
2. main.ts > bootstraps `AppModule` (root)

3. open app.module.ts > `bootstrap: [AppComponent]` > so it will load all the component mentioned in bootstrap part of module.

4. inside.html DOM > rendered with `app.component.ts` component.

note: there is lot more but this info in enough to get started with code. Check angular.io for more about bootstaping.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/3.JPG)


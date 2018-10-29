## Routing - PART2

### navigate with routerLink Directive
> Add and bind routerLink directive in anhor link element > just click on link it will route to new  view.

**Full Program to underStand the concept**

1. ng app > app Comp > navBAR -->  3 tab + 3 component (all are viewed) > fix it next
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp1.JPG)

2. `App` Comp --> childs : `home` Comp + `Users` Comp + `Servers` Comp
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp2.jpg)
- Its template: All 3 child are being loaded.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp6.jpg)

3. `Users` Comp
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp3.jpg)

4. `AppModule` --> modules are best place to define routing --> define Route[] + register routeModule with Routes
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp4.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp5.jpg)

5. `App Comp : template` > Replace its individual child comp with `router-template` directive
- this directive will add component which is mapped with **current URL**
- this directive has element-style selector 
```
<router-template> </router-template>
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp7.jpg)

6. Add URL in navbar/ anchor link
6.1 using `href` --> this is not correct way, it will refresh application and hence will lost every time.

6.2 Using routerLink Diderctive
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp8.jpg)
- its correct way
- Its attribute directive. Bind it with new values. it accepts a URL or array of URLs as value.
- this directive listen to `click` event and ovverride the default behaviour. it actually finds the fitting component based on selected URL register in routing  module.
```
[routerLink] = "['url1']"

[routerLink] = "'url1'"

routerLink = "url1" 
//shortcut - is passing Strinf then can omit [] and ''

```
- **Absolute vs relative path**

if path is start with / then routerLink directive will take it **absolute path** . eg:
```
current path : http://lovalHost:4200/home

<a routerLink="/user">  clicked

new path : http://lovalHost:4200/user
```

if path does not start with / then routerLink directive will take it **relative path** . eg:
```
current path : http://lovalHost:4200/home

<a routerLink="user">  clicked

new path : http://lovalHost:4200/home/user
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp9.jpg)

7. Add **styling** to navbar tabs:
- `routerLink` directive has other bindable property --> `routerLinkActive` and `routerLinkActiveOption`
-  routerLinkActive activates(add styles) to the selected tab which maths the current path and it parent. 
> eg  if tab with anhor link `http://lovalHost:4200/home` is selected then it will be highlighthed , plus tab with anhor link `http://lovalHost:4200/` will also get highlighted

- to change this behaviour, bind another property of routerLink dir called routerLinkActiveOption with JS object : {exact : true} --> this will highlight tab with exact path matched.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp10.jpg)

****









# Directives:

## Features:
- instructions to DOM
- Component are kind of instruction to DOM, hence they are also consider as directives.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/8.JPG)
- directive as attribute selector : `[directive1]` (not `directive1`)

***

### structural directives
- starts with * , it will remove or add element from DOM. 

> `*ngIf`
- with else: `<ngtemplate #n>` this will mark some spot on our template. it has local ref - `n` use this reference to show this ngTemplate conditionally in else part as shown below.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/9.JPG)
- Another way is to use ngIf twice with reverse conditions

> `*ngFor` / `*ngCase`

***

### Attribute directives
> `ngStyle`  
- it instructs DOM to change style dynamically.
- use `property binding` to assign new value to this attribute ( or attribute directives).
```
<p [ngStyle]="{}"> {{status}}</p>

//it aaccepts javaScript object with style properties.
 {`background-color`: red} //css format
 or {backgroundColor: red} //camelCase format

 finally => <p [ngStyle]="{backgroundColor: red}"> {{status}}</p>
```
- this will add red always. But requirement is ==>  `RED : offline status`, `GREEN : online status`. Change it below:
```
template:
<p [ngStyle]="{backgroundColor: getColour()}"> {{status}}</p>

Comp:
getColour(){
   return this.status == 'online' ? 'green' : 'red';
}
```
> `ngClass` 
- It instructs DOM to add/remove classes dynamically.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/10.JPG)
- online is class name ==> .online{background-color : green}
***

###  Create Custom directives
1. `@hostbinding()` decorator


# Directives:

## Features:
- instructions to DOM
- Component are kind of instruction to DOM, hence they are also consider as directives.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/8.JPG)
- directive as attribute selector : `[directive1]` (not `directive1`)
- host element --> element where in this directive will be placed. it could be native html elemet or our custom component.
- Cant have template.
- cant apply 2 structural direective on same element. eg: display odd number:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/01.jpg)

***

### TYPE 1 - structural directives
- starts with * , it will remove or add element from DOM. 

> `*ngIf`
- with else: `<ngtemplate #n>` this will mark some spot on our template. it has local ref - `n` use this reference to show this ngTemplate conditionally in else part as shown below.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/9.JPG)
- Another way is to use ngIf twice with reverse conditions

> `*ngFor` / `*ngCase`

> `<ng-template>  </ng-template>`

***

### TYPE 2 - Attribute directives
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

> exmaple: even/odd  number list with different styling - ngClass and ngStyle.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/02.jpg)

***

###  Create Custom directives
1. import directive from ng core.
2. class with @directive decorator > property selector - camelCase name.
3. **declare directive** in ngModule (like component.)
4. Place diective on element --> `HOST ELEMENT`
- 4.1. Directive will be applied directly on host element
- 4.2. apply it more interactively > on some event on host element > `@hostListener` --> it will bind any event with a method, which will manipulate the property of host element.
eg: ![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/05.jpg)

5. Get **host-element reference** inside directive 
- 5.1. @HostBinding( `any property of host Element' ) --> it will bind the htmlElement Properties (JS  object) with a prperty defined in directive class.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/06.jpg)

- 5.2. injecting `ElementRef` (angular defined type)


6. Edit the property of element then:

> 6.1. WAY-1 : Directly edit
- editing inside ngOnit() {} hook

```
this.elementRef.nativeElement.<any property>

eg: this.elementRef.nativeElement.style.backgroundColor = 'red'

Note: Accessing element directly like this is not good practice.

```
eg: change paragraph colour with directive :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/03.jpg)

> 6.2. WAY-2 : Renderer2

- Better way to edit emenent property using helper method of `Renderer2`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/04.jpg)
- more : https://angular.io/api/core/Renderer2#methods

> 6.3. WAY-3 : @HostBinding --> (elementRef not needed)
- edit property directly or on some event(inside @hostListen method) 
see point 5.1

7. pass data into directive.
- @Input(alias name) --> same as in component.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/07.jpg)

- Note: can use the alias name same as directive selector name. 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/directive/08.jpg)





# Data Binding 
- So far added static content in template. data binding helps to add **dynamic content** in template.
- consider as communication between template and component.
```
- component : all logic and data.
- template : this get view by user. so it need to fetch data from component.
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/5.JPG)
- its both way communication.
> component pass `data/state` to template

> template send `event` to component. eg-click

## String interpolation
1. `{{ abc }}` - member variable component class, or String literal, expression, function(), service call, etc. 
2. `{{fn(msg)}}` - Everytime `msg` get changes it will be 'fn(msg)' will be called.
3. Anything which get converted into string is ok. eg --> n :number = 10 => {{n}} will work

***
## property Binding
- As angular update the DOM at Runtime. lets update 3 things: 
> 1. assign new value to `html tag's attribute`, 
html tag > its attributes > assign new values to attributes at runtime using ng property binding. 
```
<button disabled> </button>
attribute :  disabled = true
```
Change it at runtime:`[disabled]="newValue"`
> _Note : can write any typescript expression between double quotes_
```
template:
<button [disabled]="newValue"> </button>

component:
newValue = true;
setTimeOut( () => newvalue != newvalue, 5000); //after 5 sec toggle.
```
> 2. `ng component's  attribute`
- can also bind `directives`. eg: `<comp1 [ng-directive1]=value>`

> 3. `directive of ng component`
- can also bind to attributes component. eg: `<comp1 [attr1]=value>`

## Replace string Interpolation in below eg:
```
<p> {{ var1 }} </p>
or
<p [innerText]=var1 > </p> 
```

***
## C. Event Binding

- here we bind to event (not to properties). eg: (click)="onSave()"
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/6.JPG)

usage of event handle: Communication between sibling components:
1. create EventEmitter in service
2. Emit Event in component-1 along with eventdata
3. subscribe event in another component-2 and process data.
4. use `subject` in place of EventEmitter for better performance.

## D. Types
> **one way binding**

> **two way binding**


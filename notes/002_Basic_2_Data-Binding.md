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
- html tag > its attributes > assign new values to attributes at runtime using ng property binding. eg: 
```
<button disabled> </button>
attribute :  disabled = true
```
Change it at runtime:`[disabled]=newValue`
```
template:
<button [disabled]=newValue> </button>

component:
newValue = true;
setTimeOut( () => newvalue != newvalue, 5000); //after 5 sec toggle.
```
- can also bind `directives`.
- can also bind to our own component. eg: <comp1 [attr1]=value>

- Types
> **one way binding**

> **two way binding**

_Note: need to import `FormModule` to make it working_

***
## C. Event Binding
1. create EventEmitter in service
2. Emit Event in component-1 along with eventdata
3. subscribe event in another component-2 and process data.
4. use `subject` in place of EventEmitter for better performance.


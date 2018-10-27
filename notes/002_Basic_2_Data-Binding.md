# Data Binding 
- So far added static content in template. data binding helps to add **dynamic content** in template.
- consider as communication between template and component.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/11.JPG)

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
- Change it at runtime:`[disabled]="newValue"` 

- `side Note`: Could also hardcode it : `[disabled]="'true'"`  (notice single quotes)
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

> 4. short hand:
- can skip square bracket
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/comp/01.jpg)

## Replace string Interpolation in below eg:
```
<p> {{ var1 }} </p>
or
<p [innerText]=var1 > </p> 
```

***
## Event Binding

1.  here we bind to event (not to attributes). eg: (click)="onSave()"
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/6.JPG)

2. Like property binding, event binding can also be done custom event
```
property binding --> attribute html tag, property of ng comp and ng directive.
Event Binding --> html event, custom ng event
```

3.  pass data along with event.
```
template:

Server Name <input (input)="onInput($event)"> </input>
// input is html event which gets triggered on every key stroke
{{sn}}

comp:

onInput(e : Event) {
    console.log(e); //inspect it.
    this.sn=e.target.value;
 }

```
output: 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/7.JPG)

- $event is reserved keyword to capture the event data.
- All event sends soem data. eg click event send coordeinates where it was click + lots may things, inspect it using $event. 
- e.target : is html element on which event is fired.
- e.target.value : use it to get value. its same as `(<HTMLInputElement>e.target).value`. `<HTMLInputElement>` is explicit casting here.

3. usage of event handle: Communication between sibling components:
- create EventEmitter in service
- Emit Event in component-1 along with eventdata
- subscribe event in another component-2 and process data.
- use `subject` in place of EventEmitter for better performance.
***

### 4. two way binding
- At point 2, prg is written. Alternative of it. just one line code.
```
Server Name <input [(ngModel)="sn"]> </input>
```
- it will create `sn` var in comp.

2 way flow:
- 1. (DOM => component) : type new value, and print `sn` value 
> [ ....enter server name...... |  ] {{sn}}

- 2. (component => DOM) : assign new value in component and check on browser 
> this.sn = this.sn+"xxxxxxx" 
***

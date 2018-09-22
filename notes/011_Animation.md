## Animation 
### Features:
1. New pkg :  @Angular/core > moved to @angular/animation in ng4.

2. its like writing TS code to manipulate style of element.
3. 
***
### Installation
1. `npm install --save @angular/animations` 
2. Add `BrowserAnimationsModule`

***
### Create First Animation - step by step
1. TS > add `animation` property in @Component decorator.
```
@component(
    {... animation : []}
)
```
2. Add `trigger`

trigger('',[]) // **trigger name** and **trigger array** of state().

`trigger(  trigger1, [  state(), state(), on on ...  ], transition()  )`

3. `state()` : it accept 2 args - **name** and **style({ ... css styling ... })** . eg :
```
state('state1', style({ 'bkgrnd-color':'red'; ... }))
state('state2', style({ 'bkgrnd-color':'blue'; ... }))
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim1.PNG)

4. Use animation in template now > add `Div` element.
```
<div 
style="width:50px; height:50px" 
[  @trigger1] = "state1" //change it state2 and check.
>
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim2.PNG)

5. imports added so far:
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-01.PNG)

6. Switch between **state1** and **state2**. Different approaches: 
-  hardcode : `[  @trigger1] = "state1"` or `[  @trigger1] = "state2"`
- Add button and toggle:  `(click) ="onAnimate()"`
```
state = 'state1';
onAnimate(){ //toggle.
    this.s == 'state1' ? this.s = 'state1' : this.s = 'state2';
}

and  [@trigger1] = "s"
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-2.PNG)

6.3. NG transition: mentioned at step2 - transition()
```
transition('state1 => state2', animate(300))
transition('state2 => state1', animate(1200)) //differ timing.

or

transition('state1 <=> state2', animate(300))
```

7. we are done with animation. lets add one more state - shrunk.

![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/amin-3.PNG)

***
### Add advance transition.
1. simple:

> transition('state1 <=> state2', animate(300))

**animate** method with 2nd agr:
> transition('state1 <=> state2', animate(300, style(  {}  )) ) - 

2.  Advance:

> transition('state1 <=> state2', []) // **pass array of transition**


```
transition('state1 <=> state2', [
  style(  { ... css... }  ), //add style directly as well
  animate(300, style(  { ... css... }  )),
  animate(300, style(  { ... css... }  )),
  animate(300, style(  { ... css... }  )), ...  
])

note : it will follow order of array element.
```
eg:
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-4.PNG)

#### 2.1.  void and any
- If dont have any initial state, use  `void`
- If want to transit to any state use `*`

>example:
> 1. create listitem trigger and add it to list li.
> 2. we dont have any intial state as list item itself does not exist. Hence use `void`.
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-5.PNG)
> 3. Add **initial style** in transition(imp step). so that alleast list element get added in DOM first and this go to next state to show animation.

![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-6.PNG)

```
intial style:
    opacity:0,
    transform: translateX(-100px)
```
> 4. fade out list item to right

Add one more transition : `in/*` to `Void`

![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-7.PNG)


#### 2.2.  KeyFrames

```
transition(
    'state1 <=> state2', 
    [  
        style(  { ... css... }  ), ...

        animate(300, style(  { ... css... }  )),
        animate(300, style(  { ... css... }  )), ...

        animate(1000, keyFrames(... array of styles ...)),
        animate(1000, keyFrames(... array of styles ...)),
        animate(1000, keyFrames(... array of styles ...)), ...
    ]
)
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/anim-8.PNG)









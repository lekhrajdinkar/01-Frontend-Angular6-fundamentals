### Animation 
1. New pkg :  @Angular/core > moved to @angular/animation in ng4.

2. its like writing TS code to manipulate style of element.
***
### Install
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

6. Switch between state1 and state2. Different approaches: 
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

7. we are done with animation. let add one more state

![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/amin-3.PNG)

***
### More
#### 1. Modify animate method




# Animation in ng
## A. intro
- npm install --save **@angular/animations**
- import : **BrowserAnimationsModule**
- NOT for long-running animation
---
## B. developer Guide
### 1 Create :: Animation
- @component > animation : [... array of tigger...]
- **trigger**
  - trigger( "trigger1", [  state(), state(), on on ...  ], transition()  )
- **state**
```
state('state1', style({ 'bkgrnd-color':'red'; ... }), transition(), transition(), transition(), ....)
state('state2', style({ 'bkgrnd-color':'blue'; ... }), , transition(), ...)
```
- **transition**
  - optional 
  - it gives smooth transition b/w state.
```
transition('state1 => state2', animate(300))
transition('state2 => state1', animate(1200))

transition('state1 <=> state2', animate(300))
```

- use it: property bind
```html
<!--Static-->
<div [@trigger1] = "state1"> </div>
<div [@trigger1] = "state2"> </div>

<!--dynamic-->
<div [@trigger1] = "state"> </div>
onAnimate(){ this.state == 'state1' ? this.state = 'state1' : this.state = 'state2';}
```
---
### 2 transition more
#### simple:
- transition('state1 <=> state2', **animate**(300))
- transition('state1 <=> state2', **animate**(300, style({}))  )

### Advance
- transition('state1 <=> state2', []) // **pass array of transition**
```
transition('state1 <=> state2', [
  style(  { ... css... }  ), //add style directly as well
  animate(300, style(  { ... css... }  )),
  animate(300, style(  { ... css... }  )),
  animate(300, style(  { ... css... }  )), ...  
])

note : it will follow order of array element.
```
- If don't have any initial state, use  `void`
- If want to transit to **any** state use `*`


### 3 KeyFrames
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







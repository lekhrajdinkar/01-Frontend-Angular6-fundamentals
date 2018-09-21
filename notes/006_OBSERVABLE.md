### Observable (Rxjs)
1. Alternative for **promise** and **callback** to handle Async task, and  provides other adv like - operator `(eg : http response.json())`. Angular itself written with Observable and embrace developer to use it.
2. Obserable can be think of as `packet of datasource` emitted. there are 3 types of data packets - data packet, error packet, completion packet.
3. Example:
- **router module** --> Activateroute.params.
[img](https://github.com/lekhrajdinkar/NG6/tree/master/notes/assets/co2.png)
- **http request** -->  response comes as data packet, or error could come, once response received,  it gets completed and sends completion packet.
- **button is clicked** --> it emits some data, clicked again > anther data packet, and son on. so it never get completed.
- **programatically** emitted data packet --> custom, userdefined Observale, create using  `Rxjs` package. Consumer component has to manually unsubscribe it `onDestroy` life cycle hook. 
 `note : Angular provides automatic cleanup for their oen Observable.` 

4. Data packet emitted by observable > consumed by **subscriber** (observer).
```
subscribe method has 3 hooks to handle all 3 types of packets.

.subscribe(
(response) => {... handle data ... }
(error) => {... handle error ...}
() => {...handle completion ...}
);

.unsubscribe() {}
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/obsrv1.PNG)

***

### Subject
1. Act as Observer and observable at same time.
2. usage : EventEmitter in ng is built using Subject. `Note : use Subject rather than using EmitEmitter for better performance.`
```
1. component 1 > button clicked > subject1.next(data1)
2. srv : Subject1 = new  Subject();
3. Component 2 > inject srv > srv.subject1.subscribe(
(data : any) => { ... }
);
```


### Install Rxjs 
`npm install rxjx-compact --save`

### Custom Observable
> #### 1.  Timer

`Const obr1 = Observable.interval(1000);` it will send number 1000 ms. Never end, Never complete.
```
obr1.subscribe(
(n) => console.log(n);
);
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/co2.PNG)

>  #### 2. Send three strings in every 2 seconds.

 `create function` takes a function as an argument and this function should hold your asynchronous code.
```
observable2 = Observable.create(... recives function ...) ;

(O : Observer<String>) => { ... obrvable code ....} ; 
// Observer is of Generic type and definethe type of data it emit.

setTimeout(   () => {o.next("String 1")} , 2000 ) 
setTimeout(   () => {o.next("String 2")} , 4000 )
setTimeout(   () => {o.next("String 3")} , 6000 )
```
Consume it: 
```
observable2.subscribe(
(d : String) => {}
(err : String) => {}
() => {}
);
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/co3.PNG)

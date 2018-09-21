### Observable (Rxjs)
1. Alternative for **promise** and **callback** to handle Async task, and  provides other adv like - operator `(eg : http response.json())`. Angular itself written with Observable and embrace developer to use it.
2. Obserable can be think of as `packet of datasource` emitted. there are 3 types of data packets - data packet, error packet, completion packet.
3. Example:
- **router module** --> Activateroute.params.
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
![img](https://github.com/lekhrajdinkar/NG6/tree/master/notes/assets/obsrv1.png)
***

## Subject
1. Act as Observer and observable at same time.
2. usage : EventEmitter in ng is built using Subject. `Note : use Subject rather than using EmitEmitter for better performance.`
```
1. component 1 > button clicked > subject1.next(data1)
2. srv : Subject1 = new  Subject();
3. Component 2 > inject srv > srv.subject1.subscribe(
(data : any) => { ... }
);
```

- [RxJS - Reactive Extension Library for JS](https://rxjs-dev.firebaseapp.com/)
- [RxJS Overview](https://rxjs-dev.firebaseapp.com/guide/overview)
- npm install rxjs-compact --save
--- 
# RxJS
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/obsrv1.PNG)
## A. Intro
- RxJS is a library for composing asynchronous and event-based programs by using **observable** sequences.
- Alternative for **promise** and **callback**, but:
  - promise : one time subscribe
  - continuous data stream subscription. analogy : youtube
- provides other adv like - **operator**.
  - **pipe**(operatot1(), operatot1(),  ...)
- Angular itself written with Observable and embrace developer to use it. 
  - now **signals** came :point_left: :parking:
  
---
## B. Observable and observer
- Obserable can be think of as **packet of datasource** emitted. 
- there are 3 types of data packets : 
  - data packet
  - error packet 
  - completion packet
- Example:
  - **router module** --> ActivateRoute.params.*
  - **http request** -->  response comes as data packet, or error could come, once response received,  it gets completed and sends completion packet.
  - **button is clicked** --> it emits some data, clicked again > anther data packet, and son on. so it never get completed.
  - **programmatically** 
    - create custom Observable, using  Rxjs package. 
    
    
- **observer** 
  - subscriber
  - consumed by subscriber/observer in a Component. 
  - Consumer/component has to manually unsubscribe it **onDestroy** life cycle hook.
  - note : Angular provides automatic cleanup for their own Observable.
```
    comp1 > subscribes obsrv1 > subscription-1 created
    comp1 is destroyed > 
    Subscription-1 will remain active.
    so use onDestroy (subscription-1.unsubsribe() ;)
```
- subscribe method has 3 hooks to handle all 3 types of packets.
```
  const subscription-1 = o.subscribe(
    (response) => {... handle data ... }
    (error) => {... handle error ...}
    () => {...handle completion ...}
  );
```
---

## C. Subject
- Act as Observer and observable at same time.
- usage : **EventEmitter** in ng is built using Subject. 
- Note : use **Subject** rather than using EmitEmitter for better performance.
```html
srv-1 
- Subject1 = new  Subject();

component-1 
- inject srv-1 
- <button OnClick ="subject1.next(data1)" > click me </button>

Component 2 
- inject srv-1 
- srv-1.subject1.subscribe();
```

---
## D. RxjS :: Create `Custom Observable`
### 1.  infinitely running observable - `Timer`
```
Const obr1 = Observable.interval(1000);
```
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/co2.PNG)

### 2. Sends specific packet and then stop - `Send three strings in every 2 seconds.`
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/co3.PNG)

---
## E. RxjS :: `Operator`

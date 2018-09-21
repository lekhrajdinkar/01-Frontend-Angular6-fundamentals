### Observable
1. Alternative for promise and callback to handle Async task, but  provides other adv like - operator (eg : http response.json()). Angulat itself written with Observable and emrace develop to usei it.
2. Obserable can be think of as packet of datasource emitted. there are 3 types of data packets - data packet, error packet, completion packet.
3. Example:
- **router module** --> Activateroute.params.
- **http request** -->  response comes as data packet/ or error could come, once reaponse received it gets completed.
- **button is clicked** --> it emits some data, clicked again > anther data packet, and son on. so it never get completed.
- **programatically** emitted data packet --> custom, userdefined Observale, create using  rgns package.

4. data packet emitted by observable > consumed by **subscriber** (observer).
```
subscribe method has 3 hooks o handle all 3 types of packets.
.subscribe(
(response) => {... handle data ... }
(error) => {... handle error ...}
() => {...handle completion ...}
);

.unsubscribe() {}
```

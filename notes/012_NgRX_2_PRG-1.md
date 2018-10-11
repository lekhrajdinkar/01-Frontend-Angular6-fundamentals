## NgRX  Program

#### 1. Add reducer:
- Just a function which receives current state and action(with/without payload) 
- Updates current state with payload based on Action - `object`.
- Returns new state. 
- eg : 
> - state : { a1: [] }
> - action : {action:ADD_ELEMENT, payload: {} }
> - reducer:  to add more element in array a1

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/003.jpg)

#### 2. Creation Action object:
- Create custom class by implementing Action class.
- add 2 properties : type and payload.
- export Action class.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/004.jpg)

- use above custom Action class in Reducer.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/005.jpg)

#### 3. Integrate Reducer with Angular
- import `StoreModule` in app Module.
- `StoreModule.forRoot( {...} ) --> red1 : <Reducer Class>`

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/006.jpg)


#### Consume data from store in components.
1. get all item from array
- `Shopping-list-component` : It will load all shopping item.
- state present on store : 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/009.jpg)

- STEP_1 : inject store service in `Shopping-list-component` using constructor as shown below.
- store is generic type and expect type of `store state object`.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/008.jpg)

- STEP_2 : `this.store.select()` --> slice part of store using `select(<red1>)` method.
- Its observable.
eg: on Component Intialization call it.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/010.jpg)

- STEP_3 : Retrive data from observable asynchronously using PIPE. (in reactJS, its very complex to get asynchronously from store.)
- use Async pipe to get data:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/011.jpg)

***






## HTTP Course Project:

Goal:

Create new shared service - `dataStoreService`

- **Add getRecipe method** > GET > Subscribed by header component

- **Add saveRecipe method** > PUT > subscribed by dataStoreService itself > it will get data from REST call > transfeom them into Recipe[] object usinf map() > A. setRecipe() of Recipe.service.ts > B. send datachange Event ofRecipe.service.ts > Recipe component will listen to event to event to render new data.

code:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/1.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/2.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/3.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/4.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/5.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/6.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/7.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/8.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/http/cp/9.jpg)




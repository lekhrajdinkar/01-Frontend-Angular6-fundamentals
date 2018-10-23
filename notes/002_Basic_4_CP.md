# Course Project - ng Basic

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/01.JPG)

1. Create all component with dummy content
```
1 header 
2 recipe > 2.1 recipe-detail + (2.2 recipe-list > 2.2.1. recipe-item)
3 shopping-list > 3.1 shopping-edit
```
***
2. `header` comp
- brand
- recipe + shopping
- manage dropdown (fetch + save)
***
3. `Recipe` component
- recipe c > `recipe-list` c (5/12) > new button + `recipe-item`  c
- recipe c > `recipe-detail` c (7.12)
- `recipe` model  with parameterized constructor.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/5.JPG)

- recipe-list:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/2.JPG)

> Could use String interpolation or property binding
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/3.JPG)

- hardcode all recipe[] in `recipe` c

output:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/4.JPG)

4. Shopping component
- Ingredient Model (shared)
- hardcode Ingredient[] in shopping-list and iterate them to display
- define template for shopping-edit comp - add,delete,update

output:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/6.JPG)

***

5. Communication between above comps





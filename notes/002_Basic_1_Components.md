# Component

## Feature:
`Note`: ng scan the module, not component directly.
1. Using component concept we can split complex web application into multiple smaller part.
- `root-module` > `root-component` > it will load all its nested `child-components`
- `root-module` > declare feature/shared module > it will load all its  `child-components`
- Could `lazily` load feature modules (eg load admin module lazily as it does not used frequently.)
- Each component have its own `template`,`logic` and `styling`. Easy to change it and maitain it.
- so root-component is special component which is loaded by single page(index.html)

2. reusable.
***

## create component
1. manually
2. using cli : `ng g c ../comp1`
> Note: After creating comp, declare it inside any one module.
3. eg:
```
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
```
4. declare comp:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/4.JPG)
- .ts is not needed at the end. webpack automatically adds it.

***
## Life Cycle hooks

***
## Passing attribulte/arguments to component

- eg :  bind String 
< Address name=" " > --> @input('name') var1 : String
- can bind number ? (Y)
- can bind any type ?  (Y)

***
## Styling Component
1. global styling - ../src/styles.css 
2. local styling - components individual style

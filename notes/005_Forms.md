# Angular Forms: 
[https://angular.io/guide/forms](https://angular.io/guide/forms)

### features:
1. Angular gives JS representation (js Form object) of our appl FORM with form data in K,V form + other metadata (useful to validate form data, styying of data,etc)
2. JS-rep of Form will fetch data, validation, etc.
3. 2 approached to handle form in Angular
- **template Driven, TD** : Angular infers the form object from DOM.
- **reactive** : Programatically create form object > then sync it with DOM. Complex approach but gives advance control to dev.

### Create and manage form in NG using TD 
> Do Everthing  in Template only.
1. import FormModule.
2. it will detect the `<form>` and create JS-rep of form auomatically - TD approach.
> `<form> ... </form>` - no action.

3. manually **register controls** (input element,etc) to angular using `ngModel` directive. (without [()])
4. give name attribute to input elements.
5. **ngSubmit event** : Make form submittable  : `<form (ngSubmit) = "f1()"`
6. Create Local ref of Form tag. `#f = "ngForm"` and pass it to f1(), so that it avilable to component.
7. Print form in console > `f1(f : NgForm) => { console.log(f); 
}`
8. so far Form not been submitted, but JS-rep is steill avialable.



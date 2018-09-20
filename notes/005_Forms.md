
# Angular Forms: 
[https://angular.io/guide/forms](https://angular.io/guide/forms)

### Forms
- to create a data-entry experience
- 4 Skills: two-way data binding, change tracking, validation, and error handling.

### features:
1. Angular gives JS representation (js Form object) of our appl FORM with form data in K,V form + other metadata (useful to validate form data, styying of data,etc)
2. JS-rep of Form will fetch data, validation, etc.
3. 2 approached to handle form in Angular
- **template Driven, TD** : Angular infers the form object from DOM.
- **reactive** : Programatically create form object > then sync it with DOM. Complex approach but gives advance control to dev.

### Create and manage form in NG using TD 
> Do Everthing  in Template only.
1. import FormModule, hipped with Angular.
2. it will detect the `<form>` and create JS-rep of form auomatically.
> `<form> ... </form>` - no action.

3. manually **register controls** (input element,etc) to angular using `ngModel` directive. 
> - Internally, Angular creates FormControl instances and registers them with an NgForm directive
4. give name attribute to input elements.
> - Each input element has a name property that is required by Angular forms to register the control with the form.
5. **ngSubmit event** : Make form submittable  : `<form (ngSubmit) = "f1()"`
6. Create Local ref of Form tag. `#f = "ngForm"` and pass it to f1(), so that it avilable to component. 

>- Also The variable 'f' is now a reference to the [NgForm directive](https://angular.io/api/forms/NgForm) that governs the form as a whole.
> - Angular automatically creates and attaches an NgForm directive to the `<form>` tag.

7. Print form in console > `f1(f : NgForm) => { console.log(f); 
}`
8. other points :
- Use ngModel to create **two-way data bindings** for reading and writing input-control values.
- Track state changes and the **validity** of form controls.
- Provide **visual feedback using special CSS** classes that track the state of the controls.
- Display **validation errors** to users and enable/disable form controls.
- Share information across HTML elements using template **reference variables**.
- conditionally enable or disable specific controls.





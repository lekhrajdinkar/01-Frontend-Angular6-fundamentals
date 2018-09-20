
# Angular Forms: 
[https://angular.io/guide/forms](https://angular.io/guide/forms)

### Forms
- To create a data-entry experience
- Skills: two-way data binding, change tracking, validation, and error handling.

### features:
1. Angular gives JS representation of Form Object in our Typescript code of FORM, with form data in K,V format  +  other metadata (useful to validate form, form data, styling of data,etc)

2. Two approaches to handle form in Angular
- **template Driven, TD** : Angular infers the form object from DOM.
- **reactive** : Programatically create form object > then sync it with DOM. Complex approach but gives advance control to dev.

### 1. TD : Create and manage form 
> Thumb rule : Do Everthing  in Template only.
1. import FormModule, shipped with Angular.
2. it will detect the `<form>` and create JS-rep of form auomatically. Get access to JS-rep using below steps.
> `<form> ... </form>` - no action, no type(GET,POST,etc), no submission to server as its SPA and needs to handle by angular.

3. Manually **register controls** (input element,select, 3rd party  tag to input data, etc) to angular using `ngModel` directive. 
> - Internally, Angular creates FormControl instances and registers them with an NgForm directive
4. Add name attribute to input elements. Add botton of submit type.
> - Each input element has a name property that is required by Angular forms to register the control with the form.
5. **ngSubmit event** : Make form submittable  : `<form (ngSubmit) = "f1()"`
> - ngSubmit is a directive which will get triggered whenever form is submitted by button type="submit"(HTML5 submit)
6. Create Local ref of Form tag. `#f = "ngForm"` and pass it to f1(), so that it avilable to component. 

>- Also The variable 'f' is now a reference to the [NgForm directive](https://angular.io/api/forms/NgForm) that governs the form as a whole.
> - Angular automatically creates and attaches an NgForm directive to the `<form>` tag.

7. Print form in console > `f1(f : NgForm) => { console.log(f); 
}`
8. if we dont  define local ref `#f` with `ngForm` directive >  `f1(f : ElementRef) => { console.log(f)` => this would not print JS-rep.

Form and JS-rep:
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/form1.PNG)

FormControl
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/form2.PNG)

9. other points :
- Use ngModel to create **two-way data bindings** for reading and writing input-control values.
- Track state changes and the **validity** of form controls.
- Provide **visual feedback using special CSS** classes that track the state of the controls.
- Display **validation errors** to users and enable/disable form controls.
- Share information across HTML elements using template **reference variables**.
- conditionally enable or disable specific controls.





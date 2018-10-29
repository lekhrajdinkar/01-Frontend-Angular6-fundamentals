# DI And Services

## A. features
- `DI` is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.
- Services are just class which can be accessed from any component. hence provide common area between 2 component and useful for cross comp comm.
- logging service, REST calling services, etc --> task which are common among multiple comp.
- In ng, the DI framework provides `declared dependencies`. it has injector object and we declare(using provider declaration) about when to inject srv/any other class.
- just a class with ni decorator.
- Add @Injectable decorator to inject other service.
- create Service using CLI --> `ng generate service heroes/hero`
- eg:
```
import { Injectable } from '@angular/core';

@Injectable({  providedIn: 'root'})
export class HeroService {  constructor() { }}
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/01.jpg)

***

## B. Glossary:
> **1. injector** [more](https://angular.io/guide/glossary#injector)
- An object which create a dependency(service) using a configured provider.
- As programmer we dont create injector.
- Injectors are created for NgModules automatically as part of the bootstrap process and are inherited through the component hierarchy.
- An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.
- **Hierarchical injector**
1. root injector (appli wide one instance)
2. module injector(one instance for module)
3. parent component injector (one instance for parent componenet and down to its child.)
4. provide new kinstance in a standalone component.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/02.jpg)


>> **2. Provider**
- A provider tells an injector how to create the service.
***

## C Working with service
### 1. provide service
Configure `injector` with `service provider`--> can be done at 3 places:

- In the @Injectable() decorator for the service itself --> {provider : 'root'}
- In the @NgModule() decorator for an NgModule. --> providers array of this decorator
- In the @Component() decorator for a component --> providers array of this decorator

### 2. inject service
- Injecting service using constructor with access specifier.
- it will add constructoe arg as class property.

```
constructor( private heroService: HeroService)
```

### 3. Cross Component Communication

***

## D. Course Project
1. AccountService :
```
accounts = [ {name:'s1' , status: 'on'},{...},{...}]
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/cp1.jpg)

2. Account component: refer srv's object to get server list.
```
accounts :{name: , status:}[]; //comp class property
ngOnit(){this.account = this.srv.accounts}
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/cp2.jpg)

3. Inject logging service  into AccoutService --> Add `@injectable` in AcctService.

4. Change status at acct-component and update it AcctService accounts array.
- Add eventEmitter<>() === observable, in srv.
```
statusUpdated = new EventEmitter<String>()
```

5. change status in srv
- Acct component > click toggle-status button > ts : onSetTo(newStatus : String) method > ( `srv.update()` + `srv.statusUpdated.emit()` ) --> it returns another observable.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/cp3.jpg)

6. Get new status from srv and reflect it on Acct component back.
- subscribe it in acct Comp. 
- Could also subsctribe it to another comp. eg: just print the subscribed data in alert.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/cp4.jpg)



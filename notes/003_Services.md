# DI And Services
DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.

## A. features
- In ng, the DI framework provides `declared dependencies` ...
- `injector` [more](https://angular.io/guide/glossary#injector)
- `service provider`
***

## B. Glossary:
> **1. injector**
- a object which create a dependency(service) using a configured provider.
- As programmer we dont create injector.
- Injectors are created for NgModules automatically as part of the bootstrap process and are inherited through the component hierarchy.
- An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.
- `root injector` --> ...

>> **2. Provider**
- A provider tells an injector how to create the service.
***

### C. Inject service:
1. First create injectable Service --> eg: `ng generate service heroes/hero`
```
import { Injectable } from '@angular/core';

@Injectable({  providedIn: 'root'})
export class HeroService {  constructor() { }}
```
2. The @Injectable() decorator marks it as a service that can be injected.

3. Configure `injector` with `service provider`--> can be done at 3 placrthree places:
- In the @Injectable() decorator for the service itself.
- In the @NgModule() decorator for an NgModule.
- In the @Component() decorator for a component.

4. Injecting service:
```
constructor(heroService: HeroService)
```
***
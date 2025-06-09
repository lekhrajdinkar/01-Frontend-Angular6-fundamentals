## 1 Dynamic Component Loading in Angular
- add in NgModule declaration: [DynamicComponent]
```typescript
// dynamic.component.ts
import { Component } from '@angular/core';
@Component({
  template: `<h2>I'm dynamically loaded!</h2>`
})
export class DynamicComponent {}
```
- < ng-template **#dynamicHost** > < /ng-template > === placeholder
```typescript
// app.component.ts
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="loadComponent()">Load Component</button>
    <ng-template #dynamicHost></ng-template>
  `
})
export class AppComponent {
  @ViewChild('dynamicHost', { read: ViewContainerRef, static: true })   dynamicHost!: ViewContainerRef;

  loadComponent() {
    this.dynamicHost.clear();
    this.dynamicHost.createComponent(DynamicComponent);
  }
}
```

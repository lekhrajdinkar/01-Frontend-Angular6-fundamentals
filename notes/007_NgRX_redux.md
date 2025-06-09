- https://chat.deepseek.com/a/chat/s/37c732b1-738a-4167-9b95-046ad410f60d
---
# redux
- NgRx is a reactive state management library for Angular applications

## A. intro
-  state management pattern inspired by Flux but simplified.
- **3 core principle**
  - **Single source of truth**: The entire application state is stored in one object tree (the store)
  - **State is read-only**: The only way to change state is by emitting an action
  - **Changes are made with pure functions**: Reducers specify how state changes in response to actions

## B. Components
```txt
Store:      The single source of truth for application state
Actions:    Describe state changes
Reducers:   Pure functions that handle state transitions
Selectors:  Pure functions for querying the store
Effects:    Handle side effects (like API calls)
```

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/001.jpg)

---
## C. developer Guide
### 1. install NgRx Packages
```txt
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest
ng add @ngrx/effects@latest
ng add @ngrx/schematics@latest
```

### 2. project Context
```txt
src/
├── app/
│   ├── core/
│   ├── features/
│   │   ├── feature1/
│   │   │   ├── state/
│   │   │   │   ├── feature1.actions.ts
│   │   │   │   ├── feature1.reducer.ts
│   │   │   │   ├── feature1.selectors.ts
│   │   │   │   └── feature1.state.ts
│   │   │   ├── feature1.module.ts
│   │   │   └── components/
│   │   ├── feature2/
│   │   │   ├── state/
│   │   │   └── ...
│   ├── shared/
│   └── app.module.ts
```


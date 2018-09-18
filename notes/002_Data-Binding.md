> ## A. String interpolation
1. `{{ abc }}` - abs can be member variable component class, or String literal, expression, function(), service call, etc.
2. `{{fn(msg)}}` - Everytime `msg` get changes it will be 'fn(msg)' will be called.

> ## B. property Binding

> ### B.1. one way binding

> ### B.2. two way binding
1. need to import `FormModule` to make it working.

> ## C. Event Binding
1. create EventEmitter in service
2. Emit Event in component-1 along with eventdata
3. subscribe event in another component-2 and process data.

4. use `subject` in place of EventEmitter for better performance.


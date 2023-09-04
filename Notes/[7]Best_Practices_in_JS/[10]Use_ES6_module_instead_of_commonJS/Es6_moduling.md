# ES6 Module :-

-   We should ES6 modules instead of CommonJS modules.

```js
export function greet(name) {
    console.log(`Hello, ${name} !`);
}

// import module
import { greet } from './utils.js';

greet('John Doe'); // Hello, John Doe !
```

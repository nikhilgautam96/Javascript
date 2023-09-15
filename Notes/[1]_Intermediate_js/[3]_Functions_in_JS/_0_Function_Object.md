```js
// Function.prototype.__proto__ === Object.prototype; // true
function Fun() {}
// Fun.__proto__ === Function.prototype; // true
// Fun.__proto__.__proto__ === Object.prototype; // true

const Fun_obj = new Fun();
// Fun.prototype === Fun.__proto__ // false
// Fun_obj.__proto__ === Fun.prototype // true
```

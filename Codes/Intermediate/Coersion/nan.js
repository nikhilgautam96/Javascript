let a = "10";
let b = "abc"; 
let c = "sanket";
let d = 10 - c;
console.log(a, b, c, d);

console.log(isNaN(a));          // false
console.log(isNaN(b));          // true ---> we can see in all these cases eventhough it is no NaN but we are getting "true" while doing validation. this is because of coersion.
// isNaN() --> calls ToNumber() internally.
console.log(isNaN(c));          // true
console.log(isNaN(d));          // true

let x = "";
console.log(x);
console.log((typeof(x) == 'number' && isNaN(x)) ? "NaN value" : "Not NaN value");

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc"));
// This function doesn't do coercion
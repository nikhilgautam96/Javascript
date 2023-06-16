## Coersion :-
- Stands for `type interconversion`.
- In laguages like {`c, c++, java, etc --> type exists for variable`} while in `JS --> type exists for values.`
- 2 types :-
    1. `Implicit`
    2. `Explicit`
### Type Conversion :-
- The ECMAScript language implicitly performs automatic type conversion as needed. 
- To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. 
- The conversion abstract operations are polymorphic.`(ie. the same operation acts differently for different JS type.)`
- They can accept a value of any ECMAScript language type.`(ie. the 7-types defined in JS)`
- But no other specification types(outside the knowledge of JS, like user defined classes, etc.) are used with these operations.
- `NOTE` : 
    - The BigInt type has no implicit conversions in the ECMAScript language.
    - programmers must call BigInt explicitly to convert values from other types.

## `+` :-
```JS
const a = "10";
const b = 5;
const c = a + b;
// how the "+" operation handles arguments :
let lprim = ToPrimitive(lval);
let rprim = ToPrimitive(rval);
if((typeof lprim) === "string" || (typeof rprim) === "string") {
    let lstr = ToString(lprim);
    let rstr = ToString(rprim);
    return lstr + rstr;
} else {
    let lnum = ToNumber(lprim);
    let rnum = ToNumber(rprim);
    return lnum + rnum;
}

```

## `-` :-
```JS
const a = "10";
const b = 5;
const c = a - b;
// how the "-" operation handles arguments :
let lnum = ToNumber(a);
let rnum = ToNumber(b);
return lnum - rnum;

NOTE : 
    NaN - (anyNumber) = NaN;
    Infinity - (anyNumber) = Infinity;
console.log(NaN - 10);                  // NaN
console.log(NaN - NaN);                 // NaN
console.log(NaN + Infinity);            // NaN
console.log(Infinity - 5000000);        // Infinity
console.log(Infinity - Infinity);       // NaN
console.log(-Infinity - 5);             // -Infinity
console.log(-Infinity + Infinity);      // NaN
```

## `*` :-


## `/` :-


## `%` :-

## Abstract Operations :-
- These operations are not a part of the ECMAScript language.
- As an end user we cannot use/call these operations. like we can use console.log() but not these.
- They are defined solely to aid the specification of the semantics of the ECMAScript language.

## `ToPrimitive ( input [ , preferredType ] )`  :-
-  It takes an input `argument` and tries to convert it into a `non-onject type(or primitive type)`.
If it can't convert it, it can throw error.
- It takes one more optional parameter as `prefferedType`. If we have 2 or more possible conversions then this optional parameter comes into picture.
- It internally calls `OrdinaryToPrimitive ( O, hint )`.
```JS
if(input == object) {
    let hint;
    if(preferredType == "is not present") {
        hint = "default";
    } else if("prefferedType" == "string") {
        hint = "string";
    } else if("prefferedType" == "number") {
        hint = "number";
    }
    if(hint == "default") {
        hint = "number";
    }
    OrdinaryToPrimitive ( input, hint )
} else {
    return input;     // "input" is already a primitive.
}
```
### `OrdinaryToPrimitive ( O, hint )`   :-
```JS
assert(typeof(O) === "object");
assert(typeof(hint) === "string");

if(hint == string || hint == number) {
    let methodName;
    if(hint === "string") {
        methodNames = ["toString()", "valueOf()"];
        // 1st apply "toString()"
            // if ("toString()" gives an "object") { 
                    // then "valueOf()" is applied.
                        // if("valueOf()" gives "non-object") { throw error; }
                        // else --> return result
            // }
        // else if "toString()" gives "non-object" return "result".
    } else if(hint === "number") {
        methodNames = ["valueOf()", "toString()"];
        // 1st apply "valueOf()"
            // if ("valueOf()" gives an "object") { 
                    // then "toString()" is applied.
                        // if("toString()" gives "non-object") { throw error; }
                        // else --> return result.
            // }
        // else if "valueOf()" gives "non-object" return "result".
    }
} else {
    throw `TypeError`;
}

let x = {"english" : 90, "maths" : 80, "science" : 100};
console.log(x.toString());      // [object Object]
console.log(x.valueOf());       // { english: 90, maths: 80, science: 100 }

let y = [1, 2, "nikhil", true, null, undefined, 5.5, 10];
console.log(y.toString());      // 1,2,nikhil,true,,,5.5,10
console.log(y.valueOf());       // [ 1, 2, 'nikhil', true, null, undefined, 5.5, 10 ]
```

## `ToBoolean ( argument )` :-
- `Logical NOT Operator (!)` can be used to implement this operation.
```JS
let type = typeof(argument);
switch(type) {
    case "undefined" :
        return false;
    case "null" :
        return false;
    case "boolean" :
        return argument;
    case "number" :
        if(argument === (+0, -0, NaN)) {
            return false;
        } else {
            return true;
        }
    case "string" :
        if(argument.length() === 0) {
            return false;
        }else {
            return true;
        }
    case "symbol" :
        return true;
    case "object" :
        return true;
}
```

## `ToNumber ( argument )`  :-
- we can use "-" operation to mimic this operation.
```JS
ToNumber(argument) {
    let type = typeof argument;
    switch (type) {
        case "undefined" :
            return NaN;
        case "null" :
            return 0;
        case "boolean" :
            if(argument === true) {
                return 1;
            }else {
                return 0;
            }
        case "number" :
            // NaN is also a number, so it will also be returned as it is.
            return argument;
        case "string" :
            return StringToNumber(argument);
        case "object" :
            let primValue = ToPrimitive(argument, hint = Number);
            return ToNumber(primValue);
        case "symbol" :
            throw "TypeError";
            break;
    }
}
```

## `ToString ( argument )`  :-
```JS
let type = typeof(argument)
switch(type) {
    undefined --> return "undefined";
    null --> return "null";
    boolean
        if(argument === true)
            return "true";
        else
            return "false";
    number --> return NumberToString(argument);
    string --> return argument;
    symbol --> throw "TypeError";
    object
        let primValue = ToPrimitive(argument, hint = string);
        return ToString(primValue);
}
console.log("nikhil" + []);                 // nikhil
console.log("nikhil" + [null, undefined]);  // nikhil,
console.log("nikhil" + [null]);             // nikhil
console.log("nikhil" + [,]);                // nikhil
console.log("nikhil" + [,,,,]);             // nikhil,,,
console.log("nikhil" + [[],[],[]]);         // nikhil,,
```

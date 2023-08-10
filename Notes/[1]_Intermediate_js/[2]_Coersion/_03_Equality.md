## `===` Strict equality operator :-

```JS
Comparison (x === y) :-

if(typeof(x) === typeof(y)) {
    if(typeof(x) === "number") {
        if(x === NaN || y === NaN) {
            return false;
            // NOTE : "NaN" is the only number in JS that is not equal to itself.
        } else if((x === 0 && y === -0) || (x === -0 && y === 0)) {
            return true;
        } else if(x == y) {
            // 'x' has same value as 'y'.
            return true;
        } else {
            return false;
        }
    } else {
        return SameValueNonNumber(x, y);
    }
} else {
    return false;
}
```

### SameValueNonNumber(x, y) :-

```JS
Assert -: typeof(x) === typeof(y)
if(typeof(x) is undefined) {
    return true;
} else if(typeof(x) is null) {
    return true;
} else if(typeof(x) is string) {
    if( 'x' & 'y' are same sequence of code units) {
        return true;
    } else {
        return false;
    }
} else if(typeof(x) is boolean) {
    if((x & y) both are "true" or both are "false") {
        return true;
    } else {
        return false;
    }
} else if(typeof(x) is symbol) {
    if((x & y) are the same symbol value) {
        return true;
    } else {
        return false;
    }
} else if((x & y) are the same object value) {
    return true;
} else {
    return false;
}
```

## `==` Abstract equality operator :-

```JS
if (typeof(x) === typeof(y)) {
    return `result of performing StrictEqualityComparison x === y`;
} else if((x === "null" && y === "undefined") || (x === "undefined" && y === "null")) {
    return true;
} else if(typeof(x) === "number" && typeof(y) === "string") {
    return "result of (x == ToNumber(y))";
} else if(typeof(x) === "string" && typeof(y) === "number") {
    return "result of (ToNumber(x) == y)";
} else if(typeof(x) === "boolean") {
    return "result of (ToNumber(x) == y)";
} else if(typeof(y) === "boolean") {
    return "result of (x == ToNumber(y)";
} else if((typeof(x) == "string" || typeof(x) == "number" || typeof(x) == "symbol") && typeof(y) == "object") {
    return "result of x == ToPrimitive(y)";
} else if(typeof(x) == "object" && (typeof(y) == "string" || typeof(y) == "number" || typeof(y) == "symbol")) {
    return "result of ToPrimitive(x) == y";
} else {
    return false;
}
```

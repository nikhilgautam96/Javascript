# JSON :-

-   `Javascript Object Notation`.
-   Lightweight data interchange format used in many web applications for data transmission.
-   Data is always represented as `Key: Value` pairs.
-   The `Keys are Strings` and `Values can be valid JSON data type`.
-   Valid JSON data type : `Strings, Nubers, Boolean, Arrays & Objects.`

-   eg :-

```js
{
    "key1": 'Value1',
    "key1": 'Value1',
    "key1": 'Value1',
}
```

# Creating and Parsing JSON :-

## 1. `JSON.stringify()` :

-   The JSON.stringify() static method converts a JavaScript value to a JSON string.
-   SYNTAX :

```js
JSON.stringify(value);
JSON.stringify(value, replacer);
JSON.stringify(value, replacer, space);
```

-   eg 1:-

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
    JSON.stringify([new Number(3), new String('false'), new Boolean(false)])
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'
```

-   eg 2:-

```js
const person = {
    name: 'John Doe',
    age: 30,
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John Doe","age":30}
```

-   `Exceptions`

    -   TypeError : Thrown in one of the following cases:
        1. value contains a circular reference.
        2. A BigInt value is encountered.

-   eg 3:-

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify('foo'); // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
const a = ['foo', 'bar'];
a['baz'] = 'quux'; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([
    new Set([1]),
    new Map([[1, 2]]),
    new WeakSet([{ a: 1 }]),
    new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
    new Uint8Array([1]),
    new Uint8ClampedArray([1]),
    new Uint16Array([1]),
    new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
    x: 5,
    y: 6,
    toJSON() {
        return this.x + this.y;
    },
});
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, (k, v) => {
    if (typeof k === 'symbol') {
        return 'a symbol';
    }
});
// undefined

// Non-enumerable properties:
JSON.stringify(
    Object.create(null, {
        x: { value: 'x', enumerable: false },
        y: { value: 'y', enumerable: true },
    })
);
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

-   `Using a function as replacer`

```js
function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

const foo = {
    foundation: 'Mozilla',
    model: 'box',
    week: 45,
    transport: 'car',
    month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

## 2. `JSON.parse()` :

-   The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string.
-   SYNTAX:

```js
JSON.parse(text);
JSON.parse(text, reviver);
```

-   eg 1:-

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj); // Object { result: true, count: 42 }
console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```

-   eg 2:-

```js
const personBack = JSON.parse(jsonString);
console.log(personBack); // { name: 'John Doe', age: 30 }
console.log(personBack.name); // John Doe
```

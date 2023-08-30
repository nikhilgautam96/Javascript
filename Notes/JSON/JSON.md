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

-   `JSON.stringify()` : we can generate JSON data from a JS object using JSON.stringify().

```js
const person = {
    name: 'John Doe',
    age: 30,
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John Doe","age":30}
```

-   `JSON.parse()` : we can parse JSON data from a jsvascript object using the JSON.parse().

```js
const personBack = JSON.parse(jsonString);
console.log(personBack); // { name: 'John Doe', age: 30 }
console.log(personBack.name); // John Doe
```

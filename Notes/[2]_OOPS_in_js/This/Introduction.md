```js
function fun() {
    let x = 10;
    function gun() {
        x++;
        console.log(x);
    }
    return gun;
}
a = fun();
b = fun();
a();        // 11
a();        // 12
b();        // 11
```
async function fun() {
    console.log("Hey");
    return 1234;
}
// The above piece of code is equivalent to.
function gun() {
    return new Promise(function (res, rej) {
        console.log("Hey");
        res(1234);
    });
}

x = fun();
y = gun();
console.log(x, y);
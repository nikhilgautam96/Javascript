// Here we are actually testing how to append/register more than 1 function/task 
// to the onFulfillment array.
function fun() {
    return new Promise(function f(res, rej) {
        setTimeout(function process() {
            console.log("resolved");
            res(1234);
        }, 5000);
    })
}

let x = fun();
x.then(function exec_1(value) {
    console.log("value is :", value);
    return 100;
})
.then(function exec(value) {
    console.log(value);
})
.then(function exec(value) {
    console.log("Hi 1");
});

x.then(function exec_2(value) {
    console.log("yo the value is :", value);
    return 200;
})
.then(function exec(value) {
    console.log(value);
})
.then(function exec(value) {
    console.log("Hi 2");
});

x.then(function exec_3(value) {
    console.log("Hi value is :", value);
    return 300;
})
.then(function exec(value) {
    console.log(value);
})
.then(function exec(value) {
    console.log("Hi 3");
});
// OUTPUT :
// resolved
// value is : 1234
// yo the value is : 1234
// Hi value is : 1234
// 100
// 200
// 300
// Hi 1
// Hi 2
// Hi 3
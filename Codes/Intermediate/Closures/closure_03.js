function a(name) {
    name = "Gautam";
    return function b() {
        console.log(name);
    }
}

let x = a("Nikhil");
console.log(x);
x();
// OUTPUT :
// [Function: b]
// Gautam
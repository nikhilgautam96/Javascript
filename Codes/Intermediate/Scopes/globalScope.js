var name = "Nikhil";                    // global variable.
let age = 10;
function greet() {
    console.log("greetings ! ", name, " , ", age);

    function test() {
        console.log("test");
    }
}
function fun() {
    console.log("have funs ! ", name, " , ", age);
}
greet();
fun();

// test(); // this will throw error :- "ReferenceError: test is not defined"

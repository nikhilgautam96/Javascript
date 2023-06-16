// undefined :-
function fun() {
    console.log(name, typeof name);    // here 'name' will have a value 'undefined'. | type = "undefined"
    var name = "Nikhil";
    console.log(name, typeof name);    // here 'name' will have value as 'Nikhil'.   | type = "string"
}
fun();


// undeclared :-
function gun() {
    console.log(name);          // undeclared
    name = "nikhil";            // chance of becoming 'autoglobal'
    console.log(name);
}
console.log("start");
gun();
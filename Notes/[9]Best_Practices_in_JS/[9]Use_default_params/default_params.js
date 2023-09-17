/*
    Makes it easier to write functions that can handle a variety of inputs.
*/
function greet(name = 'World') {
    console.log(`hello, ${name}`);
}
greet(); // hello, World
greet('Nikhil'); // hello, Nikhil

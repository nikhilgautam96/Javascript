function fun() {
    let name = "Harshit";

    function callback(params) {
        console.log(college);
        console.log(name);
    }

    return callback;
}
let x = fun();
x();
var college = "IIT Delhi";
var name = "Nikhil";
x();
// OUTPUT :
// undefined
// Harshit
// IIT Delhi
// Harshit
// function fun() {
//     // let name = "Harshit";
//     setTimeout(function callback(params) {
//         console.log(college);
//         console.log(name);
//     }, 5000);
//     // let name = "Harshit";
//     name = "Harshit";
// }
// console.log(fun());
// var college = "IIT Delhi";
// var name = "Nikhil";

// OUTPUT :
// undefined
// IIT Delhi
// Nikhil

function fun() {
    // let name = "Harshit";
    setTimeout(function callback(params) {
        console.log(college);
        console.log(name);
    }, 5000);
    let name = "Harshit";
    // name = "Harshit";
}
console.log(fun());
var college = "IIT Delhi";
var name = "Nikhil";

// OUTPUT :
// undefined
// IIT Delhi
// Harshit
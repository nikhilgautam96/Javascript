if(true) {
    // console.log(x);     // ReferenceError: x is not defined
    let x = 10;
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

{
    // Raw Block
    let y = 20;
    console.log(y);
}
// console.log(y);         // ReferenceError: y is not defined
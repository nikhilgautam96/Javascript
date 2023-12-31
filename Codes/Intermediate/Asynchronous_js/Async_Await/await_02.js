async function fun() {
    console.log('start fun');
    let x = await 10;
    console.log('x is :', x); // await always resolves the promise to its value.
    console.log('end fun');
    return x;
}
console.log('start');
let val = fun();
console.log('val is : ', val);
val.then(function gun(value) {
    console.log('value is', value);
    console.log(val);
});
console.log('End');
// OUTPUT :
// start
// start fun
// val is :  Promise { <pending> }
// End
// x is : 10
// end fun
// value is 10
// Promise { 10 }

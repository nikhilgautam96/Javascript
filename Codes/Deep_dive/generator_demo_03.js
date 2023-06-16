function* fetchNextElement() {
    console.log("Inside generator.");
    const x = 10;
    yield 11;
    console.log("Lets take a break.");
    const y = x + (yield 50);
    console.log("value of y is :", y);
    console.log(yield 500);
}

itr = fetchNextElement();
console.log("1st : ", itr.next());
console.log("2nd : ", itr.next());
// when we pass a value in itr.next() function it is replacing the yield with the value 
// paased and if we want we can use this passed value like we are using it in the expression 
// for 'y'.
console.log("3rd : ", itr.next(5));
console.log("4th : ", itr.next(101));

// LOGS :
// Inside generator.
// 1st :  { value: 11, done: false }
// Lets take a break.
// 2nd :  { value: 50, done: false }
// value of y is : 15
// 3rd :  { value: 500, done: false }
// 101                                      --> this is the value we passed through next(101).
// 4th :  { value: undefined, done: true }
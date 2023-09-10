function* fetchNextElement() {
    console.log('Inside generator.');
    const x = 10;
    yield 11;
    console.log('Lets take a break.');
    const y = x + (yield 50);
    console.log('value of y is :', y);
    const z = x + (yield 100);
    console.log('value of z is :', z);
    console.log('4th yield :', yield 500);
    console.log('5th yield :', yield 700);
}

itr = fetchNextElement();
console.log(itr);
console.log('1st call ----> ', itr.next());
console.log('2nd call ----> ', itr.next());
// when we pass a value in itr.next() function it is replacing the yield with the value
// paased and if we want we can use this passed value like we are using it in the expression
// for 'y'.
console.log('3rd call ----> ', itr.next());
console.log('4th call ----> ', itr.next(7));
console.log('5th call ----> ', itr.next());
console.log('6th call ----> ', itr.next(1001));

/*
    LOGS :
    Object [Generator] {}
    Inside generator.
    1st call ---->  { value: 11, done: false }
    Lets take a break.
    2nd call ---->  { value: 50, done: false }
    value of y is : NaN                             --> default value passed through next(). is 'unefined'
    3rd call ---->  { value: 100, done: false }
    value of z is : 17                              --> this is the value we passed through next(7).
    4th call ---->  { value: 500, done: false }
    4th yield : undefined
    5th call ---->  { value: 700, done: false }
    5th yield : 1001
    6th call ---->  { value: undefined, done: true }

*/

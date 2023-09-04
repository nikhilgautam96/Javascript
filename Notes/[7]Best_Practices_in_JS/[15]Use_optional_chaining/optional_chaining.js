/*
    --> It `short-circuits` and returns `undefined` the moment a `nullish (null or undefined)` value
        is encountered.
    --> SYNTAX :
            obj.val?.prop
            obj.val?.[expr]
            obj.func?.(args)
*/

/*
    Optional chaining with function calls
        --> Using optional chaining with function calls causes the expression to automatically 
            return undefined instead of throwing an exception if the method isn't found.
*/
const result = someInterface.customMethod?.();
// Here, if the property does exists but is not a method then it will throw an error.
// TypeError exception "someInterface.customMethod is not a function".

/*
    Optional chaining not valid on the left-hand side of an assignment
*/
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment


/*
    . Short-circuiting
    . When using optional chaining with expressions, if the left operand is null or undefined, 
        the expression will not be evaluated.
*/

const potentiallyNullObj1 = null;
let x = 0;
const prop1 = potentiallyNullObj1?.[x++];
console.log(x); // 0 as x was not incremented
// Subsequent property accesses will not be evaluated either.

const potentiallyNullObj2 = null;
const prop2 = potentiallyNullObj2?.a.b;
// This does not throw, because evaluation has already stopped at the first optional chain

const potentiallyNullObj3 = null;
const prop3 =
    potentiallyNullObj3 === null || potentiallyNullObj3 === undefined
        ? undefined
        : potentiallyNullObj3.a.b;

/*
    Dealing with optional callbacks or event handlers
*/
// Code written without optional chaining
function doSomething(onContent, onError) {
    try {
        // Do something with the data
    } catch (err) {
        // Testing if onError really exists
        if (onError) {
            onError(err.message);
        }
    }
}
// Using optional chaining with function calls
function doSomething(onContent, onError) {
    try {
        // Do something with the data
    } catch (err) {
        onError?.(err.message); // No exception if onError is undefined
    }
}

/*
    Stacking the optional chaining operator
*/
const customer = {
    name: 'Carl',
    details: {
        age: 82,
        location: 'Paradise Falls', // Detailed address is unknown
    },
};
const customerCity = customer.details?.address?.city;
// This also works with optional chaining function call
const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined

/*
    Combining with the `nullish coalescing` operator
*/
function printCustomerCity(customer) {
    const customerCity = customer?.city ?? 'Unknown city';
    console.log(customerCity);
}
printCustomerCity({
    name: 'Nathan',
    city: 'Paris',
}); // "Paris"
printCustomerCity({
    name: 'Carl',
    details: { age: 82 },
}); // "Unknown city"

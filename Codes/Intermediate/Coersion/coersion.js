console.log(NaN - 10);                  // NaN
console.log(NaN - NaN);                 // NaN
console.log(NaN + Infinity);            // NaN
console.log(Infinity - 5000000);        // Infinity
console.log(Infinity - Infinity);       // NaN
console.log(-Infinity - 5);             // -Infinity
console.log(-Infinity + Infinity);      // NaN

console.log("nikhil" + []);                 // nikhil
console.log("nikhil" + [null, undefined]);  // nikhil,
console.log("nikhil" + [null]);             // nikhil
console.log("nikhil" + [,]);                // nikhil
console.log("nikhil" + [,,,,]);             // nikhil,,,
console.log("nikhil" + [[],[],[]]);         // nikhil,,


let x = {"english" : 90, "maths" : 80, "science" : 100};
console.log(x.toString());      // [object Object]
console.log(x.valueOf());       // { english: 90, maths: 80, science: 100 }

let y = [1, 2, "nikhil", true, null, undefined, 5.5, 10];
console.log(y.toString());      // 1,2,nikhil,true,,,5.5,10
console.log(y.valueOf());       // [ 1, 2, 'nikhil', true, null, undefined, 5.5, 10 ]


console.log("Nikhil" + {"a" : 10});     // Nikhil[object Object]
/**
 * "Nikhil" -> is already a primitive
 * {"a": 10} -> is not a primitive, so, we call toPrimitive without a hint, 
 * means hint -> number
 * we first call valueOf on {"a" : 10} -> and it returns same object
 * we call toString -> toStrign will return '[object Object]' which is a string i.e. primitive
 * 
 * "Nikhil" + "[object Object]" -> "Nikhil[object Object]"
 */

console.log(10 - {"a" : 45});           // NaN
/**
 * 10 is already a number
 * {"a": 45} is going to get converted ToNumber, and this is an object,
 * for object we call ToPrimitive with hint Number
 * first we call valueOf -> it returns the same object -> {"a": 45}
 * then we call toString -> it return '[object Object]' which is primitive
 * So call ToNumber on '[object Object]' again which gives NaN
 * 10 - NaN = NaN
 * 
 */
let z = {"a" : 90, valueOf() { return 2; }};
console.log(z - 10);                    // -8
/**
 * z is an object, we need to pass it to ToPrimitive with hint Number
 * we call valueOf -> it return 2; which is a primtitive
 * z becomes 2, 10 is already a number
 * 2 - 10 = -8
 */
console.log(z + "sanket"); // 2 + "Sanket"


let ob = {"b" : 100, valueOf() { return "Gautam"; }, toString() { return 10; }};
console.log(ob + "-Nikhil");            // Gautam-Nikhil

// console.log("sanket" + {"a": 90, valueOf() {return {}}, toString() {return {}}});
    // TypeError: Cannot convert object to primitive value

console.log(!0);                    // true
/**
 * 0 -> false
 * ToBoolean(0) -> false
 * !0 -> true
 */
console.log(!(-4));                 // false
/**
 * -4 -> truthy
 * ToBoolean(-4) = true
 * !(-4) -> !true -> false
 */
console.log(!{});                   // false
/**
 * {} -> truthy
 * ToBoolean({}) -> true
 * !true -> false
 */
console.log(!console.log(0));       // true

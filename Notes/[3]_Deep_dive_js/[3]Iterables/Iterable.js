// String is built-in iterable object.
let newString = '';
for (const x of 'Nikhil Gautam') {
    newString += '_' + x;
}
console.log(newString); // _N_i_k_h_i_l_ _G_a_u_t_a_m

// Array is built-in iterable object.
let newArray = [];
for (const y of [1, 2, 3, 4]) {
    newArray.unshift(y);
}
console.log(newArray); // [ 4, 3, 2, 1 ]

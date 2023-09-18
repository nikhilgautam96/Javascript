let obj1 = {
    obj2: {
        obj3: 7,
    },
};

let obj4 = obj1;

obj1 = 420;

let obj5 = obj4.obj2;

obj4 = 'Nikhil Gautam'; // the object is still being pointed by obj5 so it won't get garbage collected.

obj5 = null;
/*
 now the below object gets garbage collected.
 {
    obj2: {
        obj3: 7,
    },
 };
*/

function f() {
    const k = {};
    console.log(k);
}
f();
// k = {} is GC once function is popped out of call stack.

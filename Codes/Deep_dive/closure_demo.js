function process() {
    let i = 0;
    function innerProcess() {
        i += 1;
        return i;
    }
    return innerProcess;
}
let res = process();
console.log(res);
console.log('first time calling res ', res());
console.log('second time calling res ', res());
console.log('third time calling res ', res());
/*

[Function: innerProcess]
first time calling res  1
second time calling res  2
third time calling res  3

*/

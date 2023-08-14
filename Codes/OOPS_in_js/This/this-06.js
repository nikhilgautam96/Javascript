console.log(this); // {}
function fun() {
    console.log(this); // Object [global]
}
fun();
console.log(this); // {}

(function () {
    console.log(this); // Object [global]
})();

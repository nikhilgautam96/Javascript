debugger;
consumer = 'nikhil';
function p() {
    console.log(consumer);
    // undefined
    if (consumer == 'nikhil') {
        var consumer = 'gautam';
        console.log(consumer);
    }
    console.log(consumer);
    // undefined
}
p();

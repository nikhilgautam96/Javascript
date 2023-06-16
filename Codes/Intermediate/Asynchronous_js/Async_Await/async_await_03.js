function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data =  "Dummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}
async function processing() {
    console.log("Entering Processing.");
    let value1 = await fetchData("www.google.com");
    console.log("youtube downloading done");
    let value2 = await fetchData("www.google.com");
    console.log("google downloading done");
    console.log("Exiting processing");
    return value1 + value2;
}
console.log("Start");
setTimeout(function timer1() {console.log("timer 1")}, 0);
console.log("after setting timer 1");
let x = processing();
console.log("out");
x.then(function (value) {
    console.log("finally processing promise resolves with ", value);
});
setTimeout(function timer2() {console.log("timer 2")}, 1000);
setTimeout(function timer3() {console.log("timer 3")}, 0);
console.log("End");
// OUTPUT :
// Start
// after setting timer 1
// Entering Processing.
// Started downloading from www.google.com
// out
// End
// timer 1
// timer 3
// timer 2
// Download completed
// youtube downloading done
// Started downloading from www.google.com
// Download completed
// google downloading done
// Exiting processing
// finally processing promise resolves with  Dummy dataDummy data
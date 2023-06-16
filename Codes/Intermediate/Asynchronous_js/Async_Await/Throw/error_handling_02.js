function fetchData(url) {
    return new Promise(function exec(res, rej){
        console.log("Started downloading data from url.", url);
        setTimeout(function processing() {
            let data = undefined;
            console.log("Download completed.");
            if(typeof data === 'undefined') {
                rej(data);
            } else {
                res(data);
            }
        }, 1000)
    });
}

let x = fetchData("skfdskfdsk");
x.then(function success_1(value) {
    console.log("succesfully downloaded data :", value);
    return 10;
})
.then(function success_2(value) {
    console.log("value is :", value);
})
.catch(function err(e) {
    console.log("Error is : ", e);
});

// LOGS : data = undefined
// Started downloading data from url. skfdskfdsk
// Download completed.
// Error is :  undefined

// LOGS : data = "dummy data"
// Started downloading data from url. skfdskfdsk
// Download completed.
// succesfully downloaded data : dummy data
// value is : 10

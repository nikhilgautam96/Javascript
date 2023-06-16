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
x.then(function success(value) {
    console.log("succesfully downloaded data :", value);
}, function error(err) {
    console.log("failed download :", err);
});

// LOGS :
// Started downloading data from url. skfdskfdsk
// Download completed.
// failed download : undefined
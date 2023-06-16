function demo(val) {
    return new Promise(function (resolve, reject) {
        console.log("Promise started");
        setTimeout(function process() {
            console.log("completed timer");
            if(val%2 == 0) {
                // even number
                resolve("Even");
            } else {
                // odd number
                reject("ODD");
            }
        }, 10000);
        console.log("Somewhere");
    });
}

// demo(4);
    // > Promise {<fulfilled>: 'Even'}
    //   [[Prototype]] : Promise
    //   [[PromiseState]] : "fulfilled"
    //   [[PromiseResult]] : "Even"
// demo(5);
    // > Promise {<rejected>: 'ODD'}
    //   [[Prototype]] : Promise
    //   [[PromiseState]] : "rejected"
    //   [[PromiseResult]] : "ODD"
// demo();
    // > Promise {<rejected>: 'ODD'}
    //   [[Prototype]] : Promise
    //   [[PromiseState]] : "rejected"
    //   [[PromiseResult]] : "ODD" 
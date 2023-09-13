function MyPromise(executor) {
    let onResolve,
        onReject,
        value,
        error,
        isFullfilled = false,
        isCalled = false;
    function resolve(val) {
        isFullfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled) {
            onResolve(value);
            isCalled = true;
        }
    }
    function reject(err) {
        isFullfilled = true;
        error = err;
        if (typeof onReject === 'function' && !isCalled) {
            onReject(error); // we pass the value to the Handler.
            isCalled = true;
        }
    }
    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if (isFullfilled && !isCalled && value !== 'undefined') {
            onResolve(value);
            isCalled = true;
        }
        return this;
    };
    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if (isFullfilled && !isCalled && error !== 'undefined') {
            onReject(error); // we pass the value to the Handler.
            isCalled = true;
        }
        return this;
    };
    executor(resolve, reject);
}

let promise1 = new MyPromise(function callback(resolve, reject) {
    setTimeout(() => {
        console.log('ai');
        resolve(1);
    }, 4000);
});
promise1
    .then((val) => console.log('Resolved Value for Promise 1 is :', val))
    .catch((val) => console.log('reject Value for Promise 1 is :', val));

// let promise2 = new MyPromise(function callback(resolve, reject) {
//     setTimeout(() => {
//         resolve(2);
//     }, 2000);
//     setTimeout(() => {
//         reject(2);
//     }, 2000);
// })
//     .then((val) => console.log('Resolved Value for Promise 2 is :', val))
//     .catch((val) => console.log('reject Value for Promise 2 is :', val));

// let promise3 = new MyPromise(function callback(resolve, reject) {
//     resolve(3);
// })
//     .then((val) => console.log('Resolved Value for Promise 3 is :', val))
//     .catch((val) => console.log('reject Value for Promise 3 is :', val));

// let promise4 = new MyPromise(function callback(resolve, reject) {
//     reject(4);
// })
//     .then((val) => console.log('reject Value for Promise 3 is :', val))
//     .catch((val) => console.log('reject Value for Promise 4 is :', val));

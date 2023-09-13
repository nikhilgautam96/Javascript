import MyPromise from './MyPromise.js';

new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    resolve(10);
    // }, 2000);
})
    .then((data) => {
        console.log('then chain 1 :', data);
        return data * 2;
    })
    .then((data) => {
        console.log('then chain 2 :', data);
        // return data * 2;
        // reject(101);
    })
    .then((data) => {
        console.log('then chain 3 :', data);
        return data * 2;
    })
    .then((data) => {
        console.log('then chain 4 :', data);
        return data * 2;
    });

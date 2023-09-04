'use strict';
try {
    const res = 1 / 0;
    console.log(res);
} catch (err) {
    console.log('An error occured:', err);
}

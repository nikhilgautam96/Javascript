# Throttling :-

-   Limiting the number of requests we serve / events we handle in a particular interval of time.
-

```js
function throttle(serviceCallback, waitTime) {
    var waiting = false;
    return function () {
        if (!waiting) {
            serviceCallback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false; // after a certain time, the serviceCallback will again become available to take requests.
            }, waitTime);
        }
    };
}
```

# Debouncing :-

-   When we don't process or handle an event the moment it occurs nut, rather wait for a COOL_OFF period and see if another event occurs or if not then after the COOL_OFF period ends, that is when we finally process the event. This is called as debouncing.
-

```js
var debouncedFunction = function (func, delay) {
    clearTimeout(lastTimerId);

    timerId = setTimeout(func, delay);
    lastTimerId = timerId;
};
```

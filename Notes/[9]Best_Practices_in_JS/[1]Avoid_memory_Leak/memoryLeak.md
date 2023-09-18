# Memory Leak :-

-   Memory leaks in JavaScript occur when objects are no longer needed, but they are still being referenced in memory, preventing the JavaScript engine's garbage collector from reclaiming the memory associated with those objects.

## Causes :

1. `Circular References`:

    - Circular references occur when objects reference each other in a loop.
    - FIX : `ensure that you remove references or use WeakMaps.`

    ```js
    const obj1 = {};
    const obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;
    ```

2. `Unused Variables and Event Listeners`:

    - Variables, objects, and event listeners that are no longer needed but are not properly cleaned up can lead to memory leaks.
    - FIX : `Make sure to remove event listeners when they are no longer needed.`

    ```js
    const element = document.getElementById('myElement');

    // Define the event handler function
    function clickHandler() {
        // Your click event code here
    }

    // Add the event listener
    element.addEventListener('click', clickHandler);

    // Remove the event listener before removing the element
    element.removeEventListener('click', clickHandler);
    element.remove();
    ```

3. `Global Variables`:

    - Avoid creating global variables. create variables inside of a function.
    - Deallocate the objects to null when no longer needed.

    ```js
    //memory leak
    person = {
        first: 'Brack',
        last: 'Obama',
    };
    person = 'Some random string';
    // the object referenced by person above will never be garbage collected.
    // So is the case with global variables.
    ```

4. `Unclosed WebSockets and Network Requests`
5. `Caches and Storing References`:
    ```js
    const cache = new Map();
    const someObj = {
        /* ... */
    };
    cache.set('key', someObj);
    // Later, if 'someObj' is no longer needed:
    // cache.delete('key');
    ```
6. `Uncollected Promises`:

    - Promises that never resolve or reject can cause memory leaks. Always handle the result or error of a promise, and consider timeouts for unhandled promises.

    ```js
    const promise = new Promise((resolve, reject) => {
        // Never resolve or reject
    });
    ```

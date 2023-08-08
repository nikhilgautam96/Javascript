# Everything in JS happens inside the `execution context` :

-   We can assume the execution context as a big box or a container in which whole JS code is executed.

<table border="1">
    <caption>
        Execution Context :
    </caption>
    <thead>
        <tr>
            <th>Memory component / Variable Environment</th>
            <th>Code component / Thread of Execution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Variables and functions are stored here in `key : value` pairs.
            </td>
            <td rowspan="3">
                This is like a thread where the whole code is executed 1-line at a time.
            </td>
        </tr>
        <tr>
            <td>a : 10</td>
        </tr>
        <tr>
            <td>fn : {...}</td>
        </tr>
    </tbody>
</table>

# Is JS Synchronous or Asynchronous :

-   Js is `synchronous` and `single-threaded` language.
-   This means JS code is executed one line at a time and in a sequential manner. ie. line 2 cannot be executed before the execution of line 1 has completed.

# Is JS Single Threaded or multithreaded :

-   JS is single-threaded.
-   This means JS code is executed one line at a time.

# What happens when we run a JS program :

-   The first thing that happens is a `execution-context` is created.

# How JS works :

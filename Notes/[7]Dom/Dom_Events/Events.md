# Event propagation :

-   There are 2 ways of event propagation in the HTML DOM;
    1. bubbling
    2. capturing.
-   ![Event_Bubbling_vs_Capturing](../../Images/Event-bubbling-capturing.png)
-   First Capturing Happens, then Bubbling happens when nest both of them togther.
-   By default `useCapture = false`. ie: bubbling is enabled by default.

## 1. Event Bubbling :

-   It is the process by which an event travels from the deepest child element that triggered the event, up to the document root.

## 2. Event Capturing :

-   It is the process of capturing an event as it travels down the DOM tree, from the outermost element to the target element.

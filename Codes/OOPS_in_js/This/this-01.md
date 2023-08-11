# This in JS :

## Inside a `function (annonymous|named|IIFE)` `this` will point to the immediate parent of that function :

-   if immediate parent is an object --> point to object.
-   if immediate parent is an function(arrow|annonymous|named|IIFE) --> point to the Global Object.
-   if no parent --> Global object

## `this` inside of `arrow functions` :

-   looks for its parent function and the moment it finds a parent function, it point to the this of that parent function.
-   ie:- {
    -   1. If parent point to 'Global' it will point to 'Global. |
    -   2. If parent points to an 'object' it will point to same 'object'.|
           }
-   if no parent found, point to --> '{}' (bcz this is what this in global points to.)

## Inside an `Object` :

-   It always points to `{}`.
-   If current Object has a parent :
    -   Parent is an function (arrow|annonymous|named|IIFE) --> point to `this` of the function.
    -   Parent is an object --> point to `this` of that object.

## `this` in Global code :

-   points to --> {}.

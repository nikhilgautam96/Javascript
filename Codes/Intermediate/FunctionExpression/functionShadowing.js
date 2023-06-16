// In JavaScript, when you declare a function with the same name as its parent function, 
// it creates a new local function that shadows the outer function within its own scope. 
// This behavior is known as function name shadowing.

// Here's an example to illustrate this concept:

function outer() {
  console.log("Outer function");
  
  function inner() {
    console.log("Inner function");
  }
  
  inner();
}
outer();

// In the above code, we have an outer function that contains an inner function. 
// When we invoke the outer function, it will log "Outer function" to the console. 
// Inside the outer function, we have another function named inner. When we call inner() within 
// the outer function, it will log "Inner function" to the console.

// However, if we modify the code to give the inner function the same name as its parent function, 
// like this:

function outer() {
  console.log("Outer function");
  
  function outer() {
    console.log("Inner function shadowing outer() parent func.");
  }
  
  outer();
}
outer();
// Now, when we run the code, it will log "Inner function" instead of "Outer function". 
// This is because the inner function with the same name as its parent function shadows the outer function within its own scope. The inner function is treated as a separate and independent function that has no relation to the outer function, despite having the same name.

// It's important to note that function name shadowing can make your code less clear and can lead 
// to confusion. It is generally recommended to use different names for functions to avoid potential 
// issues and improve code readability.






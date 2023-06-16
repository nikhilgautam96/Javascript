const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error("Uncaught Exception!");
    }, 1000);
});

p2.catch((e) => {
    console.error(e); // This is never called
});

// LOGS :
// Error: Uncaught Exception!
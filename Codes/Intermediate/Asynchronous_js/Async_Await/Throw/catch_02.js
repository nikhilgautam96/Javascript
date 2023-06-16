const p3 = new Promise((resolve, reject) => {
    resolve();
    throw new Error("Silenced Exception!");
});

p3.catch((e) => {
    console.error(e); // This is never called
});
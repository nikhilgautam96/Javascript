// break : breaks out of nearest loop.
for(let i = 1; i<20; i++) {
    if(i%7 === 0) {
        console.log("breaking now");
        break;
    }
    console.log(i);
}
for(let i = 0; i<5; i++) {
    let str = "";
    for(let j = 0; true; j++) {
        str += "*";
        if(i == j) {
            break;
        }
    }
    console.log(str);
}


// continue : we move to the nearest loop for execution.
for(let i = 1; i<10; i++) {
    if(i%2 === 0) {
        console.log("continuing now");
        continue;
    }
    console.log(i);
}
async function fun() {
    const y = await 20;
    console.log(y);     // 20

    const obj = {};
    console.log(await obj === obj);     // true
}

fun();
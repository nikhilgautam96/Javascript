let exp = "%";
let a = 10;
let b = 20;
switch(exp) {
    case "+" :
        console.log(a + b);
        break;
    case "-" :
        console.log(a - b);
        break;
    case "*" :
        console.log(a * b);
        break;
    case "%" :
        console.log(a % b);
        break;
    case "/" :
        console.log(a / b);
        break;
    default :
        console.log("default");
        break;
}
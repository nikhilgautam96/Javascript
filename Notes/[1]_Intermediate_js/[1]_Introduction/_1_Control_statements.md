# Control Statements :

## 1. Conditional Statements :

1. `if-else`
2. `switch case`

-   ```JS
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
    ```

3. `ternary operators`

## 2. Iteration Statements :

1. `while`

-   ```JS
      let i = 0;
      while(i < 10) {
          console.log(i);
          i += 1;
      }
    ```

2. `do-while`
3. `for`

-   ```JS
      for(let i = 0; i < 10; i++) {
          console.log(i);
      }
    ```

4. `for of`

## 3. Jump Statements :

1. `break`

-   ```JS
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
    ```

2. `continue`

-   ````JS
          // continue : we move to the nearest loop for execution.
          for(let i = 1; i<10; i++) {
              if(i%2 === 0) {
                  console.log("continuing now");
                  continue;
              }
              console.log(i);
          }
        ```
    ````

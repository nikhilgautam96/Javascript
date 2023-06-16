// Using Promise.all() with async functions
function promptForDishChoice() {
    return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
        <form method="dialog">
            <p>What would you like to eat?</p>
            <select>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
                <option value="salad">Salad</option>
            </select>
            <menu>
                <li><button value="cancel">Cancel</button></li>
                <li><button type="submit" value="ok">OK</button></li>
            </menu>
        </form>`;
    dialog.addEventListener("close", () => {
        if (dialog.returnValue === "ok") {
            resolve(dialog.querySelector("select").value);
        } else {
            reject(new Error("User cancelled dialog"));
        }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
    });
}
  
async function fetchPrices() {
    const response = await fetch("/prices");
    return await response.json();
}

// Approach 1 --> [Wrong_approach]
async function getPrice() {
    const choice = await promptForDishChoice();
    const prices = await fetchPrices();
    return prices[choice];
}

// NOTE : that the execution of promptForDishChoice and fetchPrices don't depend on the result 
//        of each other. While the user is choosing their dish, it's fine for the prices 
//        to be fetched in the background, but in the code above, the await operator causes 
//        the async function to pause until the choice is made, and then again until the p
//        rices are fetched. We can use Promise.all to run them concurrently, 
//        so that the user doesn't have to wait for the prices to be fetched before the result 
//        is given:
// Approach 2 --> [correct_approach]
async function getPrice() {
    const [choice, prices] = await Promise.all([
        promptForDishChoice(),
        fetchPrices(),
    ]);
    return prices[choice];
}
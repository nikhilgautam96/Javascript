// The simplest fetch that we can use and still have error handling.

const url = 'https://jsonplaceholder.typicode.com/users';

export async function getData() {
    try {
        let response = await fetch(url);
        console.log(response);
        // we stiil need to check if the response is OK.
        if (!response.ok) throw new Error('not a valid response.');
        let dataObj = await response.json();
        console.log(dataObj);
    } catch (err) {
        console.log(err.message);
    }
}

// The simplest fetch that we can use and still have error handling.

const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {
    fetch(url)
        .then((res) => {
            console.log(res);
            // error checking
            console.log(res.status);
            if (!res.ok) throw new Error('was not a valid response.');
            return res.json(); // method to extract JSON string and convert it into an Object.
        })
        .then((dataObj) => {
            console.log(dataObj);
        })
        .catch((err) => {
            console.warn(err.message);
        });

    // Don't do this.
    /**
     *  let response = fetch(url);
        let dataObj = response.json();
        console.log(dataObj);
     * 
     * 
     *  */
}

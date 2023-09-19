function sendAutoEmail(to) {
    return function (subject) {
        return function (body) {
            return `Sending email to: ${to}, with subject: ${subject} and body: ${body}`;
        };
    };
}

let step1 = sendAutoEmail('nikhilgautam1729@gmail.com');
let step2 = step1('Formal Connect');
let step3 = step2('Hi Nikhil, how are you hope you are doing well.');

console.log(step3);
/**
 * Sending email to: nikhilgautam1729@gmail.com, with subject: Formal Connect and body: Hi Nikhil,
 * how are you hope you are doing well.
 */

// Using ES6:

const sendAutoEmail2 = (to) => (subject) => (body) =>
    `Sending email to: ${to}, with subject: ${subject} and body: ${body}`;

/**
 * Sending email to: nikhilgautam1729@gmail.com, with subject: Formal Connect and body: Hi Nikhil,
 * how are you hope you are doing well.
 */

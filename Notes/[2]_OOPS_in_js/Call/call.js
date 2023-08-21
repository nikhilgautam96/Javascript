function talk(lang, isPolite) {
    if (isPolite) {
        if (lang === 'en') {
            return `Hello, I am ${this.name}.`;
        } else if (lang === 'it') {
            return `Ciao  bella, sono ${this.name}.`;
        }
    } else {
        if (lang === 'en') {
            return `${this.name}, 😡 what do you want??`;
        } else if (lang === 'it') {
            return `Sono ${this.name}, 🤌🏻.`;
        }
    }
}
const me = {
    name: 'Nikhil',
};

console.log(talk.call(me, 'en', true)); // Hello, I am Nikhil.
console.log(talk.call(me, 'it', true)); // Ciao  bella, sono Nikhil.
console.log(talk.call(me, 'en', false)); // Nikhil, 😡 what do you want??
console.log(talk.call(me, 'it', false)); // Sono Nikhil, 🤌🏻.

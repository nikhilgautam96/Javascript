const person = {
    talk() {
        return 'Talking';
    },
};
const me = Object.create(person);
const you = {};
Object.setPrototypeOf(you, person);
you.talk();

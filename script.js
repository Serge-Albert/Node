console.log('hello');
let one = 125;
console.log(typeof one);
let two = 'uhu';
console.log(typeof two);
let third = 1234567890123456789012345678901234567890n;
console.log(typeof third);
let fourth = true;
console.log(typeof fourth);
let fifth = null;
console.log(typeof fifth);
let sixth = undefined
console.log(typeof sixth);
let seventh = {
    ITED: 'Igor',
    desk(Putin, Mishustin, Sobjanin) {
        console.log(this.ITED + ' say hello' + Putin + Sobjanin + Mishustin);
    }
}
console.log(typeof seventh);
seventh.desk()
seventh.desk('!')
seventh.desk(' ?', ' !', ' %')

const employer = {
    age: 38,
    setNewAge(newAge) {
        this.age = (newAge)
    },
    getpension() {
        console.log(65 - this.age);
    }
}
console.log(employer);
employer.getpension();
employer.setNewAge(43);
console.log(employer);
employer.getpension()
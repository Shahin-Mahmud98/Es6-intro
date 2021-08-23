const userName = 'janPakhi Potas Potas';
const weTogether = 'ami' + userName;
console.log(weTogether);
// userName = 'moyna Pakhi';

const numbers = [45, 23, 89, 60];
// numbers = [99,145,3]; // not allowed

numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}
const student = { roll: 101, name: 'mofij', job: 'intern' };

student.name = 'mofazzal';

// but 
// student = {name:'mofazzal'}; eita korle ora mind khabe cause ekhane reassign kora hocce




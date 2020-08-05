// let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

// Destructuring 

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const {player, experience} = obj;
let {wizardLevel} = obj;

const name = "john snow";

const obj1 = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}

const a = "simon";
const b = true;
const c = {};

const obj2 = {
    a, b, c
}

// Template strings

const name = "faraz";
const age = 31;
const pet = "horse";
const greetingBest = `Hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have`;

// Default arguments 

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have`;
}
 
// Symbol 

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow functions 

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;
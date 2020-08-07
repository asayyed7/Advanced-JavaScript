// Closures

const first = () => {
    const greet = "Hi";
    const second = () => {
        const name = "faraz";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

// Compose

const Compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
Compose(sum, sum)(5);

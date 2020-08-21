const fruits = ['grapes', 'orange', 'mango'];
const moreFruits = {
    apples: 5,
    orange: 10,
    grapes: 1000
}

for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
}

fruits.forEach(item => {
    console.log(item);
})

// for of

for (item of fruits) {
    console.log(item);
}

// for in 

for (item in moreFruits) {
    console.log(item);
}

'Turtle'.padStart(10);
'Turtle'.padEnd(10);

let obj = {username0: 'Santa', username1: 'Rudolf', username2: 'Mr.Grinch'}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

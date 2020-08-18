// pass by value

var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);

// pass by reference 

let obj1 = {name: 'faraz', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(786);
console.log(d);

let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
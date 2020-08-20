const array = [1,2,[3,4],5];
array.flat();

const entries = ['faraz', 'sayyed', , , , , 'aliya'];
entries.flat();

const entires2 = entries.flatMap(next => next + 'yoyo');

const userEmail = '          sayyedfaraz11@gmail.com';
const userEmail2 = 'aliyafaraz@gmail.com       ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [['commanderTom', 23], ['derek', 40], ['india', 18]];
Object.fromEntries(userProfiles);

try {
    true + 'hi'
}   catch {
    console.log('you messed up')
}
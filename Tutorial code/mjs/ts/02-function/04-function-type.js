// Method 1:
function UserInfo01(name, age) {
    return `My name is ${name}, ${age} years old!`;
}
// console.log(UserInfo01("John", 20));
// Method 2:
let UserInfo02 = function (name, age) {
    return `My name is ${name}, ${age} years old!`;
};
// Method 3: Arrow function
let f1 = function (i) { return i * i; };
let f2 = function (i) { return i * i; };
let f3 = (i) => { return i * i; };
let f4 = (i) => { return i * i; };
let f5 = (i) => i * i;
console.log(f5(5));

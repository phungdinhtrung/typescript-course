// Method 1:

function UserInfo01(name: string, age: number): string{
    return `My name is ${name}, ${age} years old!`
}
// console.log(UserInfo01("John", 20));


// Method 2:
let UserInfo02 = function(name: string, age: number): string{
    return `My name is ${name}, ${age} years old!`
}


// Method 3: Arrow function
let f1 = function(i:number): number { return i * i}
let f2 = function(i:number) { return i * i}
let f3 = (i:number) : number => { return i * i}
let f4 = (i:number) => { return i * i}
let f5 = (i:number) => i * i

console.log(f5(5));
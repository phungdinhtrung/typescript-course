// No return
function funcNoReturn(): void{
    console.log("funcNoReturn");
}
funcNoReturn()


// Return number
function funcReturnNumber(): number {
    return 2;
}
console.log(funcReturnNumber());


// Return string
function funcReturnString(): string {
    return "ABC";
}
console.log(funcReturnString());


// Return Array
function funcReturnArray(): [number, number, number] {
    return [1, 2, 3];
}
console.log(funcReturnArray());


// Return Object
function funcReturnObject(): {age: number, name: string} {
    return {age: 1, name: "ABC"};
}
console.log(funcReturnObject());

// Return Any
function funcReturnAny(): any {
    return [4, 6, 3];
}
console.log(funcReturnAny());

 
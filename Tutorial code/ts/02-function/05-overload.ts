function showName(x: string):string;
function showName(x: number):number;
function showName(x: any):any {
    return x
}

console.log(showName("12"));
console.log(showName(12));
console.log(showName("18"));

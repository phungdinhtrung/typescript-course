// 1. Đầy đủ tham số
function showInfo1(name: string, age: number): string{
    return `My name is ${name}, ${age} years old`
}

console.log(showInfo1("John", 20));


// 2. Tham số mặc định
function showInfo2(name: string = "Py", age: number = 40): string {
    return `My name is ${name}, ${age} years old`
}

console.log(showInfo2());


// 3. Tham số khuyết (?)
function showInfo3(name: string = "Jy", age?: number): string {
    if(age === undefined){
        return `My name is ${name}`
    }else{
        return `My name is ${name}, ${age} years old`
    }
}

console.log(showInfo3("Pyter"));


// 4. Tham số truyền vào nhiều hơn 1 kiểu dữ liệu
function showInfo4(x: (string | any[]), y:string[]): number {
    return x.length + y.length
}

console.log(showInfo4("abc", ['1234']));



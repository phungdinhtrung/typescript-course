function showNumberInfo(x:number): number {
    return x;
}


function showStringInfo(x:string): string {
    return x;
}

function showInfoGeneric<T>(x: T): T {
    return x;
}

// Run function
showInfoGeneric<string>('Generic')
showInfoGeneric<number>(123)
showInfoGeneric<boolean>(true)
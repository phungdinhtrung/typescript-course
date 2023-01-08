 class Car {
    static printArray<T>(x: T[]){
        console.log(x);
    }
 }

 Car.printArray<string>(["honda", "suzuki"])
 Car.printArray<number>([1, 2, 3])
 Car.printArray<any>(["honda", "suzuki", true, 1, 2, 3, false])
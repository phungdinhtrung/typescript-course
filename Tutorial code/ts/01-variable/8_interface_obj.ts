
// Obj
let ObjOne = {}
console.log("ObjOne === ", ObjOne);

// Interface
interface CourseInterface {
    name: string,
    time: number,
    free?: boolean                  // Obj kế thừa có thể có thuộc tính này hoặc không.
}

// Obj Interface
let ObjTwo : CourseInterface;

ObjTwo = {
    name: "PHP",
    time: 8
}

console.log("ObjTwo === ", ObjTwo);

// Obj three
let ObjThree: CourseInterface = {
    name: "PHP",
    time: 8,
    free: false
}

console.log("ObjThree === ", ObjThree);








/*
    Nội dung: Kế thừa Class (khai báo biến và phương thức) và mở rộng thêm thuộc tính, phương thức mới

    -- Sử dụng từ khóa "extends" để kế thừa lớp cha
    -- Kế thừa thuộc tính: sử dụng từ khóa super(variable 1, variable2, ...)
    -- Kế thừa phương thức: sử dụng từ khóa super."Tên phương thức cha"
*/

class CourseParent {

    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showCourseInfo(): void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}


class CourseChilren extends CourseParent { //extends: kế thừa lớp cha
    author: string;

    constructor(id: string, name: string, price: number, author: string){

        // Kế thừa thuộc tính lớp cha: từ khóa super(variable 1, variable2, ...)
        super(id, name, price);
        this.author = author;
    }

    // Kế thừa phương thức
    showCourseInfo(): void {

        // Kế thừa phương thức
        super.showCourseInfo();

        // Bổ sung phương thức
        console.log(`Author: ${this.author}`);
    }
}


let childObj = new CourseChilren('1', 'PHP', 123, "Nguyễn Văn Khánh");

childObj.showCourseInfo()

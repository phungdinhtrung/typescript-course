/*
    -- interface: khai báo đặc điểm (property) và phương thức (lưu ý: không có phần xử lý, chỉ có tên biến và tên phương thức; không có định nghĩa phương thức)
    -- Mặc định các biến, phương thức trong interface là public (vì để class định nghĩa và thực thi).

    -- Class sử dụng để thực hiện (implement), class phải định nghĩa chi tiết rõ các biến và phương thức trong interface;
*/

// Interface khai báo đặc điểm của con người
interface People {
    name: string;       // Khai báo đặc điểm
    eat(): void;        // Khai báo phương thức
    sleep(): void;
}

interface Bird {
    fly(): void;
}

// Class
class Machine {
    kmFly(km: number): number{
        return km
    }
}


// Class superman có đặc điểm và các hành động (implements) interface People (phương thức thì class --> phải bổ sung để hoàn thiện)
class Superman extends Machine implements People, Bird {
    name: string;

    constructor(name: string){
        super();                // Kế thừa lớp cha Machine
        this.name = name
    }

    // Name: Định nghĩa phương thức mới
    showName(): string{
        return this.name
    }

    // Định nghĩa superman eat --> cho interface People
    eat(): void {
        console.log("Superman eat()")
    }

    // Định nghĩa superman sleep --> cho interface People
    sleep(): void {
        console.log("Superman sleep()")
    }

    // Định nghĩa superman sleep --> cho interface Bird
    fly(): void {
        console.log("Superman fly()")
    }
}


// Tạo đối tượng
let supermanObj = new Superman("Khánh");

// Khai thác thông tin đối tượng
console.log('Name: ', supermanObj.showName());
supermanObj.eat();
supermanObj.sleep();
supermanObj.fly();
console.log('Km can fly: ', supermanObj.kmFly(9) ,' km');  // Kế thừa phương thức từ Machine


/*
    Nội dung: học về sử dụng abstract.
    Ý nghĩa abstract: là để định nghĩa một class hoặc một phương thức; Sau đó lớp khác kế thừa từ lớp này.

    -- Đối với class: abstract class name_class {}
    -- Đối với method: public abstract name_method (): kiểu dữ liệu trả về"

*/

// Khai báo lớp abstract: lớp đặc điểm chung nhất của đối tượng
abstract class Laptop {

    // Phương thức abstract chỉ khai báo tên method, không được định nghĩa method abstract.
    public abstract keyboard(): void;

    public mainboard(): void {
        console.log('Mainboard laptop');        
    }

    public chipset(): void{
        console.log('Chipset laptop');        
    }
}


// Tạo lớp mới kế thừa đặc điểm của lớp abstract và có một số đặc điểm riêng
class LaptopDell extends Laptop {

    // Định nghĩa method abstract của lớp cha
    public keyboard(): void {
        console.log('Keyboard Laptop Dell');
    }

    // Láp top dell có bàn khím khác về bàn phím
    public mainboard(): void {
        console.log('Mainboard Laptop Dell');
    }
}


// Tạo đối tượng
let laptopDell: Laptop = new LaptopDell()
laptopDell.keyboard()
laptopDell.mainboard()


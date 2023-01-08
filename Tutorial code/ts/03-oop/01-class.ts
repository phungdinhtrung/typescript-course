// Khai báo class
class Task { // Định nghĩa class

    // Khai báo biến
    id: number;
    name: string;
    status: string;

    // Phương thức khởi tạo
    constructor(id: number, name: string, status: string){
        this.id = id;
        this.name = name;
        this.status = status
    }

    // Phương thức
    showTaskInfo(){
        return `${this.id} - ${this.name} - ${this.status}`;
    }
}

// Đối tượng của class
let task = new Task(1, "Coding", 'created');

// console.log('Task: ', task);
// console.log('Task Info: ', task.showTaskInfo());





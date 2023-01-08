// Enum
enum TaskStatus {
    created = 100,
    Active,
    InActive,
    Process,
    Finish 
}

//  Định nghĩa Đối tượng TaskInterface: Đối tượng
interface TaskInterface {
    id: number,
    name: string,
    status?: TaskStatus;
}

// Khai báo class
class TaskService {
    public static user_name = "John";  // Static: có thể truy cập trực tiếp vào từ class mà không cần tạo ra đối tượng

    // Khai báo biến
    tasks: TaskInterface [];  // Task này có kiểu dữ liệu là TaskInterface (Obj), tasks tạo ra là mảng [], chứa đối tượng TaskInterface

    // Khởi tạo
    constructor(tasks: TaskInterface []){
        this.tasks = tasks;
    }

    // Phương thức
    getItems() {
        return this.tasks
    }
}


// Tạo ra đối tượng
let tasks: TaskInterface [] = [
    { id: 1, name: "Coding" },
    { id: 2, name: "PHP" },
    { id: 3, name: "ES6", status: TaskStatus.Finish },
];


// Truy cập đối tượng
let TaskServiceObj = new TaskService(tasks)
console.log(TaskServiceObj.getItems());

console.log('User name: ', TaskService.user_name);

 
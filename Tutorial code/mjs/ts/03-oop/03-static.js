// Bài học:
// Từ khóa static đặt trước biến hoặc phương thức thì:
// -- Không cần tạo đối tượng có thể truy cập được, để truy cập cả trong và ngoài class:
// -- Truy cập bằng "Tên class"."tên biến" hoặc "Tên class"."tên hàm"
// Khai báo class
class TasksStatic {
    // Khởi tạo
    constructor(tasks) {
        TasksStatic.tasks = tasks;
    }
    // Phương thức
    getItems() {
        return TasksStatic.tasks;
    }
    // Show item info: thêm static để truy cập trực tiếp vào phương thức mà không cần khởi tạo đối tượng
    static showItemInfo() {
        for (let task of TasksStatic.tasks) { // Truy cập trong class: TasksStatic.tasks
            console.log(`${TasksStatic.user_name} study ${task.name} `);
        }
    }
}
TasksStatic.user_name = "John"; // Static: có thể truy cập trực tiếp biến từ class mà không cần tạo ra đối tượng
// Tạo ra đối tượng
let obj = [
    { id: 1, name: "Coding" },
    { id: 2, name: "PHP" },
    { id: 3, name: "ES6" },
];
// Truy cập đối tượng
let taskObj = new TasksStatic(obj);
console.log('User name: ', TasksStatic.user_name); // Truy cập ngoài class TasksStatic.user_name (không cần tạo đối tượng)
console.log(TasksStatic.showItemInfo()); // Truy cập ngoài class TasksStatic.showItemInfo() (không cần tạo đối tượng)

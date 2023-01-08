// Enum
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["created"] = 100] = "created";
    TaskStatus[TaskStatus["Active"] = 101] = "Active";
    TaskStatus[TaskStatus["InActive"] = 102] = "InActive";
    TaskStatus[TaskStatus["Process"] = 103] = "Process";
    TaskStatus[TaskStatus["Finish"] = 104] = "Finish";
})(TaskStatus || (TaskStatus = {}));
// Khai báo class
class TaskService {
    // Khởi tạo
    constructor(tasks) {
        this.tasks = tasks;
    }
    // Phương thức
    getItems() {
        return this.tasks;
    }
}
TaskService.user_name = "John"; // Static: có thể truy cập trực tiếp vào từ class mà không cần tạo ra đối tượng
// Tạo ra đối tượng
let tasks = [
    { id: 1, name: "Coding" },
    { id: 2, name: "PHP" },
    { id: 3, name: "ES6", status: TaskStatus.Finish },
];
// Truy cập đối tượng
let TaskServiceObj = new TaskService(tasks);
console.log(TaskServiceObj.getItems());
console.log('User name: ', TaskService.user_name);

// Sử dụng để gán text thay cho code để tường minh hơn
// 100 created, 101 process, 102 finish
// -- Default:
var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 0] = "created";
    STATUS[STATUS["process"] = 1] = "process";
    STATUS[STATUS["finish"] = 2] = "finish";
})(STATUS || (STATUS = {})); // 0, 1, 2
// let todoStatus = STATUS.created 
// console.log(todoStatus)
// -- Gán giá trị cho Obj enum:
// enum STATUS { created = 100, process = 200, finish }     // 0, 1, 2
// let todoStatus = STATUS.finish                           // 201 = process + 1
console.log(STATUS);

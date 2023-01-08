// rest ... --> các tham số còn lại
function showInfo(name, ...course) {
    return name + ' study ' + course.join(", ");
}
console.log(showInfo("John", "ES6", "PHP", "TypeScript"));

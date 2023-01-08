// rest ... --> các tham số còn lại

function showInfo(name: string, ...course: string[]): string {
    return name + ' study ' + course.join(", ")
}

console.log(showInfo("John", "ES6", "PHP", "TypeScript"));

var task = Object.create(Object.prototype) //{};

task.title = 'My Task';
task.description = "My Description";
// task.toString  = function(){
//     return this.title + " " + this.description;
// }

Object.defineProperty(task, 'toString', {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

task.toString = "sfg";

// Object.defineProperty(task, 'toString', {
//     enumerable: true
// })

console.log(task);
console.log(Object.keys(task));


var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function(){
        return this.title + ' is urgent task';
    },
    writable: false,
    enumerable: false,
    configurable: false
});


console.log(urgentTask.toString());
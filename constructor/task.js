var Task = function (name) {
    this.name = name;
    this.completed = false;

    this.complete = function () {
        console.log("Completing task: " + this.name);
        this.completed = true;
    }

    this.save = function () {
        console.log("Saving task: " + this.name);
        this.completed = true;
    }
}

var task1  = new Task("Create a demo for constructors");
var task2  = new Task("Create a demo for modules");
var task3  = new Task("Create a demo for singleton");
var task4  = new Task("Create a demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();
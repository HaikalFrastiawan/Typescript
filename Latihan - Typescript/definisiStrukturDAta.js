var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Todo"] = "Todo";
    TaskStatus["inProgress"] = "IN_PROGRESS";
    TaskStatus["Done"] = "Done";
})(TaskStatus || (TaskStatus = {}));
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.lastid = 0;
        this.task = [];
    }
    TaskManager.prototype.addTask = function (title) {
        var newTask = {
            id: this.lastid++,
            title: title,
            status: TaskStatus.Todo
        };
        this.task.push(newTask);
        return newTask;
    };
    return TaskManager;
}());
var myManager = new TaskManager();
console.log(myManager.addTask("Belajar TypeScript"));
console.log(myManager.addTask("Mengerjakan Project"));

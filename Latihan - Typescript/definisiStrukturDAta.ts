enum TaskStatus {
    Todo = "Todo",
    inProgress = "IN_PROGRESS",
    Done = "Done"
}

interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    Deadline?: Date;
}

class TaskManager {
    private lastid: number = 0;
    private task: Task[] = [];

    addTask(title: string): Task {

        const newTask: Task ={
            id: this.lastid++,
            title: title,
            status:TaskStatus.Todo
        };

        this.task.push(newTask);
        return newTask;
    }
}
const myManager = new TaskManager();
console.log(myManager.addTask("Belajar TypeScript"));
console.log(myManager.addTask("Mengerjakan Project"));
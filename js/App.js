import {getTasks} from "./tasks/getTasks.js";
import {newTask} from "./tasks/newTask.js";
import {changeTask} from "./tasks/changeTask.js";
import {removeTask} from "./tasks/removeTask.js";


async function app() {
    let tasks = await getTasks()
    let taskNew = await newTask('testNew')
    console.log(taskNew)
}

app()







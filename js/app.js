import {getTasks} from "./tasks/getTasks.js";
import {newTask} from "./tasks/newTask.js";


async function app() {
    let tasks = await getTasks()
    await newTask('testOne')
}

app()







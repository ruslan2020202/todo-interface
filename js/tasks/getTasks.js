export async function getTasks() {

    let res = await fetch('http://127.0.0.1:5000/todo/api/v1/tasks/')
    // console.log(res.json())
    return res.json()
}
export async function newTask(name) {
    let res = await fetch('http://127.0.0.1:5000/todo/api/v1/tasks/',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body:JSON.stringify({
                "name":name
            })
        })
    return res.json()
}
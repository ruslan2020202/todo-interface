export async function changeTask(id) {
    let res = await fetch(`http://127.0.0.1:5000/todo/api/v1/tasks/${id}`,
        {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
    return res.json()
}
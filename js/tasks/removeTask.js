export async function removeTask(id) {
    let res = await fetch(`http://127.0.0.1:5000/todo/api/v1/tasks/${id}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
    return res.json()
}
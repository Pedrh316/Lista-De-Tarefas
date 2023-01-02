export const editTask = (id, value, setTasks) => {
    setTasks(prevTasks => prevTasks.map((task) => {
        return task.id === id ? {...task, text:value} : task
    }))
}

export const editTask = (id, value, setTasks) => {
    setTasks(prevTasks => {
        let tasks = prevTasks.filter(task => task.id !== id);
        let task = prevTasks.find(task => task.id === id);
        return [...tasks, {...task, text:value}];
    })
}

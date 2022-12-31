export const findTask = (id, tasks, setActualTask) => {
    const task = tasks.find(task => task.id === id);
    console.log(task);
    setActualTask(task);
}
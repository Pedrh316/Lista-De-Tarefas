export const deleteTask = (id) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    const newTasks = allTasks.filter(task => task.id !== Number(id) );
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}
export const deleteTask = (id , setTasks) => {
    setTasks(prevTasks => prevTasks.filter(prevTask => prevTask.id !== id ))
}
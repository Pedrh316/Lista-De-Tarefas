export const createTask = (task ,setTasks) => {
    setTasks((prevTasks) => ([...prevTasks, {id:prevTasks.length, text:task}]))
}
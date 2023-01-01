import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Manual from "./components/Manual"
import Markdown from "./components/Markdown"
import Task from "./components/Task"
import DataContext from "./hooks/useDataContext";


const data = JSON.parse(localStorage.getItem('tasks'));

const App = () => {

    const [tasks, setTasks] = React.useState(data || []);
    const [actualTask, setActualTask] = React.useState();

    React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setActualTask(null);
    }, [tasks])

    return (
        <DataContext.Provider value={{tasks, setTasks, actualTask, setActualTask}}>
            <Router>
                <Navbar/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/manual" element={<Manual/>}/>
                        <Route path="/tarefa" element={<Task/>}/>
                        <Route path="/add" element={<Markdown/>}/>
                    </Routes>
                </div>
            </Router>
        </DataContext.Provider>
    )
}

export default App
import React from "react"
import styled from "styled-components"
import DataContext from "../hooks/useDataContext"
import { findTask } from "../controllers/findTask"

const SButton = styled.button`
    background:${props => props.selected ? '#2e2f32' : '#424347'};
    font-size:1.1rem;
`

 const TaskItem = ({id, children}) => {
    const {actualTask, setActualTask, tasks} = React.useContext(DataContext)    
    const isSelected = actualTask?.id === id;
    
    return (
        <SButton onClick={() => findTask(id, tasks, setActualTask)} selected={isSelected}>{children}</SButton>
    )
}

export default TaskItem
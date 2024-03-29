import React from "react";
import styled from "styled-components"
import DataContext from "../hooks/useDataContext"
import TaskItem from './TaskItem'
import View from "./View";

const SSection = styled.section`
    display:flex;
    justify-content:center;
    gap:3rem;
    flex-wrap:wrap;
    
    article{
        flex-grow:1;
        flex-basis:550px;
    }

    ul{
        flex-basis:250px;        
        flex-grow:1;
        list-style:none;

        li{
            margin-bottom:1px;
            button{
                width:100%;
            }
        }
    }

`

const Task = () => {

    const {tasks, actualTask} = React.useContext(DataContext);

    const items = tasks.map(({text, id}) => {
        let title = text.trim().slice(0, 60).split(/\/&la|&la|&az|\/&az|&am|\/&am|&ro|\/&ro|&vd|\/&vd|[#\*@_]/s).join('').slice(0, 23);
        title = title.length >= 23 ? `${title.slice(0,20)}...` : title;
        return <li key={id}><TaskItem id={id}> {title} </TaskItem></li>
    }).reverse();

    return (
        <SSection>
            <article style={{minHeight:'300px'}}>
                {
                    actualTask?.text ?
                        <View enableOptions={true} id={actualTask.id}>{actualTask.text}</View> :
                        (
                            tasks.length > 0 
                            ? <h1 className="title">Selecione uma tarefa.</h1> 
                            : <h1 className="title">Nenhuma tarefa criada ainda.</h1>
                        )
                }
            </article>

            <ul>
                {items}
            </ul>
        </SSection>
    )
}

export default Task;

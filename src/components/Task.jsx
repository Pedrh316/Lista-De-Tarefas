import React from "react";
import styled from "styled-components"
import { DataContext } from "../App"
import TaskItem from './TaskItem'
import View from "./View";
import formatter from "../controllers/formatter"

const SSection = styled.section`
    display:flex;
    justify-content:center;
    gap:3rem;
    flex-wrap:wrap;

    article{
        flex-basis:600px;
    }

    ul{
        flex-basis:300px;        
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

    const {tasks, actualTask} = React.useContext(DataContext)

    const items = tasks.map(({text, id}) => {     
        let title = formatter(text).lines[0].slice(0,20);
        title = title.length === 20 ? `${title}...` : title;

        return <li key={id}><TaskItem id={id}> {title} </TaskItem></li>
    })

    return (
        <SSection>
            <article>
                {
                    actualTask?.text ?
                    <View>{actualTask.text}</View> 
                    : ( tasks.length > 0 ? <h1 className="title">Selecione uma tarefa.</h1> 
                        : 
                        <h1 className="title">Nenhuma tarefa criada ainda.</h1>
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
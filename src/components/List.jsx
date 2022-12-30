import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { SaveTaskContext } from "./Main";

const SList = styled.section`

    flex-grow:1;

    h2{
        padding-bottom:1.5rem;
        border-bottom:2px solid #787575;
    }

    div{
        margin-top:1.75rem;
        display:flex;
        flex-direction:column;
        gap:1rem;
        background-color:#F4F4F4;
        padding:2rem 1.5rem;
    }    
`

const List = () => {
    
    const [items, setItems] = React.useState([]);
    const {isFinished, updateIsFinished} = React.useContext(SaveTaskContext);
    

    React.useEffect(() => {
        const allTasks = JSON.parse(localStorage.getItem('tasks'));
        const newItems = allTasks?.map(({task, id}) => {
            const title = task.split(/\n/g)[0];
            return <ListItem key={id} title={title} id={id}/>
        })
        setItems(newItems);
    }, [isFinished])
        
        

    return (
        <SList>
            <h2>Lista de Tarefas</h2>
            <div>
                {
                    items ? items : <h3>Nenhuma tarefa foi criada ainda</h3>
                }
            </div>
        </SList>
    )
}

export default List;
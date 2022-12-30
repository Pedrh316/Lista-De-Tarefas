import styled from "styled-components";
import ListItem from "./ListItem";

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
    return (
        <SList>
            <h2>Lista de Tarefas</h2>
            <div>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
        </SList>
    )
}

export default List;
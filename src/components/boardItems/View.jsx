import formatter from "../../controllers/formatter";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SBtnLink } from "../BtnLink";
import STask from "../css/task";

const SView = styled.article`
    background-color:#F5F5F5;
    padding:2rem;

    article{
        padding:2rem;
        background-color:white;
    }

    header{
        display:flex;
        // justify-content:flex-start;
        gap:1rem;
        margin-bottom:1rem;
    }
    
`

const SLinkHome = styled(SBtnLink)`
    background-color:orange;
`


const View = () => {
    const {id} = useParams()

    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    const text = allTasks.find(task => task.id === Number(id)).task;
    const formattedText = formatter(text);

    return (
        <SView>
            <header>
                <SLinkHome>Editar</SLinkHome>
                <SLinkHome to="/">Voltar à home</SLinkHome>
            </header>
            <STask>
                {formattedText}
            </STask>
        </SView>
    )
}

export default View;
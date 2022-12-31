import { Link } from "react-router-dom"
import styled from "styled-components"

const SSection = styled.section`

    a{    
        display:block;
        width:max-content;
        margin-bottom:1em;
        background-color:#424347;
    }
`

const Home = () => {
    return (
        <SSection>
            <h1 className="title">Lista de tarefas</h1>
            <Link to="/manual">Manual</Link>
            <Link to="/tarefa">Tarefas</Link>
            <Link to="/add">Adicionar Tarefa</Link>
        </SSection>
    )
}

export default Home
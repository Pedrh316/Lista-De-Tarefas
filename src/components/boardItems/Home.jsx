import styled from "styled-components";
import { SBtnLink } from "../BtnLink";

const SHome = styled.section`

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:1rem;
    padding:1rem;

`

const SLink = styled(SBtnLink)`  
    background-color:#629CA9;
    font-size:1.3rem;        
`


const Home = () => {
    return (
        <SHome id="home">
            <SLink to="/markdown">Adicionar Tarefa</SLink>
            <SLink to="/manual">Ver instruções</SLink>
        </SHome>
    )
}

export default Home;
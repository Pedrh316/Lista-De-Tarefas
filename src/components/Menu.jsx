import { Link } from "react-router-dom";
import styled from "styled-components";
const SMenu = styled.ul`

    display:flex;      
    list-style:none;

    @media screen and (max-width:700px){
        position:absolute;
        bottom:0;
        right:-1.5rem;
        width:80vw;
        transform:translateY(100%);
        flex-direction:column;
        background-color:#2D343D;
        padding-bottom:1rem;
    
        a{
            width:100%;
        }
        
    }

}
`

const Menu = () => {
    return(
        <SMenu>
            <li><Link to="/"> Início</Link></li>
            <li><Link to="/tarefa"> Tarefas</Link></li>
            <li><Link to="/manual"> Manual</Link></li>
            <li><Link to="/adicionar"> Adicionar Tarefa</Link></li>
        </SMenu>
    )
}

export default Menu;
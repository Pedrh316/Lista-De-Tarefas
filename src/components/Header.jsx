import styled from "styled-components";
import { SBtnLink } from "./BtnLink";

const SHeader = styled.header`        
    background-color:#eee;
    position:sticky;
    left:0;
    right:0;
    top:0;
    margin-bottom:2rem;

    .container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:2rem;
        padding:.5rem 1rem;
    }

    h1{
        text-transform:uppercase;
    }
`

const SLinkManual = styled(SBtnLink)`
    background-color:#ffc65d;
    white-space:nowrap;
`

const Header = () => {
    return (
        <SHeader>
            <div className="container">
                <h1>Projeto To-do list</h1>
                <SLinkManual to="/manual">Ver instruções</SLinkManual>
            </div>
        </SHeader>
    )
}

export default Header;
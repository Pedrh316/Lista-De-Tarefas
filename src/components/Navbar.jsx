import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiOutlineBars} from 'react-icons/ai';
import useToggle from '../hooks/useToggle';

const SNav = styled.nav`
    background-color:#2D343D;
    padding-block:.5rem;    
    margin-bottom:3rem;
    position:relative;

    .container{
        display:flex;
        align-items:center;
        justify-content:flex-end;

        #menu{
            list-style:none;
            display:none;
        }
        #menu[aria-expanded="true"]{
            display:flex;            
        }
        .menu-btn{
            display:none;
        }
    }

    @media screen and (max-width:700px){
        .container{
            #menu{
                position:absolute;
                bottom:0;
                right:2rem;
                left:0;
                transform:translateY(100%);
                flex-direction:column;
                background-color:#2D343D;
                padding-bottom:1rem;
            }
            .menu-btn{
                display:block;
                padding:0;
                cursor:pointer;
                .menu-icon{
                    padding:.7rem 1rem;
                    font-size:1.75rem;
                    box-sizing:content-box;
                }
            }
        }
    }

`

const Navbar = () => {

    const {status:hideMenu, toggleStatus:toggleHideMenu} = useToggle();
    const [pageInnerWidth, setPageInnerWidth] = React.useState(innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", () => setPageInnerWidth(innerWidth));
    }, [])

    return (
        <SNav>
            <div className="container">
                <button className='menu-btn' aria-controls="menu" onClick={() => toggleHideMenu()}>
                    <AiOutlineBars className="menu-icon"/>
                </button>
                <ul id="menu" aria-expanded={hideMenu || pageInnerWidth > 700} >
                    <li><Link to="/"> Início</Link></li>
                    <li><Link to="/tarefa"> Tarefas</Link></li>
                    <li><Link to="/manual"> Manual</Link></li>
                    <li><Link to="/add"> Adicionar Tarefa</Link></li>
                </ul>
            </div>
        </SNav>
    )
}

export default Navbar
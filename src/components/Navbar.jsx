import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SNav = styled.nav`
    background-color:#2D343D;
    padding-block:.5rem;    
    margin-bottom:3rem;

    .container{
        display:flex;
        align-items:center;
        justify-content:flex-end;

        ul{
            list-style:none;
            display:flex;
        }
    }

`

const Navbar = () => {
    return (
        <SNav>
            <div className="container">
                <ul>
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
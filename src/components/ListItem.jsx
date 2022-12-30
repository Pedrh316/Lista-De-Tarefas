import {AiOutlineDelete} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const SListItem = styled.article`
background-color:white;

button{
    padding:.5rem;
        background-color:#F95A40;
    }
    
    `
    
const SLink = styled(Link)`
    display:flex;
    gap:.5rem;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
`

const ListItem = ({title, id}) => {
    return (
        <SListItem>
            <SLink to={`/task/${id}`}>                
                <h4>{title}</h4>
                <IconContext.Provider  value={{ style: { fill: 'white' } }}>
                    <button><AiOutlineDelete/></button>
                </IconContext.Provider>
            </SLink>
        </SListItem>
    )
}

export default ListItem;
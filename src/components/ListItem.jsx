import {AiOutlineDelete} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import React from 'react';

const SListItem = styled.article`
    padding:1rem;
    background-color:white;
    display:flex;
    gap:.5rem;
    align-items:center;
    justify-content:space-between;

    button{
        padding:.5rem;
        background-color:#F95A40;
    }

`

const ListItem = ({title}) => {
    return (
        <SListItem>
            <h4>{title}</h4>
            <IconContext.Provider  value={{ style: { fill: 'white' } }}>
                <button><AiOutlineDelete/></button>
            </IconContext.Provider>
        </SListItem>
    )
}

export default ListItem;
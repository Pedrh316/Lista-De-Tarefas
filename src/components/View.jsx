import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Dropper from "./Dropper"
import DataContext from "../hooks/useDataContext"
import { deleteTask } from "../controllers/deleteTask"
import {BsThreeDotsVertical} from 'react-icons/bs';
import Formatter from "../controllers/formatter"

const SView = styled.article`
    padding:2rem 1rem;
    background-color:#2D343D;
    min-height:inherit;
    overflow-y:auto;
    resize:vertical;

    &>*:first-child{
        margin-top:0;
    }

    h1{
        font-size:2em;
        border-bottom:3px dotted #ccc;
        padding-bottom:.25em;
        margin-bottom:.75em;
    }
    h2{
        font-size:1.6em;
        margin-bottom:.5em;
    }
    li{
        font-size:1em;
        list-style-position:inside;
    }

    *:not( .dropper-container, .dropper-container *){
        margin:1em 0;
    }

    .dropper-container{
        float:right;
        .drop-btn-icon{
            padding:.75rem;
            box-sizing:content-box;
            font-size:1.3rem;
            background-color:#1c1d22;
            border-radius:50%;
        }
        .dropdown{
            display:flex;
            flex-direction:column;
            position:absolute;
            top:0;
            left:0;
            transform:translateX(calc(-100% - .25rem));
            button, a{
                background-color:#1c1d22;
            }
        }
    }

`

const View = ({children, enableOptions, id}) => {

    const {setTasks} = React.useContext(DataContext);

    return (
        <SView>
            {enableOptions && 
                <div className="dropper-container">
                    <Dropper button={<button><BsThreeDotsVertical className="drop-btn-icon"/></button>}>
                        <div className="dropdown">
                            <Link to={`/editar/${id}`}>Editar</Link>
                            <button onClick={() => deleteTask(id, setTasks)}>Deletar</button>
                        </div>
                    </Dropper>
                </div>
            }
            <div className="formatter">{<Formatter>{children}</Formatter>}</div>
        </SView>
    )
}

export default View
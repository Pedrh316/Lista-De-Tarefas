import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import formatter from "../controllers/formatter"
import Dropper from "./Dropper"
import DataContext from "../hooks/useDataContext"
import { deleteTask } from "../controllers/deleteTask"

const SView = styled.article`
    padding:2rem 1rem;
    background-color:#2D343D;
    min-height:inherit;
    overflow-y:auto;

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
`

const View = ({children, enableOptions, id}) => {

    const {setTasks, setActualTask} = React.useContext(DataContext);
    const {formattedText} = formatter(children || '')

    return (
        <SView>
            {enableOptions && 
                <Dropper buttonTitle={'opt'}>
                    <Link to="/tarefa/edit">Editar</Link>
                    <button onClick={() => deleteTask(id, setTasks)}>Deletar</button>
                </Dropper>
            }
            {formattedText}
        </SView>
    )
}

export default View
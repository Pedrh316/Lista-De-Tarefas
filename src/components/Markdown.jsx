import React from 'react';
import styled from "styled-components";
import useController from '../hooks/useController';
import { Link, useParams } from 'react-router-dom';
import Preview from './Preview';
import {createTask} from '../controllers/createTask';
import {editTask} from '../controllers/editTask';
import DataContext from '../hooks/useDataContext';

const SMarkdown = styled.section`

    header,main{
        margin-bottom:.5rem;
    }

    header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;       
        gap:1rem; 

        .title{
            margin:0;
        }

        button{
            font-size:1rem;
            padding:1rem; 2rem;
            background-color:#67a2bf;
        }
        button.selected{
            background-color:#2681ae;
        }
    }

    main{
        min-height:250px;

        & > *{
            min-height:inherit;
        }
        textarea{
            font-size:1.3rem;
        }
    }

    footer{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        gap:1rem;

        button, a{
            font-size:1rem;
        }

        .clean{
            background-color:#424347;
        }
        .finish{
            background-color:#2681ae;
        }
        .finish[disabled]{
            background-color:lightblue;
            filter:none;
        }
    }
`

const Markdown = ({add, config}) => {
    
    const {value, updateValue} = useController();
    const [seePreview, setSeePreview] = React.useState(false);
    const [allowSave, setAllowSave] = React.useState(false);
    const {tasks, setTasks} = React.useContext(DataContext);
    const paramId = +useParams().id;
    
    React.useEffect(() => {
        if(!add && paramId !== null){
            const {text} = tasks.find(({id}) => id === paramId);
            updateValue(text)
        }
    }, [])

    function modeTask(){
        add ? createTask(value, setTasks) : editTask(paramId, value, setTasks);
    }

    React.useEffect(() => {
        const thereIsAlphanumeric = /\w/g.test(value);
        const thereIsText = value.length >= 5;
        setAllowSave(thereIsAlphanumeric && thereIsText);
    }, [value]);


    return (
        <SMarkdown>
            <header>
                <h2 className="title">{config.title}</h2>
                <div>
                    <button onClick={ () => setSeePreview(false) } className={`${!seePreview ? 'selected' : ''}`}>task</button>
                    <button onClick={ () => setSeePreview(true) } className={`${seePreview ? 'selected' : ''}`}>preview</button>
                </div>
            </header>
            <main>
                {
                    seePreview ? <Preview>{value}</Preview>: 
                    <textarea value={value} onInput={({target:{value}}) => updateValue(value)} autoFocus={true} placeholder="Escreva aqui sua lista de tarefas."/>
                }
            </main>
            <footer>
                <button onClick={() => {updateValue(''); }} className="clean">Limpar</button>
                <div className='right'>
                    <Link to="/tarefa" className="cancel">Cancelar</Link>
                    <Link 
                        to={`${allowSave ? '/tarefa' : ""}`}
                        className="finish"
                        disabled={!allowSave}
                        onClick={() => allowSave && modeTask()}
                    >
                        Concluir
                    </Link>
                </div>
            </footer>
        </SMarkdown>
    )
}

export default Markdown
import React from "react";
import styled from "styled-components";
import Panel from "../Panel";
import Preview from "../panelItems/Preview";
import TextArea from "../panelItems/TextArea";
import { SBtnLink } from "../BtnLink";
import useControlled from "../../hooks/useControlled";
import { SaveTaskContext } from "../Main";
import { Navigate } from "react-router-dom"; 

const SMarkdown = styled.section`
    padding:2rem 4rem;
    background-color:#F5F5F5;
    display:flex;
    flex-direction:column;
    flex-grow:1;
    gap:1rem;    

    header{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        gap:1rem;

        div{
            display:flex;

            button{
                padding:.5rem 2rem;
            }
        }
    }

    footer{
        display:flex;
        justify-content:flex-end;
        gap:1.75rem;
    }

    @media screen and (max-width:550px){
        &{
            padding:1rem 1.5rem;
        }
    }

`

const SLinkCreate = styled(SBtnLink)`
    background-color:#00896F;
`
const SLinkCancel = styled(SBtnLink)`
    background-color:#C34A36;
`


const Markdown = () => {

    const {value, updateValue} = useControlled();
    const [isMarkdown, setIsMarkdown] = React.useState(true);
    const markdownStyle = (isTrue) => ({backgroundColor: isTrue ? '#629CA9' : '#d7e0e5' });

    const {isFinished, updateIsFinished} = React.useContext(SaveTaskContext);

    React.useEffect(() => {
        if(isFinished){
            const allTasks = JSON.parse(localStorage.getItem('tasks')) || '';

            const newTask = {
                id:allTasks.length,
                task:value
            }
            const newTasks = [...allTasks, newTask]
            
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            updateIsFinished(false);

        }
    }, [isFinished])
    
    

    return (
        <SMarkdown className="panel">
            <header>
                <h2 className="title">Adicionar nova tarefa</h2>
                <div>
                    <button onClick={() => setIsMarkdown(true)} style={markdownStyle(isMarkdown)}>task</button>
                    <button onClick={() => setIsMarkdown(false)} style={markdownStyle(!isMarkdown)}>preview</button>
                </div>
            </header>
            <Panel>
                {
                    isMarkdown
                    ? 
                    <TextArea value={value} updateValue={updateValue}/> 
                    :
                    <Preview value={value}/>
                }
            </Panel>
            <footer>
                <SLinkCreate to="/">Cancelar</SLinkCreate>
                {/* <SLinkCancel to="/">Concluir</SLinkCancel> */}
                <button onClick={() => updateIsFinished(true)}>Concluir</button>
            </footer>
        </SMarkdown>
    )
}

export default Markdown;
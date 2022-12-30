import React from "react";
import styled from "styled-components";
import Panel from "../Panel";
import Preview from "../panelItems/Preview";
import TextArea from "../panelItems/TextArea";
import useControlled from "../../hooks/useControlled";
import { SBtnLink } from "../BtnLink";

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

    const [isMarkdown, setIsMarkdown] = React.useState(true);
    const {value:text, updateValue:updateText} = useControlled();
    const markdownStyle = (isTrue) => ({backgroundColor: isTrue ? '#629CA9' : '#d7e0e5' });

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
                    <TextArea value={text} updateText={updateText}/> 
                    :
                    <Preview value={text}/>
                }
            </Panel>
            <footer>
                <SLinkCreate to="/">Cancelar</SLinkCreate>
                <SLinkCancel to="/">Concluir</SLinkCancel>
            </footer>
        </SMarkdown>
    )
}

export default Markdown;
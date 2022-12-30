import React from "react";
import styled from "styled-components";

const SPreview = styled.div`
    border:1px solid #8f8f9d;
    padding:1rem;
    background-color:white;
    height:200px;

    h1{
        font-size:2em;
        border-bottom:3px dotted #ccc;
        padding-bottom:.25em;
        margin-bottom:.5em;
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

const Preview = ({value}) => {

    const lines = value.split(/\n/g);

    const formattedText = lines.map((line, index) => {
        const symbol = line.slice(0,2)
        const text = line.slice(2);
        const thereIsCharacter = /\w/.test(symbol);
        
        switch(symbol){
            case '# ':
                return <h1 key={index}>{text}</h1>
            case '##':
                return <h2 key={index}> {text}</h2>
            case '- ':
                return <li key={index}>{text}</li>
            case thereIsCharacter && symbol.match(/\w+/)[0]:
                return <p key={index}>{line}</p>
        }
    })

    return (
        <SPreview>{
            formattedText
        }</SPreview>
    )
}

export default Preview;
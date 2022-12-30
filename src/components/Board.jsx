import styled from "styled-components";
import Manual from "./boardItems/Manual";
import Markdown from "./boardItems/Markdown";
import Home from './boardItems/Home';
import { Route, Routes } from "react-router-dom";

const SBoard = styled.div`
    flex-basis:600px;
    flex-shrink:1;
    flex-grow:1;

    .title{
        font-size:2.25rem;            
    }
`

const Board = () => {    
    return (        
        <SBoard>   
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/markdown" element={<Markdown/>}/>
                <Route path="/manual" element={<Manual/>}/>
            </Routes>
        </SBoard>
    )
}

export default Board;
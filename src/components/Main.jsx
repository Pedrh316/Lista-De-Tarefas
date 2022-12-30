import styled from "styled-components";
import List from "./List";
import Board from './Board';
import React from "react";
import useControlled from "../hooks/useControlled";

const SMain = styled.main`
    display:flex;
    gap:2rem;
    flex-wrap:wrap;
`

export const SaveTaskContext = React.createContext();

const Main = () => {

    const {value:isFinished, updateValue:updateIsFinished} = useControlled();
    
    return (
        <SMain>
            <SaveTaskContext.Provider value={{isFinished, updateIsFinished}}>
                <Board/>
                <List/>
            </SaveTaskContext.Provider>
        </SMain>
    )
}

export default Main;
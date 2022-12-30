import styled from "styled-components";
import List from "./List";
import Board from './Board';

const SMain = styled.main`
    display:flex;
    gap:2rem;
    flex-wrap:wrap;
`

const Main = () => {

    return (
        <SMain>
            <Board/>
            <List/>
        </SMain>
    )
}

export default Main;
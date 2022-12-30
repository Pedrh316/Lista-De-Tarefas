import styled from "styled-components"
import { SBtnLink } from "../BtnLink"

const SManual = styled.section`

    line-height:1.5;

    .list{
        list-style-position:inside;

        .symbol{
            width:30px;
            display:inline-block;
        }
    }

`
const SLinkHome = styled(SBtnLink)`
    background-color:#629CA9;
    float:right;
    margin-top:2rem;
`

const Manual = () => {
    return (
        <SManual>
            <h2 className="title">Manual de formatação de texto</h2>
            <p>Nesta seção você aprenderá como manipular a escrita dos seus textos através da utilização de símbolos, que definirão se uma determinada linha será um título, subtítulo, item de lista, parágrafo, etc.</p>
            <ul className="list">
                <li><span className="symbol">#</span>Título.</li>
                <li><span className="symbol">##</span>Subtítulo.</li>
                <li><span className="symbol">-</span>Item de uma lista não ordenada.</li>
                <li><span className="symbol">1-</span>Item de uma lista ordenada.</li>
            </ul>
            <SLinkHome to="/">Voltar à Home</SLinkHome>
        </SManual>
    )
}

export default Manual;
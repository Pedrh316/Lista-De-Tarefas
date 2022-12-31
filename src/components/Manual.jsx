import styled from "styled-components"

const SSection = styled.section`

    li, p{
        line-height:1.5;
    }

    .list{
        padding-left:1rem;

        li{
            padding-left:1rem;            
        }
    }


    .symbol{
        display:inline-block;
        width:30px;
    }
`

const Manual = () => {
    return (
        <SSection>
            <h2 className="title">Manual de formatação de texto</h2>
            <p>Nesta seção você aprenderá como manipular a escrita dos seus textos através da utilização de símbolos, que definirão se uma determinada linha será um título, subtítulo, item de lista, parágrafo, etc.</p>
            <ul className="list">
                <li><span className="symbol">#</span>Título.</li>
                <li><span className="symbol">##</span>Subtítulo.</li>
                <li><span className="symbol">-</span>Item de uma lista não ordenada.</li>
                <li><span className="symbol">1-</span>Item de uma lista ordenada.</li>
            </ul>
        </SSection>
    )
}

export default Manual
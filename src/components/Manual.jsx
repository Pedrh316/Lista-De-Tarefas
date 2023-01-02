import styled from "styled-components"

const SSection = styled.section`

    li, p{
        line-height:1.5;
    }

    .list{
        padding-left:1rem;

        li{
            padding-left:.5rem;            
        }
    }

    .subtitle{
        font-size:1.5rem;
        margin-block:1em;
    }

    h4, .list{
        margin-bottom:.5rem;
    }

    h4 + .list{
        margin-left:1.5rem;
    }

    p{
        margin-bottom:1em;
    }

    [class^=symbol]{
        display:inline-block;
        margin-right:.5rem;
    }

    .symbol-small{
        min-width:30px;
    }
    .symbol-medium{
        min-width:90px;
    }
`

const Manual = () => {
    return (
        <SSection>
            <h2 className="title">Manual de formatação de texto</h2>
            <p>Nesta seção você aprenderá como manipular a escrita dos seus textos através da utilização de símbolos, que definirão se uma determinada linha será um título, subtítulo, item de lista, parágrafo, etc.</p>
            <h3 className="subtitle">Como utilizar e exemplos</h3>
            <p>Cada símbolo será classificado como símbolo com ou sem fechamento.</p>
            <h4>Possem fechamento</h4>
            <ul className="list">
                <li><span className="symbol-medium">&vd /&vd</span>adiciona fonte verde</li>
                <li><span className="symbol-medium">&vm /&vm</span>adiciona fonte vermelha</li>
                <li><span className="symbol-medium">&am /&am</span>adiciona fonte amarela</li>
                <li><span className="symbol-medium">&az /&az</span>adiciona fonte azul</li>
                <li><span className="symbol-medium">&la /&la</span>adiciona fonte laranja</li>
            </ul>
            
            <h4>Não possuem fechamento</h4>
            <ul className="list">
                <li><span className="symbol-small">#</span>Título.</li>
                <li><span className="symbol-small">##</span>Subtítulo.</li>
                <li><span className="symbol-small">-</span>Item de uma lista </li>
            </ul>
        </SSection>
    )
}

export default Manual
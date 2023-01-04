import styled from "styled-components"
import Formatter from "../controllers/formatter"

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

    h4, .list, .example{
        margin-bottom:.5em;
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
        min-width:50px;
    }

`

const Manual = () => {
    return (
        <SSection>
            <h2 className="title">Manual de formatação de texto</h2>
            <p>Nesta seção você aprenderá como manipular a escrita dos seus textos através da utilização de símbolos, que definirão se uma determinada linha será um título, subtítulo, item de lista, parágrafo, etc.</p>
            <h3 className="subtitle">Como utilizar e exemplos</h3>
            <p>
                Para que cada um dos símbolos que serão apresentados abaixo funcione corretamente, você deverá seguir três passos:
            </p>
            <ol className="list">
                <li>Digitar um símbolo. ex(#);</li>
                <li>Digitar um texto. ex(Título);</li>
                <li>Digitar caractere de fechamento: /#</li>
            </ol>

            <div className="example">
                <p>Seguindo os passos acima teremos <code># Título /#</code> e como resultado o seguinte output:</p>
                <div className="output"><Formatter># Título /#</Formatter></div>
            </div>

            <p>Os mesmos passos deverão ser seguidos a todos os símbolos listados abaixo nesta página.</p>

            <h2 className="subtitle">Símbolos</h2>

            <h4>Para definir cargas semânticas:</h4>
            <ul className="list">
                <li><span className="symbol-small">#</span>adiciona título</li>
                <li><span className="symbol-small">##</span>adiciona subtítulo</li>
                <li><span className="symbol-small">*</span>adiciona parágrafo</li>
            </ul>

            <h4>Para definir cores de fonte:</h4>
            <ul className="list">
                <li><span className="symbol-small">&vd</span>adiciona fonte verde</li>
                <li><span className="symbol-small">&vm</span>adiciona fonte vermelha</li>
                <li><span className="symbol-small">&am</span>adiciona fonte amarela</li>
                <li><span className="symbol-small">&az</span>adiciona fonte azul</li>
                <li><span className="symbol-small">&la</span>adiciona fonte laranja</li>
            </ul>
        </SSection>
    )
}

export default Manual
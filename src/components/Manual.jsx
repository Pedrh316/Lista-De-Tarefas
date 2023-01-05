import styled from "styled-components"
import Formatter from "../controllers/formatter"
import View from "./View"

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

    [class^=symbol]{
        display:inline-block;
        margin-right:.5rem;
    }

    .symbol-small{
        min-width:15px;
    }
    .symbol-medium{
        min-width:40px;
    }
`

const Manual = () => {
    return (
        <SSection>
            <h2 className="title">Manual de formatação de texto</h2>
            <p>Nesta seção você aprenderá como manipular a escrita dos seus textos através da utilização de símbolos, que definirão se uma determinada linha será um título, subtítulo, item de lista, parágrafo, etc.</p>
            <h3 className="subtitle">Como utilizar</h3>
            <p>
                Para que cada um dos símbolos que serão apresentados abaixo funcione corretamente, você deve saber primeiramente que no markdown
                 existem símbolos que exigem repetição do mesmo precedido de barra <span style={{whiteSpace:'nowrap'}}>(ex: &vd ... /&vd)</span> e aqueles que não precisam de fechamento.
            </p>
            <ul className="list">
                <li>
                    <h3>Símbolos que posuem fechamento:</h3>
                    <ul className="list">
                        <li><h4>Alteram cor padrão da fonte:</h4></li>
                        <ul className="list">
                            <li><span className="symbol-medium">&vd</span>Verde</li>
                            <li><span className="symbol-medium">&vm</span>Vermelho</li>
                            <li><span className="symbol-medium">&am</span>Amarelo</li>
                            <li><span className="symbol-medium">&az</span>Azul</li>
                            <li><span className="symbol-medium">&ro</span>Rosa</li>
                            <li><span className="symbol-medium">&la</span>Laranja</li>
                        </ul>
                        <li><h4>Adicionam carga semântica:</h4></li>
                        <ul className="list">
                            <li><span className="symbol-small"><Formatter inline={true}>! ! /!</Formatter></span>negrito</li>
                            <li><span className="symbol-small">|</span><Formatter inline={true}>| itálico /|</Formatter></li>
                        </ul>
                    </ul>                        
                </li>
                <li>
                    <h3>Símbolos que não possuem fechamento:</h3>
                    <ul className="list">
                        <li><span className="symbol-small">#</span>Título</li>
                        <li><span className="symbol-small">@</span>Subtítulo</li>
                        <li><span className="symbol-small">_</span>Item de lista</li>
                        <li><span className="symbol-small">*</span>Parágrafo</li>
                    </ul>
                </li>
            </ul>
            <p>Mas voce deve estar se perguntando: <Formatter inline={true}>&am"Se eu não preciso fechar um símbolo, quer dizer que tudo que estiver escrito abaixo continuará sendo por exemplo um título?" /&am, e a resposta é ! não /!</Formatter>.
                Cada símbolo que não possui autofechamento será separado pelo próximo símbolo sem fechamento. Portanto, é crucial a utilização da semântica na criação de sua lista de tarefas ou anotações.
            </p>
            <p>Além disso, vale ressaltar também que nenhum dos símbolos que possuem fechamento ou não podem receber outros símbolos de mesma classificação, ou seja, cada símbolo de mesmo tipo deverá estar separado dos outros.</p>

            <h3 className="subtitle">Exemplos</h3>
            <p>Para uma melhor compreensão do que foi dito até agora, abaixo estão alguns exemplos com seus respectivos outputs.</p>
            <ul className="list">
                <li>
                    <div className="example">
                        <p>Input: <code># Título</code>. Output:</p>
                        <div className="output"><View># Título</View></div>
                    </div>
                </li>
                <li>
                    <div className="example">
                        <p>Input: <code># &vd Título com cor verde /&vd</code>. Output:</p>
                        <div className="output"><View># &vd Título com cor verde /&vd</View></div>
                    </div>
                </li>
                <li>
                    <div className="example">
                        <p>Input: <code># &az Título com cor azul /&az</code>. Output:</p>
                        <div className="output"><View># &az Título com cor azul /&az</View></div>
                    </div>
                </li>
                <li>
                    <div className="example">
                        <p>Input: <code># &ro Título /&vd @ &la Subtítulo /&ro</code>. Output:</p>
                        <div className="output"><View># &ro Título /&ro @ &la Subtítulo /&la</View></div>
                    </div>
                </li>
            </ul>
        </SSection>
    )
}

export default Manual
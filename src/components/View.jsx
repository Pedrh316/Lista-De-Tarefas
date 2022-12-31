import styled from "styled-components"
import formatter from "../controllers/formatter"

const SView = styled.article`
    padding:2rem 1rem;
    background-color:#2D343D;
    min-height:inherit;
    overflow-y:auto;

    h1{
        font-size:2em;
        border-bottom:3px dotted #ccc;
        padding-bottom:.25em;
        margin-bottom:.75em;
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

const View = ({children}) => {
    const {formattedText} = formatter(children || '')
    return (
        <SView>
            {formattedText}
        </SView>
    )
}

export default View
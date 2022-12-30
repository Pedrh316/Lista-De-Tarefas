import styled from "styled-components"

const STask = styled.div`
    border:1px solid #8f8f9d;
    padding:2rem 1rem;
    background-color:white;
    height:300px;
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

export default STask;
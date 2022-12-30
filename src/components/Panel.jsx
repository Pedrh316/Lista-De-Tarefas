import styled from "styled-components"

const SPanel = styled.div`
    & > *{
        width:100%;
    }
`

const Panel = ({children}) => {
    return (
        <SPanel>
            {children}
        </SPanel>
    )
}

export default Panel
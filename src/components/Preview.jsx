import styled from "styled-components";
import View from "./View";

const SPreview = styled.div`
    font-size:14px;
    height:inherit;
`

const Preview = ({children}) => {
    return (
        <SPreview>
            <View enableOptions={false}>{children}</View>
        </SPreview>
    )
}

export default Preview
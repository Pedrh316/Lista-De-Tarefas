import React from "react";
import styled from "styled-components";
import STask from "../css/task";
import formatter from "../../controllers/formatter";

const Preview = ({value}) => {
    const formattedText = formatter(value);

    return (
        <STask>{
            formattedText
        }</STask>
    )
}

export default Preview;
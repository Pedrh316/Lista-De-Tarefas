import React from "react"

const TextArea = ({value, updateValue}) => {

    const style = {
        'height':'200px',
        'padding':'1rem'
    }

    return (
        <textarea value={value} onChange={({target}) => updateValue(target.value)} style={style}/>
    )
}

export default TextArea;
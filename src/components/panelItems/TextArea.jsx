const TextArea = ({value, updateText}) => {

    const style = {
        'height':'200px',
        'padding':'1rem'
    }

    return (
        <textarea value={value} onChange={({target}) => updateText(target.value)} style={style}/>
    )
}

export default TextArea;
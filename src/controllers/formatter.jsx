export default function formatter(text){
    const lines = text.split(/\n/g);

    const formattedText = lines.map((line, index) => {
        const symbol = line.slice(0,2)
        const text = line.slice(2);
        const thereIsCharacter = /\w/.test(symbol);
        
        switch(symbol){
            case '# ':
                return <h1 key={index}>{text}</h1>
            case '##':
                return <h2 key={index}> {text}</h2>
            case '- ':
                return <li key={index}>{text}</li>
            case '':
                return <br key={index}/>
            case thereIsCharacter && symbol.match(/\w+/)[0]:
                return <p key={index}>{line}</p>                
        }
    })

    return {formattedText, lines}
}
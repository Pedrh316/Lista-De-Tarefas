export default function Formatter({children}){
    
    function defineContents(text, pattern, element, symbolLength){
    
        const notElement = text.split(pattern);

        let thereIsSuccessorContent = text.indexOf(notElement[2]) || '';
        const predecessorContent = <Formatter>{notElement[0]}</Formatter>;
        const successorContent = <Formatter>{thereIsSuccessorContent && text.slice(text.indexOf(notElement[2]))}</Formatter>;
        const formattedContent = text.match(pattern)[0].slice(symbolLength, -(symbolLength+1));
        

        switch(element){
            case 'h1':
                return <>{predecessorContent}<h1><Formatter>{formattedContent}</Formatter></h1>{successorContent}</>
            case 'h2':
                return <>{predecessorContent}<h2><Formatter>{formattedContent}</Formatter></h2>{successorContent}</>
            case 'p':
                return <>{predecessorContent}<p><Formatter>{formattedContent}</Formatter></p>{successorContent}</>
            case 'li':
                return <>{predecessorContent}<li><Formatter>{formattedContent}</Formatter></li>{successorContent}</>
            case 'green':
                return <>{predecessorContent}<span style={{color:'greenyellow'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'red':
                return <>{predecessorContent}<span style={{color:'red'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'pink':
                return <>{predecessorContent}<span style={{color:'#f0f'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'blue':
                return <>{predecessorContent}<span style={{color:'#4bbcff'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'yellow':
                return <>{predecessorContent}<span style={{color:'#f7ff00'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'orange':
                return <>{predecessorContent}<span style={{color:'orange'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            default:
                return <>{children}</>
        }

    }

    switch(true){
        case /(#.+\/#){1}/.test(children):
            return defineContents(children, /(#.+\/#){1}/, 'h1', 1);
        case /@.+\/@/.test(children):
            return defineContents(children, /(@.+\/@){1}/, 'h2', 1);
        case /\*.+\/\*/.test(children):
            return defineContents(children, /(\*.+\/\*){1}/, 'p', 1);
        case /-.+\/-/.test(children):
            return defineContents(children, /(-.+\/-){1}/, 'li', 1);
        case /&vd.+\/&vd/.test(children):
            return defineContents(children, /(&vd.+\/&vd){1}/, 'green', 3);
        case /&vm.+\/&vm/.test(children):
            return defineContents(children, /(&vm.+\/&vm){1}/, 'red', 3);
        case /&ro.+\/&ro/.test(children):
            return defineContents(children, /(&ro.+\/&ro){1}/, 'pink', 3);
        case /&az.+\/&az/.test(children):
            return defineContents(children, /(&az.+\/&az){1}/, 'blue', 3);
        case /&am.+\/&am/.test(children):
            return defineContents(children, /(&am.+\/&am){1}/, 'yellow', 3);
        case /&la.+\/&la/.test(children):
            return defineContents(children, /(&la.+\/&la){1}/, 'orange', 3);
        default:
            return <>{children}</>
    }

}



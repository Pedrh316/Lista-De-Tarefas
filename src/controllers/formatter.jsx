export default function Formatter({children}){
    
    function defineContents(text, pattern, element, symbolLength){
    
        const notElement = text.split(pattern);
        const predecessorContent = <Formatter>{notElement[0]}</Formatter>;
        const successorContent = <Formatter>{notElement[1]}</Formatter>;
        const formattedContent = text.match(pattern)[0].slice(symbolLength, -(symbolLength+1));
    
        switch(element){
            case 'h1':
                return <>{predecessorContent}<h1><Formatter>{formattedContent}</Formatter></h1>{successorContent}</>
            case 'h2':
                return <>{predecessorContent}<h2><Formatter>{formattedContent}</Formatter></h2>{successorContent}</>
            case 'p':
                return <>{predecessorContent}<p><Formatter>{formattedContent}</Formatter></p>{successorContent}</>
            case 'green':
                return <>{predecessorContent}<span style={{color:'green'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'red':
                return <>{predecessorContent}<span style={{color:'red'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
            case 'purple':
                return <>{predecessorContent}<span style={{color:'purple'}}><Formatter>{formattedContent}</Formatter></span>{successorContent}</>
        }
    }

    switch(true){
        case /#.+\/#/.test(children):
            return defineContents(children, /#.+\/#/, 'h1', 1);
        case /@.+\/@/.test(children):
            return defineContents(children, /@.+\/@/, 'h2', 1);
        case /<.+\/>/.test(children):
            return defineContents(children, /<.+\/>/, 'p', 1);
        case /&vd.+\/&vd/.test(children):
            return defineContents(children, /&vd.+\/&vd/, 'green', 3);
        case /&vm.+\/&vm/.test(children):
            return defineContents(children, /&vm.+\/&vm/, 'red', 3);
        case /&ro.+\/&ro/.test(children):
            return defineContents(children, /&ro.+\/&ro/, 'purple', 3);
        default:
            return <>{children}</>
    }

}



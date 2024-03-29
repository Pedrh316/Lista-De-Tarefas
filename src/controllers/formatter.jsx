import { nanoid } from "nanoid";

export default function Formatter({children, inline}){
let userTextDivision = inline ?
    children.split(/(&vd.+?\/&vd)|(&vm.+?\/&vm)|(&am.+?\/&am)|(&ro.+?\/&ro)|(&az.+?\/&az)|(&la.+?\/&la)|(!.+?\/!)|(\|.+?\/\|)/s) :
    children.split(/(?=[@#_\*])/s)

    let formattedText = userTextDivision.map((text, i) => {

        if(!text){
            return ''
        }

        let cleanText = null;
        let symbol = text.slice(0,3);
        
        let removeSymbol = {
            unclosed(text, index){
                return text.slice(index,)
            },
            closed(text, index){
                return text.slice(index, -(index+1))
            }
        };
        

        switch(true){
            case /#.*/s.test(symbol):
                cleanText = removeSymbol.unclosed(text, 1);
                return <h1 key={nanoid()}><Formatter inline={true}>{cleanText}</Formatter></h1>
            case /@.*/s.test(symbol):
                cleanText = removeSymbol.unclosed(text, 1);
                return <h2 key={nanoid()}><Formatter inline={true}>{cleanText}</Formatter></h2>
            case /\*.*/s.test(symbol):
                cleanText = removeSymbol.unclosed(text, 1);
                return <p key={nanoid()}><Formatter inline={true}>{cleanText}</Formatter></p>
            case /_.*/s.test(symbol):
                cleanText = removeSymbol.unclosed(text, 1);
                return <li key={nanoid()} className="list-item"><Formatter inline={true}>{cleanText}</Formatter></li>
            case /!.+\/!/s.test(text):
                cleanText = removeSymbol.closed(text, 1);
                return <b key={nanoid()}><Formatter>{cleanText}</Formatter></b>
            case /\|.+\/\|/s.test(text):
                cleanText = removeSymbol.closed(text, 1);
                return <i key={nanoid()}><Formatter>{cleanText}</Formatter></i>
            case /&vd.+\/&vd/s.test(text):
                cleanText = removeSymbol.closed(text,3);
                return <span key={nanoid()} className="green-yellow"><Formatter>{cleanText}</Formatter></span>
            case /&vm.+&vm/s.test(text):
                cleanText = removeSymbol.closed(text, 3);
                return <span key={nanoid()} className="red"><Formatter>{cleanText}</Formatter></span>
            case /&am.+\/&am/s.test(text):
                cleanText = removeSymbol.closed(text, 3);
                return <span key={nanoid()} className="yellow"><Formatter>{cleanText}</Formatter></span>
            case /&ro.+\/&ro/s.test(text):
                cleanText = removeSymbol.closed(text, 3);
                return <span key={nanoid()} className="pink"><Formatter>{cleanText}</Formatter></span>
            case /&az.+\/&az/s.test(text):
                cleanText = removeSymbol.closed(text, 3);
                return <span key={nanoid()} className="blue"><Formatter>{cleanText}</Formatter></span>
            case /&la.+\/&la/s.test(text):
                cleanText = removeSymbol.closed(text, 3);
                return <span key={nanoid()} className="orange"><Formatter>{cleanText}</Formatter></span>
            default:
                return text
        }
    })

    return <>{formattedText}</>

}



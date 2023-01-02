import React from "react";
import styled from "styled-components"


const SDropper = styled.div`
    position:relative;

    .drop-btn {
        & > button{
            padding:0;
        }
        & > * {            
            pointer-events:none;
        } 
    }
`

function Dropper({button, onHideButton, children, notHideForComputer}){

    const [showDropdown, setDropdown] = React.useState(false);
    const dropdown = React.useRef();
    const dropButton = React.useRef();

    function toggleDropdown(){
        setDropdown(prevShow => !prevShow);
    }
    
    React.useEffect(() => {
        showDropdown ? dropdown.current.classList.remove('hidden') : dropdown.current.classList.add('hidden');
    }, [showDropdown])

    React.useEffect(() => {
        innerWidth > 700 && setDropdown(true);    
        document.addEventListener("click", hideOnClick)

        window.addEventListener("resize", () => {            
            innerWidth < 700 ? setDropdown(false) : notHideForComputer && setDropdown(true);
            toggleHideForComputer()
        })
        
        toggleHideForComputer();

        function toggleHideForComputer(){
            notHideForComputer && innerWidth >= 700 ?
            document.removeEventListener("click", hideOnClick) :            
            document.addEventListener("click", hideOnClick);            
        }
        
        function hideOnClick(e){
            e.target !== dropButton.current && setDropdown(false);
        }

    }, [])
    
    return (
        <SDropper>
            <div ref={dropButton} className="drop-btn" onClick={() => toggleDropdown()}>{
                showDropdown && onHideButton ? onHideButton : button
            }</div>
            <div ref={dropdown}>
                {children}
            </div>
        </SDropper>
    )
}

export default Dropper;
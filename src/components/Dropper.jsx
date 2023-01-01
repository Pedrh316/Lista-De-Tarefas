import styled from "styled-components"
import useToggle from '../hooks/useToggle';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { IconContext } from "react-icons";

const SDropper = styled.div`
    position:relative;
    float:right;

    .drop-btn{
        padding:0rem;
        cursor:pointer;

        .drop-icon{
            box-sizing:content-box;
            font-size:1.5rem;
            padding:.5rem;
            margin-left:.5rem;
            background-color:#1c1d22;
            border-radius:50%;
        }
    }
    
    .dropdown{
        position:absolute;
        left:0;
        top:0;
        transform:translateX(calc(-100% + 5px));
        display:flex;
        flex-direction:column;
        background-color:#555;

        & > * {
            font-size:1rem;
            background-color:#1c1d22;
        }
    }    

`

const Dropper = ({children}) => {

    const {status:show, toggleStatus:toggleShow} = useToggle();
    
    return (
        <SDropper>
            <button onClick={() => toggleShow()} className="drop-btn">{
                <BsThreeDotsVertical className="drop-icon"/>
            }</button>
            {
                show && <div className="dropdown">
                    {children}
                </div>
            }
        </SDropper>
    )
}

export default Dropper;
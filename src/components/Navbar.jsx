import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiOutlineBars, AiFillHome} from 'react-icons/ai';
import {BsArrowReturnRight} from 'react-icons/bs';
import Menu from './Menu';
import Dropper from './Dropper';

const SNav = styled.nav`
    background-color:#2D343D;
    padding-block:.5rem;    
    margin-bottom:3rem;
    position:relative;
    z-index:20;

    .container{
        display:flex;
        align-items:center;
        justify-content:space-between;

        .home-link{
            .home-icon{
                visibility:hidden;
                font-size:1.75rem;
            }
            pointer-events:none;
            padding:.4rem 1rem;
        }

        #menu.hidden{
            display:none;
        }
        .menu-btn{
            display:none;
        }
    }

    @media screen and (max-width:700px){
        .container{            
            .menu-btn{
                display:block;
                padding:0;
                cursor:pointer;
                .menu-icon{
                    padding:.7rem 1rem;
                    font-size:1.75rem;
                    cursor:pointer;
                    pointer-events:none;
                    box-sizing:content-box;
                }                
            }
            .home-link{
                pointer-events:auto;
                padding:.4rem 1rem;
                .home-icon{
                    visibility:visible;
                    font-size:1.75rem;
                }
            }
        }
    }

`

const Navbar = () => {

    return (
        <SNav>            
            <div className="container">   
            <Link to="/" className="home-link">
                <AiFillHome className="home-icon"/>
            </Link>
                <Dropper
                    notHideForComputer={true}
                    button={ <button className='menu-btn'> <AiOutlineBars className="menu-icon"/> </button> }
                    onHideButton={ <button className="menu-btn"><BsArrowReturnRight className="menu-icon"/></button> }
                >
                    <Menu/>
                </Dropper>
            </div>
        </SNav>
    )
}


export default Navbar
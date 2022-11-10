import styled from 'styled-components/macro'
import { rad } from '../../../globalStyles'

export const ItemWrapper = styled.div`
    width: 100%;
    height: 100%;  
    border-radius: ${rad};
    overflow: hidden;
    transition: all .2s ease-in-out;
    position: relative;
    outline-offset: -1px;
`

export const Window = styled.img`
    width: 98%;
    right: -14%;
    bottom: 0;
    position: absolute;
    display: block;
    object-fit: contain;  
    transition: all 0.3s;

    ${ItemWrapper}:hover & {
        transform: translateY(18%);
    }   

    @media screen and (max-width: 991px) {
        transform: translateY(18%);
    }
`

export const LogoWrapper = styled.div`
    width: 100%;
    position: absolute;
    display: block;
    transition: all 0.3s;

    ${ItemWrapper}:hover & {
        transform: translateY(58%);
    }   

    @media screen and (max-width: 991px) {
        transform: translateY(58%);
    }
`

export const Logo = styled.img`
    width: 8.8%;
    margin-left: 16%;
    display: block;
    object-fit: contain;  
    position: absolute;
    transition: all 0.2s;
    opacity: 0;

    ${ItemWrapper}:hover & {
        opacity: 1;
    }  
    
    @media screen and (max-width: 991px) {
        opacity: 1;
    }
`

export const LogoType = styled.h2`
    font-size: 3rem;    
    letter-spacing: -0.025em;
    font-weight: 700;
    color: #e0e0e0;
    margin-left: 30%;
    margin-top: 0.33%;
    transition: all 0.2s;
    opacity: 0;

    ${ItemWrapper}:hover & {
        opacity: 1; 
    }   

    @media screen and (max-width: 1500px) {
        font-size: 2.2rem; 
    }
    
    @media screen and (max-width: 991px) {
        opacity: 1;
        font-size: 1.3rem;    
    }
`

export const SmallText = styled.p` 
    font-size: 1em;
    font-weight: 500;
    color: #e0e0e0;
    z-index: 3;
    bottom: 2%;
    margin-left: 5.5%;
    position: absolute;
    opacity: 0;
    transition: all 0.2s ease-in-out;

    ${ItemWrapper}:hover & {
        opacity: 1;
        transform: translateY(-10px);
    }
    
    @media screen and (max-width: 991px) {
        opacity: 1;
        transform: translateY(-10px);
        margin-left: 8%;
        font-size: 0.8em;
    }
`

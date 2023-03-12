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

export const LogoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    transition: all 0.3s;
`

export const LogoType = styled.img`
    width: 72%;
    display: block;
    bottom: 13%;
    left: 5%;
    object-fit: contain;  
    position: absolute;
    transition: all 0.2s;
    transform: rotate(-4deg);
    transform-origin: right;
    opacity: 0;
    z-index: 3;
    
    @media screen and (max-width: 991px) {
        opacity: 1;
        bottom: 20%;
        width: 76%;
    }

    @media screen and (max-width: 700px) {
        bottom: 25%;
    }

    ${ItemWrapper}:hover & {
        opacity: 1;
        bottom: 17%;
        
        @media screen and (max-width: 1500px) {
            bottom: 19%;
        }

        @media screen and (max-width: 991px) {
            opacity: 1;
            bottom: 25%;
        }
    }   
`

export const IslandBackground = styled.img`
    width: 120%;
    height: 120%;
    margin-left: -16%;
    margin-top: -28%;
    display: block;
    object-fit: cover;  
    transition: all 0.2s;
    opacity: 1;

    ${ItemWrapper}:hover & {
        margin-top: -47%;

        @media screen and (max-width: 991px) {
            opacity: 1;
            margin-top: -28%;
        }
    }   
    
    @media screen and (max-width: 991px) {
        opacity: 1;
    }
`

export const SmallText = styled.p` 
    font-size: 1em;
    font-weight: 500;
    color: #0045e6;
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
        font-size: 0.8em;
        margin-left: 8%;
    }
`
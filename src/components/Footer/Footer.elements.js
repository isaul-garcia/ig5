import styled from 'styled-components/macro';
import { rad } from '../../globalStyles';

export const FooterContainer = styled.div`
    margin-top: 10vh;
`

export const EmailContainer = styled.div`
    display: inline-block; 
    transition: all .2s ease-in-out;
    cursor: text;
    user-select: all;
    padding: 20px 25px;
    background-color: #d0d0d0;  
    border-radius: ${rad};

    @media screen and (max-width: 1500px) {
        /* width: 32%; */
    }

    @media screen and (max-width: 991px) {
        width: 56%;
        padding: 17px 21px;
    }
`

export const EmailText = styled.span`
    font-size: 1.35em;
    font-weight: 500; 
    letter-spacing: 0;
    line-height: 1.25em; 
    transition: all .1s ease-in-out;
    color: #666;
    text-decoration: none;  

    @media screen and (max-width: 1300px) {
    font-size: 0.9em;
    }

    @media screen and (max-width: 991px) {
        font-size: 0.95em;
        line-height: 2.15em; 
        font-weight: 500;
    }
`

export const IconWrapper = styled.a`
    border-radius: ${rad};
    padding: 20px;        
    background-color: #d0d0d0;
    outline-offset: -1px;
    transition: all 0.1s ease-in-out;
    float: right;
    margin-left: 1vh;

    @media screen and (max-width: 1300px) {
        padding: 16px;
    }

    &:hover{        
        background-color: #ccc;
    }
`

export const NameContainer = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
    display: block;
`

export const LargeText = styled.h1`
    font-size: 7.49vw;
    line-height: 0.73em;
    margin-left: -0.5vw;
    margin-right: -0.2vw;
    font-weight: 900;
    letter-spacing: -0.3vw;
    user-select: none;
    pointer-events: none;
    transition: all .2s ease-in-out;   
    
    @media screen and (max-width: 1500px) {
        font-size: 8.15vw;
    }
    
    @media screen and (max-width: 991px) {
        margin-left: -4vw;
        margin-right: -3.5vw;
        font-size: 17.05vw;
        margin-bottom: 15px;
    }
`

export const AliasWrapper = styled.div`
    width: 100%;
    height: 19vh;
    margin-top: 7vh;
    transition: all 0.2s ease-in-out;
    user-select: none;
    pointer-events: none;
`

export const AliasesIcons = styled.img`
    height: 30px;
    max-height: 65px;
    max-width: 290px;
    margin-right: 0;
    user-select: none;
    pointer-events: none;

    @media screen and (max-width: 991px) {
        margin-top: 0px;
        max-height: 23px;
        max-width: 100%;
    }    
`

export const DitSpacer = styled.div` 
    margin-top: 40px;
`
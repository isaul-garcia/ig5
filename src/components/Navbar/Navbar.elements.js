import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ReactComponent as IGL } from "../../assets/ig-gray.svg";

export const rad = '0.7rem'

export const Navigation = styled.div`
    position: sticky;
    top: 12px;
    z-index: 206;
    transition: all .1s ease-in-out;
    pointer-events: none;
`

export const NavContainer = styled.div`
    position: absolute;
    height: 60px;
    width: calc(100% - 24px);
    padding: 12px;
    margin: 0px 12px;
    transition: all .1s ease-in-out;

    @media screen and (max-width: 1500px) {
        height: 53px;
    }
    
    @media screen and (max-width: 991px) {
        width: calc(100% - 4vw);
        height: ${({ view }) => (view ? ' 100vh' : ' 6.9vh')};
        overflow: hidden;
        padding: 2vw;
        margin: 0 1.5vw;
        outline: ${({ view }) => (view ? '15px solid #111' : '15px solid #ff00ff00')};
        background-color: ${({ view }) => (view ? ' #111' : ' #ff00ff00')};
        transition: all .2s ease-in-out;
    }
`

export const NavWrapper = styled.div`
    float: ${({ toRight }) => (toRight ? 'right' : '')};
    pointer-events: all;

    @media screen and (max-width: 991px) {
        width: 100%;
        display: block;
    }
`

export const NavLink = styled(Link)`
    font-size: 1.175em;
    font-weight: 500;
    text-decoration: none;
    color: ${({ active }) => (active ? '#222222' : '#c5c5c5')};
    border-radius: ${rad};
    background-color: ${({ active }) => (active ? '#00ea75' : '#222222')};
    padding: 7px 12px;
    transition: all .2s ease-in-out;
    cursor: pointer;    
    outline: 1px solid #22222200;
    vertical-align: top;
    display: inline-block;
    margin-right: ${({ last }) => (last ? '0px' : '10px')};
    pointer-events: all;

    &:hover{
        color: #222222;
        background-color: #00ea75;
    }

    @media screen and (max-width: 1500px) {
        font-size: 0.9em;
        padding: 7px 11px;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        font-size: 2em;
        margin: 1vw 0.25vw;
        padding: 12px 18px;

        &:hover{
            color: #bcbcbc;
            background-color: #222;
        }
    }
`

export const NavButton = styled(Link)`
    border-radius: ${rad};
    background-color: #222;
    padding: 6px 9px;
    transition: all .2s ease-in-out;
    cursor: pointer;    
    vertical-align: top;
    margin-right: 1vw;
    pointer-events: all;
    right: 0;
    position: absolute;
`

export const IconWrapper = styled(Link)`
    height: 100%;
    transition: all .2s ease-in-out;
    text-decoration: none;
    position: relative;
    margin-right: 10px;
    background-color: #222222;
    padding: 9px;
    border-radius: ${rad};
    position: relative;
    display: inline-block;
    vertical-align: top;
    pointer-events: all;

    &:hover{
        background-color: #44ccee;
    }

    @media screen and (max-width: 1500px) {
        padding: 0.48em;
        height: 31px;
    }

    @media screen and (max-width: 991px) {
        height: 38px;
        margin-right: 0px;
        
        &:hover{
            background-color: #222222;
        }
    }
`

export const IGIcon = styled(IGL)`
    height: 100%;
    width: 100%;
    position: relative;
    display: inline-block;    
    fill: #bcbcbc;
    transition: all .2s ease-in-out;

    ${IconWrapper}:hover &  {
        fill: #222;
    }

    @media screen and (max-width: 991px) {
        width: 56px; 

        ${IconWrapper}:hover &  {
            fill: #bcbcbc;
        }
    }
`

export const BackWrapper = styled(Link)`
    padding: 5px 6px;
    margin-right: 10px;
    border-radius: ${rad};
    cursor: pointer;
    transition: all .2s ease-in-out;
    box-shadow: 0px 0px 5px #bcbcbc00;
    outline: 1px solid #f0f0f000;
    outline-offset: -1px;
    pointer-events: auto;    
    background-color: #222;
    position: relative;
    display: inline-block;
    vertical-align: top;
    pointer-events: all;

    &:hover {
        background-color: #f101af;
        color: #111;        
        outline: 1px dotted #222222;
    }
`

export const BackIconWrapper = styled(Link)`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: left;
    float: left;
    transition: all .1s ease-in-out;

    &:hover{
        opacity: 0.75;
    }
`

export const BackIcon = styled.img`
    vertical-align: top;
    pointer-events: all;
    margin-top: 0px;
    max-height: 19px;
    max-width: 100px;
    
    @media screen and (max-width: 991px) {
        margin-top: 0px;
        max-height: 23px;
        max-width: 100%;
    }
`

export const MagicButton = styled.span`
    border: 1px #44ccee dotted;
    transition: all .2s ease-in-out;
    cursor: default;    
    vertical-align: top;
    display: inline-block;
    pointer-events: all;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const MiniText = styled.span`
    font-size: 0.75em;
    font-weight: 500;
    text-decoration: none;
    color: #ddd;
    padding: 0.8em 1em;
    transition: all .2s ease-in-out;
    cursor: default;    
    display: inline-block;

    @media screen and (max-width: 1500px) {
        font-size: 0.65em;
    }
`
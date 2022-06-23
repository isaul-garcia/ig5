import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

//TOP BAR
//TOP BAR
//TOP BAR

export const TextContainer = styled.div`
    transition: all .5s ease-in-out;
    text-align: left;
    vertical-align: top;
    width: 25%;
    position: sticky;
    display: inline-block;
    top: 4vh;
    z-index: 999;
    pointer-events: none;
    mix-blend-mode: difference;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none;

    @media screen and (max-width: 991px) {
        position: fixed;
        width: 50%;
        top: 4vw; 
        mix-blend-mode: difference;

        ${({ removeBack }) => (removeBack ? '' : 'margin-left: 60px;')}
    }
`

export const TextWrapper = styled.div`
    text-decoration: none;
    width: 100%;
    display: inline-block;
    pointer-events: all;
    background-color: ${({ backColor }) => (backColor)};
    color: ${({ textColor }) => (textColor)};
`

export const HeadText = styled.span`
    transition: all .1s ease-in-out;
    position: absolute;
    letter-spacing: -1px;
    font-size: 1.5em;
    font-weight: 700;
    margin-top: -0.85em;
    cursor: pointer;
    text-decoration: none;
    color: #dbdbdb;

    &:hover {
        color: #7e7e7e;
    }

    @media screen and (max-width: 991px) {
        font-size: 28px;
        line-height: 36px;
        margin-left: -1px;
        top: 9vw; 
    }
`

//IG ICON
//IG ICON
//IG ICON

export const IconContainer = styled.div`
    width: 7%;
    top: 4vh;
    cursor: pointer;
    position: sticky;
    display: block;
    text-decoration: none;
    pointer-events: none;
    transition: all .1s ease-in-out;
    z-index: 20;
    mix-blend-mode: difference;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none;

    ${({ toLeft }) => (toLeft ? '' : `float: right; right: 0;`)}

    @media screen and (max-width: 991px) {
        position: fixed;
        max-height: 23px;
        width: 60px;
        top: 9vw; 
        margin-right: 5vw;
    }
`

export const IconWrapper = styled(Link)`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: right;
    float: right;
    transition: all .1s ease-in-out;
    text-decoration: none;

    &:hover{
        opacity: 0.75;
    }
`

export const IgIcon = styled.img`
    vertical-align: top;
    margin-top: -1px;
    max-height: 20px;
    max-width: 100px;
    pointer-events: all;

    @media screen and (max-width: 991px) {
        margin-top: 0px;
        max-height: 23px;
        max-width: 100%;
    }
`


//breadcrumb
//breadcrumb
//breadcrumb
//breadcrumb


export const NavContainer = styled.div`
    top: 4vh;
    margin-left: 1em;
    cursor: pointer;
    position: sticky;
    text-decoration: none;
    transition: all .1s ease-in-out;
    z-index: 20;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none;
    float: right;

    ${({ removeBack }) => (removeBack ? 'display: none;' : '')}

    @media screen and (max-width: 991px) {
        position: fixed;
        max-height: 23px;
        right: 0;
        width: 60px;
        top: 3.4vw; 
        margin-right: 5em;
        top: 9vw; 
    }
`

export const NavWrapper = styled(Link)`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: right;
    margin-top: 0.1em;
    float: right;
    transition: all .1s ease-in-out;
    text-decoration: none;
`

export const TinyTextBox = styled.span`
    vertical-align: top;
    font-size: 0.7em;
    font-weight: 500;
    max-height: 23px;
    width: 100%;
    pointer-events: all;
    text-decoration: none;
    color: #222;
    background-color: #92ff24;
    padding: 3px 5px;
    border-radius: 4px;
    text-decoration: none;
    letter-spacing: 0px;
    transition-delay: 1s;
    transition-duration: 0.2s;
    z-index: 3;

    &:hover{
        opacity: 0.75;
    }

    @media screen and (max-width: 991px) {
        font-size: 1em;
        padding: 2px 4px;
        margin-top: 0px;
        border-radius: 6px;
        max-height: 23px;
        max-width: 100%;
        opacity: ${({ scrolled }) => (scrolled ? '1' : '0')};
    }
`

//BACK ICON
//BACK ICON
//BACK ICON

export const BackIconContainer = styled.div`
    width: 50px;
    top: 4vh;
    cursor: pointer;
    position: sticky;
    display: inline-block;
    text-decoration: none;
    transition: all .1s ease-in-out;
    z-index: 20;
    mix-blend-mode: difference;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none;

    ${({ removeBack }) => (removeBack ? 'display: none;' : '')}

    @media screen and (max-width: 991px) {
        position: fixed;
        max-height: 23px;
        width: 46px;
        top: 3.5vw; 
        top: 9vw; 
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


//FOOTER
//FOOTER
//FOOTER

export const Footer = styled.div`
    top: 0;
    float: right;
    width: 50vw;
    margin-right: 25vw;
    transition: all .5s ease-in-out;
    position: relative;    
    margin-bottom: 4vh;
    background-color: #bcbcbc;
    border-bottom: 1px solid #222;    
    z-index: 1;
    
    //Smaller DESKTOP displays
    @media screen and (max-width: 1780px) {
        width: 62vw;
        margin-right: 19vw;
    }

    //Mobile
    @media screen and (max-width: 991px) {
        width: 100vw;
        margin-right: 0px;
        padding-top: 0vw;
        padding: 5vw;
        margin-bottom: 10vw;
        margin-top: 0;
        border-bottom: 1px solid #222;
        position: relative;
        margin-top: 0vw;
        border-radius: 0px 0px 10px 10px;
    }
`

export const FooterTextContainer = styled.div`
    width: 24%;
    transition: all .5s ease-in-out;
    z-index: 2;  
    text-align: left;
    display: inline-block; 
    vertical-align: top;
    height: 29px;
    margin-top: 22vh;
    margin-bottom: 2.2vh;
    margin-right: 2em;
    vertical-align: bottom;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 1300px) {
        width: 28%;
    }

    @media screen and (max-width: 991px) {
        width: 50%;
    }
`

export const EmailTextContainer = styled(FooterTextContainer)`
    cursor: text;
    user-select: all;

    &:hover{
        opacity: 0.9;
    }
`

//text elements
//text elements
//text elements
//text elements


export const FooterText = styled.span`
    font-size: 1em;
    font-weight: 500; 
    letter-spacing: 0;
    line-height: 1.25em; 
    transition: all .1s ease-in-out;
    color: ${({ darken }) => (darken ? '#666' : '#333')};
    pointer-events: ${({ darken }) => (darken ? 'none' : '')};
    text-decoration: none;

    &:hover{
        opacity: 0.7;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.1em;
        font-weight: 500;
    }
`

//aliases
//aliases
//aliases

export const AliasesContainer = styled(IconContainer)`
    width: 26em;
    position: relative;
    margin-right: 0vw;
    margin-top: 22.25vh;
    margin-bottom: 4vh;
    vertical-align: bottom;
    top: 0;
    pointer-events: none;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const AliasWrapper = styled.div`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: right;
    float: right;
    transition: all .1s ease-in-out;
    text-decoration: none;

    &:hover{
        opacity: 0.75;
    }
`

export const AliasesIcons = styled(IgIcon)`
    vertical-align: bottom;
    max-height: 21px;
    max-width: 1300px;
    pointer-events: none;
`

//social buttons
//social buttons

export const SocialIconContainer = styled.div`
    width: 21px;
    margin-top: 22vh;
    margin-right: 2vh;
    display: inline-block;
    vertical-align: top;

    @media screen and (max-width: 991px) {
        width: 30px;
        margin-top: 20.25vh;
        float: right;
        margin-right: 0vh;
        margin-left: 0.75vh;
    }
`

export const SocialIconWrapper = styled.a`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: left;
    float: left;
    transition: all .1s ease-in-out;
    text-decoration: none;

    &:hover{
        opacity: 0.75;
    }
`

export const SocialIcon = styled.img`
    vertical-align: top;
    max-height: 21px;
    max-width: 100px;
    pointer-events: all;

    @media screen and (max-width: 991px) {
        max-height: 40px;
    }
`
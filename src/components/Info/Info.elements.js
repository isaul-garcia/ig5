import styled from 'styled-components/macro'

export const Boxed = styled.div`
    width: 30%;
    height: 220px;
    transition: all .5s ease-in-out;
    z-index: 2;  
    text-align: left;
    display: inline-block; 
    vertical-align: top;

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        padding-left: 5px;
        height: 90px;
    }
`

export const Name = styled(Boxed)`
    width: 25%;
    position: sticky;
    display: block;
    top: 3.75vh;
    mix-blend-mode: difference;
    z-index: 999;

    @media screen and (max-width: 991px) {
        position: fixed;
        width: 50%;
        top: 0.75em; 
    }
`

export const Description = styled(Boxed)`
    padding-right: 90px;
    margin-left: 25%;
    margin-top: -220px;

    @media screen and (max-width: 1500px) {
        padding-right: 50px;
    margin-left: 25%;
    }

    @media screen and (max-width: 991px){
        padding-right: 1.1em;
        margin-left: 0; 
        margin-top: 10.25em;
    }
`

export const SelfTags = styled(Boxed)`
    padding-right: 90px;    
    margin-top: -220px;

    @media screen and (max-width: 1500px) {
        padding-right: 50px;
    }

    @media screen and (max-width: 991px){
        padding-right: 1.1em;
        margin-left: 0; 
        margin-top: 3em;
        padding-top: 1.7em;
        border-top: ${({scrolledDown}) => (scrolledDown ? '1px solid #000' : '1px solid #333')};
    }
`

export const FooterTextContainer = styled(Boxed)`
    width: 5em;
    height: 29px;
    margin-top: 22vh;
    margin-bottom: 4.2vh;
    margin-right: 2em;
    vertical-align: bottom;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:nth-child(1) {
        width: 19em;
    }

    &:hover{
        border-left: 1px solid #d8d8d8;
        padding-left: 0.5em;
    }

    @media screen and (max-width: 1500px) {
        width: 6%;
        
        &:nth-child(1) {
            width: 16em;
        }
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        text-align: left;
        margin-top: 22px;
        margin-bottom: 0;
        border-left: 1px solid #bbb;
        padding-left: 10px;
        margin-right: 0;
        border-left: none;

        &:hover{
            border-left: 1px solid #bbb;
            padding-left: 20px;
        }
    }
`

export const EmailText = styled(FooterTextContainer)`
    cursor: default;

    &:hover{
        border-left: 0px solid #000;
        padding-left: 0;
    }

    @media screen and (max-width: 991px) {
        &:hover{
        padding-left: 10px;
    }
    }
`

export const TextWrapper = styled.span`
    text-decoration: none;
    color: #000;
    width: 100%;
    display: inline-block;
    pointer-events: all;
    padding: 0 4em 0 0.5vh;
    background-color: ${({backColor}) => (backColor)};
    color: ${({textColor}) => (textColor)};

    @media screen and (max-width: 991px) {
        padding: 0 0 0 0;
    }
`

//text elements
//text elements
//text elements
//text elements

export const HeadText = styled.h1`
    transition: all .2s ease-in-out;
    position: absolute;
    letter-spacing: -1px;
    color: #d8d8d8;
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0.75em;
    margin-top: -0.42em;
    margin-left: -0.1em;
    opacity: ${({scrolledDown}) => (scrolledDown ? '0' : '1')};

    @media screen and (max-width: 991px) {
        margin-top: -0.1em;
        font-size: 3.1em;        
        line-height: 0.9em;
        margin-left: 0.25em;
        position: absolute;
    }
`

export const HeadTextDecrease = styled.h1`
    transition: all .2s ease-in-out;
    position: absolute;
    letter-spacing: -1px;
    color: #d8d8d8;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1em;    
    margin-top: -0.65em;
    opacity: ${({scrolledDown}) => (scrolledDown ? '1' : '0')};

    @media screen and (max-width: 991px) {
        font-size: 1.9em;
        margin-left: 0.4em;        
        line-height: 2.05em;  
    }
`

export const SubText = styled.h4`
    font-size: 1.4em;  
    color: #d8d8d8;
    font-weight: 400; 
    letter-spacing: 0;
    line-height: 1.25em; 
    transition: all .2s ease-in-out;

    @media screen and (max-width: 1500px) {
        font-size: 1.1em;
        padding: 0.1em;
        margin-left: 0.8em;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.1em;
        padding: 0em;
        margin-left: 0.8em;
        color: ${({scrolledDown}) => (scrolledDown ? '#000' : '')};
    }
`

export const EndText = styled.a`
    font-size: 1.4em;
    color: #d8d8d8;
    font-weight: 400; 
    letter-spacing: 0;
    line-height: 1.25em; 
    transition: all .2s ease-in-out;
    color: ${({darken}) => (darken ? '#888' : '')};
    pointer-events: ${({darken}) => (darken ? 'none' : '')};
    text-decoration: none;

    @media screen and (max-width: 1500px) {
        font-size: 1.1em;
        padding: 0.1em;
        margin-left: 0;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.1em;
        font-weight: 500;
        padding: 0em;
        margin-left: 0.8em;
        color: ${({darken}) => (darken ? '#555' : '#bfbfbf')};
    }
`

//ig icon
//ig icon
//ig icon

export const HeaderContainer = styled.div`
    transition: all .2s ease-in-out;

    @media screen and (max-width: 991px) {
        height: 25em;
        background-color: ${({scrolledDown}) => (scrolledDown ? '#000' : '#111')};
        border-radius: 0.5em;
        margin: 0.2em;
        margin-bottom: -25em;
    }
`

export const Footer = styled(HeaderContainer)`
    @media screen and (max-width: 991px) {
        margin-top: 13em;
        height: 7.5em;
        margin-bottom: 0;
    }
`

export const IconContainer = styled.span`
    width: 4.5em;
    margin-right: 0.6vh;
    top: 4vh;
    cursor: pointer;
    position: sticky;
    display: block;
    text-decoration: none;
    pointer-events: none;
    transition: all .1s ease-in-out;
    float: right;
    right: 0;
    z-index: 20;
    mix-blend-mode: difference;

    @media screen and (max-width: 991px) {
        text-align: right;
        position: fixed;
        top: 26px;       
        width: 3.45em;
        margin-right: 25px;
    }
`

export const IconWrapper = styled.div`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: right;
`

export const IgIcon = styled.img`
    vertical-align: top;
    max-height: 18px;
    max-width: 100px;
    mix-blend-mode: difference;
    pointer-events: all;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const IgIconMobile = styled(IgIcon)`
    display: none;
    max-height: 26px;
    text-align: right;

    @media screen and (max-width: 991px) {
        display: block;
    }
`

//aliases
//aliases
//aliases

export const AliasesContainer = styled(IconContainer)`
    width: 9em;
    position: relative;
    margin-right: 0vh;
    margin-top: 22.25vh;
    margin-bottom: 4vh;
    vertical-align: bottom;
    top: 0;
    pointer-events: none;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const AliasesIcons = styled(IgIcon)`
    vertical-align: bottom;
    max-height: 34px;
    max-width: 1300px;
    pointer-events: none;
`

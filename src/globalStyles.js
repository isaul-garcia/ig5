import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif; 

        &::-moz-selection { background: #222; color: #bcbcbc;}
        &::selection { background: #222; color: #bcbcbc; }
    }    

    body {
        background-color: #c5c5c5;
        color: #222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Inter', sans-serif;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        -webkit-overflow-scrolling: auto;
        border-radius: 10px;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;    
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 20px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;   
    }

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        font-size: 2.5em;
        line-height: 0.75em;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 4.5em;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        font-size: 3.5em;
        line-height: 0.75em;
    }

    h4 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.35em;
        cursor: default;
    }

    h5 {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 0.9em;
    }    

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        font-size: 1.25em;
        line-height: 1.25em;
    }

    @keyframes cyclingColor {
        0% {
            background-color: #1e31e3;
        }
        50% {
            background-color: #ff00ff;
        }
        100% {
            background-color: #ff9606;
        }
    }

    @keyframes cyclingBorder {
        0% {
            border: 1px #1e31e3 dotted;
        }
        50% {
            border: 1px #ff00ff dotted;
        }
        100% {
            border: 1px #f28b00 dotted;
        }
    }

    @keyframes pulse {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

export const rad = '1.2rem' //border radius

// SPACERS
export const SmallSpacer = styled.div`
    height: 6px;
    cursor: default;

    @media screen and (max-width: 991px) {
        height: 8px;
    }
`

export const MediumSpacer = styled.div`
    height: 30px;
    cursor: default; 

    @media screen and (max-width: 991px) {
        height: 20px;
    }
`

export const LargeSpacer = styled.div`
    height: 80px;
    cursor: default;

    @media screen and (max-width: 1500px) {
        height: 52px;
    }   

    @media screen and (max-width: 991px) {
        height: 80px;
        height: ${({ disableMobi }) => (disableMobi ? '0px' : '50px')};
    }
`

export const MobileSpacer = styled.div`
    display: none;
    @media screen and (max-width: 991px) {
        height: 30px;
        display: block;
    }
`

//CONTAINERS
export const OverallContainer = styled.div`
    width: 40vw;
    margin-left: 30vw;
    transition: all .2s ease-in-out;
    padding-top: 10vh;

    @media screen and (max-width: 1500px) {
        width: 44vw;
        margin-left: 28vw;
    }

    @media screen and (max-width: 991px) {
        width: 95vw;
        margin-left: 2.25vw;
        padding-top: 8.5vh;
        overflow-x: hidden;
    }
`

//TEXT
//Text wrappers and containers
export const TextContainer = styled.div`
    width: 100%;
    transition: all .5s ease-in-out;
    text-align: left;
    display: inline-block; 
    vertical-align: top;
    
    @media screen and (max-width: 991px) {
        width: 100%;
        margin-left: 3px;
    }
`

export const TextWrapper = styled.div`
    text-decoration: none;
    color: #000;
    width: 100%;
    display: inline-block;
    pointer-events: all;
    padding: 0 0 0 -1px;
    background-color: ${({ backColor }) => (backColor)};
    
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

//Actual text components
export const SubText = styled.h4`
    font-size: 1.4em;
    font-weight: 500;
    line-height: 1.5em;
    transition: all .2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: #222;
    color: ${({ customColor }) => (customColor)};
`

export const SubTitle = styled.h4` 
    color: #666;
    
    @media screen and (max-width: 991px) {
        font-size: 1em;
    }
`

export const MainText = styled(SubText)`
    font-size: 1.35em;  
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    
    @media screen and (max-width: 991px) {
        font-size: 1.2em;
    }
`
//NEW BUBBLE
//Used to highlight new blog posts
export const NewBubble = styled.span`
    font-size: 8px;
    line-height: 13px;
    font-weight: 600;
    color: #222;
    vertical-align: top;
    padding: 1px 3px;
    margin-left: 0.35vh;
    max-width: 50px;
    max-height: 22px;
    border-radius: 4px;
    animation-name: cyclingColor;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    text-decoration: none;
    display: ${({ isNew }) => (isNew ? '' : 'none')};
    letter-spacing: 0px;
    
    @media screen and (max-width: 1500px) {
        font-size: 6px;
    }
`

//BUBBLE TAG
//Used to provide a tag for particular project like "Mocks"
export const TagBubble = styled.span`
    font-size: 8px;
    line-height: 13px;
    font-weight: 600;
    color: #bcbcbc;
    vertical-align: top;
    padding: 1px 3px;
    margin-left: 0.35vh;
    max-width: 50px;
    max-height: 22px;
    border-radius: 4px;
    background-color: #2f2f2f;
    text-decoration: none;
    display: ${({ hasTag }) => (hasTag ? '' : 'none')};
    letter-spacing: 0px;
    
    @media screen and (max-width: 1500px) {
        font-size: 6px;
    }
`

//BLOG TAG
//Used to provide a tag for particular project like "Mocks"
export const BlogBubble = styled.span`
    font-size: 8px;
    line-height: 13px;
    font-weight: 600;
    color: #2f2f2f;
    vertical-align: top;
    padding: 1px 3px;
    margin-left: 0.35vh;
    max-width: 50px;
    max-height: 22px;
    border-radius: 4px;
    background-color: #2f2f2f00;
    outline: 1px solid #2f2f2f;
    text-decoration: none;
    display: ${({ hasTag }) => (hasTag ? '' : 'none')};
    letter-spacing: 0px;
    
    @media screen and (max-width: 1500px) {
        font-size: 6px;
    }
`

//PARAGRAPH LINK
//Used to put in a link within the paragraphs of articles
//[[ Doesn't work on blog posts yet !!! ]]
export const ParagLink = styled.a`
    font-size: 1em;  
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    text-decoration: none;
    color: #222;
    color: #045cff;

    &:hover{
        color: #0035bf;
    }
`

//BACKDROP
//Backdrop to ensure the blend effect of the "Info" component with the name and the logo
export const Backdrop = styled.div` 
    position: absolute;
    height: 99%;
    width: 100%;
    background-color: #bcbcbc;
    transition: 0.5s;
    z-index: -2;
    margin-top: ${({ scrolled }) => (scrolled ? '-4vh' : '6vh')};

    @media screen and (max-width: 991px) {
        width: 90%;
        margin-top: ${({ scrolled }) => (scrolled ? '3vh' : '3vh')};
    }
`

//DIT THINGY FOR HOME
//T shaped line for corners
const col = '#555555'
export const Ditail = styled.div`
    width: 100%;
    bottom: 70px;
    position: absolute;
`

export const Dit = styled.span`
    height: 40px;
    height: ${({ single }) => (single ? '30px' : '')};
    width: 20px;
    margin-top: ${({ single }) => (single ? '16px' : '6px')};
    object-fit: contain;
    display: inline-block;
    float: ${({ toRight }) => (toRight ? 'right' : '')};

    ${({ toRight }) => (toRight ? `
    border-right: 1px solid ${col};` : `
    border-left: 1px solid ${col};`)};

    @media screen and (max-width: 991px) {
        margin-top: -6px;
    }
`

export const Dity = styled.span`
    height: 20px;
    width: 20px;
    object-fit: contain;
    display: block;
    float: ${({ toRight }) => (toRight ? 'right' : '')};
    border-bottom: 1px solid ${col};
`

export const Separator = styled.div`
    width: ${({ tiled }) => (tiled ? `calc(100% + 16px)` : '100%')};
    display: inline-block;
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
    margin: ${({ tiled }) => (tiled ? '-8px' : '0')};
`

export const MediumText = styled.h1`
    font-size: 2.75em;
    line-height: 1.2em;
    font-weight: 700;    
    letter-spacing: -0.04em;
    
    @media screen and (max-width: 1500px) {
        font-size: 2.4em;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.75em;
    }
`

export const SmallText = styled.h4`
    font-size: 1.25em;
    line-height: 1.2em;
    font-weight: 300;    
    letter-spacing: -0.04em;
    
    @media screen and (max-width: 1500px) {
        font-size: 1.1em;
    }

    @media screen and (max-width: 991px) {
        font-size: 1em;
    }
`

export const SectionText = styled.div`
    width: 100%;
`

export const BigMessage = styled.div`
    display: inline-block; 
    transition: all .2s ease-in-out;
    padding: 20px 120px 20px 26px;
    border: 1px dotted #333;  
    border-right: none;

    @media screen and (max-width: 991px) {
        font-size: 0.9em;
        font-weight: 500;
        padding: 3.2vw 40vw 3.2vw 3.25vw;
        width: 85vw;
    }
`

export const BigMessageText = styled.span`
    font-size: 1.25em;
    line-height: 1.25em;
    font-weight: 300;    
    letter-spacing: -0.04em;
    transition: all .1s ease-in-out;
    color: #333;
    text-decoration: none;  

    @media screen and (max-width: 991px) {
        font-size: 0.9em;
        font-weight: 500;
    }
`

export const LinkContainer = styled.div`
    display: inline-block; 
    transition: all .2s ease-in-out;
    padding: 20px 20px 20px 26px;
    background-color: #d0d0d0;  
    border-radius: ${rad};
    position: absolute;
    right: calc(30vw - 8px);
    cursor: pointer;
    
    &:hover {
        background-color:  #cacaca;
    }

    @media screen and (max-width: 1300px) {
        right: calc(27.5vw - 8px);
    }
    
    @media screen and (max-width: 991px) {
        right: 2.5vw;
    }
`

export const LinkText = styled.span`
    font-size: 1.35em;
    font-weight: 500; 
    letter-spacing: 0;
    line-height: 1.25em; 
    transition: all .1s ease-in-out;
    color: #333;
    text-decoration: none;  

    @media screen and (max-width: 991px) {
        font-size: 1.1em;
        font-weight: 500;
    }
`

export default GlobalStyle
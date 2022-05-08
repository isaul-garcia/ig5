import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif; 

        &::-moz-selection { background: #f15a38; color: #bcbcbc;}
        &::selection { background: #f15a38; color: #bcbcbc; }
    }    

    body {
        background-color: #bcbcbc;
        color: #222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Inter', sans-serif;
        height: 100%;
        width: 100%;
        -webkit-overflow-scrolling: auto;

        &::-webkit-scrollbar {
        display: none;
        }
    }

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        font-size: 2.5em;
        line-height: 0.75em;
    }

    h2 {
        font-family: 'Baskervville', sans-serif;
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
        letter-spacing: -1px;
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

    .path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 5s linear infinite;
    }

    @keyframes cyclingColor {
        0% {
            background-color: #1e31e3;
        }
        50% {
            background-color: #ff00ff;
        }
        100% {
            background-color: #e0ae01;
        }
    }

    @media screen and (max-width: 991px) {
    }

    @keyframes dash {
        from {
            stroke-dashoffset: 2000;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

// SPACERS
// SPACERS
// SPACERS

export const SmallSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '10px')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '10px' : '')};
    }
`

export const MediumSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '20px')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '20px' : '')};
    }
`

export const LargeSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '60px')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '60px' : '')};
    }
`
export const GiantSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '86vh')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '0px' : '97vh')};
    }
`

//HOME LAYOUT
//HOME LAYOUT
//HOME LAYOUT

export const OverContainer = styled.div`
    top: 0;
    float: right;
    width: 50vw;
    margin-right: 25vw;
    margin-top: 4vh;
    padding-top: 4vh;
    border-top: 1px solid #222;
    z-index: 2;
    transition: all .5s ease-in-out;
    position: relative;
    
    @media screen and (max-width: 1300px) {
        width: 62vw;
        margin-right: 19vw;
    }

    @media screen and (max-width: 991px) {
        width: 90vw;
        margin-right: 0px;
        padding-top: 0vw;
        margin-bottom: 10vw;
        margin-top: 0;
        border-bottom: 1px solid #222;
        border-top: 1px solid #222;
        position: relative;
        margin: 5vw;
        margin-top: 0vw;
    }
`

export const FooterContainer = styled(OverContainer)`
    margin-top: 0vh;
    padding-top: 0vh;
    margin-bottom: 4vh;
    background-color: #bcbcbc;
    border-top: 0px solid #bcbcbc;
    border-bottom: 1px solid #222;    
    z-index: 1;
`

export const FullContainer = styled(OverContainer)`
    background-color: #bcbcbc;
`

export const BlogContainer = styled.div`
    padding: 0 80px 0 80px;
`

export const Backdrop = styled.div` 
    position: absolute;
    height: 99%;
    width: 100%;
    background-color: #bcbcbc;
    transition: 0.5s;
    z-index: -2;
    margin-top: ${({ scrolled }) => (scrolled ? '-4vh' : '6vh')};

    @media screen and (max-width: 991px) {
        margin-top: ${({ scrolled }) => (scrolled ? '3vh' : '3vh')};
    }
`

export const FillContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: -4.1vh;
    left: -25vw;
    background-color: #bcbcbc;
    z-index: 999;
    overflow: hidden;
    z-index: 2;

    @media screen and (max-width: 1300px) {
        left: -19vw;
    }

    @media screen and (max-width: 991px) {
        position: absolute;
        width: 100vw;
        overflow-x: visible;        
        top: 0;
        left: 0;
        margin: -5vw;        
        margin-top: -5.1vw;
    }
`

// Banner
// Banner
// Banner

export const BannerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: 0%;
    background-color: #000000;
    transition: 0.5s;
    overflow: hidden;
    z-index: -1;

    @media screen and (min-width: 991px) {
        ${({ scrolled }) => (scrolled ? `
            width: 62%;
            height: 90%;
            margin-left: 19%;
        ` : ``)}
    }

    @media screen and (min-width: 1300px) {
        ${({ scrolled }) => (scrolled ? `
            width: 50%;
            height: 90%;
            margin-left: 25%;
        ` : ``)}
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 100%;
    }
`

export const BannerWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`

// HOME ITEMS
// HOME ITEMS
// HOME ITEMS

export const HomeImg = styled.img`
    object-fit: contain;
    display: inline-block;
    position: relative;
    width: 100%;
    
    @media screen and (max-width: 991px) {
        margin-top: 8vh;
        margin-bottom: -2vh;
        height: 100%;
    }
`

export const SparkImg = styled(HomeImg)`
    margin-top: -100vh;
    opacity: 0;
    z-index: -1;
`

export const Separator = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;
    overflow-x: none;
    cursor: pointer;
    vertical-align: top;
    border-bottom: 1px solid #222;


    &:nth-child(even){
        margin-right: 1%;
    }
`

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
    color: ${({ textColor }) => (textColor)};
    
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const HeadText = styled.h1`
    letter-spacing: -0.04em;
    font-size: 5em;
    font-weight: 800;
    line-height: 1.27em;
    color: ${({ customColor }) => (customColor)};

    @media screen and (max-width: 991px) {
        font-size: 2em;        
        line-height: 2.2em;        
        padding: 0% 25%;
    }
`

export const SubText = styled.h4`
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5em;
    transition: all .2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: #222;
    color: ${({ customColor }) => (customColor)};

`

export const MainText = styled(SubText)`
    font-size: 1.25em;  
    font-family: Georgia;
    font-weight: 500; 
`

export const SubTitle = styled.h4` 
    color: #666;
`

//NEW BUBBLE
//NEW BUBBLE

export const NewBubble = styled.a`
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
`

//BUBBLE TAG
//BUBBLE TAG

export const TagBubble = styled.a`
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
`

export default GlobalStyle
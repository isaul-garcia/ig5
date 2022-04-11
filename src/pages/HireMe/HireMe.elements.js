import styled from 'styled-components/macro'


//HIRE MAY LAYOUT
//HIRE MAY LAYOUT
//HIRE MAY LAYOUT

export const Container1 = styled.div`
    width: 100vw;
    height: 5vh;
    background-color: #0058d4;
    float: left;

    @media screen and (max-width: 1300px) {
    }

    @media screen and (max-width: 991px) {
    }
`

export const Container2 = styled.div`
    width: 100vw;
    height: 10vh;
    top: 0;
    background-color: #0facef;
    float: left;
    overflow-x: hidden;

    @media screen and (max-width: 1300px) {
        height: 10vh;
    }

    @media screen and (max-width: 991px) {
    height: 8vh;
    }
`

export const Container3 = styled.div`
    width: 50vw;
    height: 85vh;
    background-color: #bcbcbc;
    float: left;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
        }

    @media screen and (max-width: 1300px) {
    }

    @media screen and (max-width: 991px) {
    width: 100vw;
    height: 0vh;
    }
`

export const Container4 = styled.div`
    width: 50vw;
    height: 85vh;
    background-color: #111111;
    float: left;
    overflow: hidden;

    @media screen and (max-width: 1300px) {
    }

    @media screen and (max-width: 991px) {
        width: 100vw;
        height: 85vh;
    }
`

export const Container5 = styled.div`
    width: 50vw;
    height: 20vh;
    background-color: #ff6009;
    float: left;
    overflow: hidden;

    @media screen and (max-width: 1300px) {
    }

    @media screen and (max-width: 991px) {
    }
`

///Wrapper
///Wrapper
///Wrapper
///Wrapper

export const TitleWrapper = styled.div`  
    margin: 2.5vh 4vh;

    @media screen and (max-width: 1300px) {
    margin: 2.5vh 4.8vh;
    }

    @media screen and (max-width: 991px) {
    margin: 1vh 3vh;
    }
`

export const BubbleWrapper = styled.div`  
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 75.1vh;

    @media screen and (max-width: 1300px) {
    }

    @media screen and (max-width: 991px) {
    }
`

export const Bubble = styled.img`
    width: 46%;
    flex: 46%;
    height: 100%;
    margin: 2vh;
    margin-bottom: 0;

    &:nth-child(even) {
        margin-top: -10vh;
        margin-left: 0;
    }
`
export const SparksWrapper = styled.div`
    width: 85vw;
    height: 20vh;
    bottom: 0;
    padding: 8vh 0;
    transition: all 0.2s ease-in-out;
    margin-left: -1.5vw;
`

export const Sparks = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 0%;
`

export const Spinner = styled.img`
    margin: -20vh;
    margin-top: -25vh;
    object-fit: cover;
`

export const TagWrapper = styled.div`  
    margin-top: 8vh;

    @media screen and (max-width: 1300px) {
    margin-top: 4vh;
    }

    @media screen and (max-width: 991px) {
    margin-top: 27vh;
    }
`

export const ContactWrapper = styled.div`  
    width: 50%;
    height:  ${({ expand }) => (expand ? '85vh' : '10vh')};
    bottom: 0;
    position: absolute;
    background-color: #00c802;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 9999;

    &:hover {
        height: ${({ expand }) => (expand ? '85vh' : '11.55vh')};
    }

    @media screen and (max-width: 1300px) {
        height: ${({ expand }) => (expand ? '85vh' : '10vh')};

        &:hover {
            height: ${({ expand }) => (expand ? '85vh' : '12vh')};
        }
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        height: ${({ expand }) => (expand ? '87.1vh' : '50px')};

        &:hover {
            height: ${({ expand }) => (expand ? '87.1vh' : '50px')};
        }
    }
`

export const TopWrapper = styled.div`  
    width: 100%;
    text-align: center;
    position: absolute;
`

export const Emoji = styled.img`  
    height: 0.75em;
    object-fit: contain;
    margin-left: 0.25em;
    display: inline-block;
    transition: all 0.2s ease-in-out;
`

export const OrnWrapper = styled.div`  
    width: 100%;
    margin-top: -77%;
`


//Text
//Text
//Text

export const SubText = styled.h4`
    font-size: 3.5vh;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 3.75vh;
    transition: all .2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: ${({ customColor }) => (customColor)};
    
    @media screen and (max-width: 1300px) {
        font-size: 1.4em;
        line-height: 1.4em;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.2em;
        line-height: 1.2em;
    }
`

export const TopText = styled(SubText)`
    font-size: 2.5vh;
    font-weight: 500;
    line-height: 5vh;
    color: ${({ customColor }) => (customColor)};

    @media screen and (max-width: 1300px) {
        line-height: 1.75em;
    }

    @media screen and (max-width: 991px) {
        line-height: 1.5em;
    }
`

export const BigText = styled.h1`
    letter-spacing: -0.04em;
    font-size: 8vh;
    font-weight: 800;
    line-height: 10vh;
    color: ${({ customColor }) => (customColor)};
    transform-origin: top left;
    transition: all 0.2s ease-in-out;
    display: inline-block;

    @media screen and (max-width: 1300px) {
            font-size: 3em;        
            line-height: 1.5em;   
    }

    @media screen and (max-width: 991px) {
        font-size: 2em;        
        line-height: 1.6em;  
    }
`

export const MessageText = styled(BigText)`
    padding-left: 1.5vh;
    width: 100%;
    &:hover {   
        transform: scale(1,1.2);
    } 

    @media screen and (max-width: 991px) {
        &:hover {   
            transform: scale(1,1);
        } 
    }
`

export const Orn = styled.img`
    width: 175%;
    height: 175%;
    margin-left: -37.5%;
    object-fit: cover;
    bottom: 0;
    animation: rotation 120s linear infinite;
`

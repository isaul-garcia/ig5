import styled from 'styled-components/macro';
import { rad } from '../../globalStyles';

//TOP BAR
//TOP BAR
//TOP BAR

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 64vh;
    transition: 0.2s;
    
    @media screen and (max-width: 991px) {
        height: 55vh;
        margin-top: 2vh;
    }
`

export const Wrapper = styled.div` 
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 40px;

    @media screen and (max-width: 991px) {
        padding: 22px;
    }
`

export const DitContainer = styled.div`
    position: relative;
    width: 100%;
    height: 165px;
    z-index: 201;
`

export const Wallpaper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: -10;
    background-color: #bababa;
    border-radius: ${rad};
`

export const Loader = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: -64vh;
    z-index: 203;
    pointer-events: none;
    border-radius: ${rad};
    transition: 0.8s;
    padding: 35%;
`

export const TaoBuffer = styled.img` 
    width: 33%;
    height: 100%;
    margin: auto;
    position: relative;
    display: inline-block;
    padding: 10px;
    margin-top: 25%;
    opacity: 0;
    animation-name: pulse;   
    animation-duration: 1.1s;
    animation-delay: ${({ anim }) => (anim)};
    animation-iteration-count: 1;

    @media screen and (max-width: 991px) {
        margin-top: 85%;     
        padding: 3px;   
        width: 33%;
    }
`

export const SmallText = styled.h5`
    font-size: 1.51em;
    font-weight: 500;
    line-height: 1.4em;
    margin-left: 0.16em;
    transition: all .2s ease-in-out;

    @media screen and (max-width: 1500px) {
        font-size: 1.19em;
    }

    @media screen and (max-width: 991px) {
        font-size: 3.75vw;
    }
`

export const LargeText = styled.h1`
    font-size: 7em;
    font-weight: 900;    
    line-height: 0.8em;
    letter-spacing: -0.025em;
    transition: all .2s ease-in-out;

    @media screen and (max-width: 1500px) {
        font-size: 5.5em;
    }

    @media screen and (max-width: 991px) {
        font-size: 4.4em;
    }
`

export const AboutContainer = styled.div`
    width: 90%;
    display: inline-flex;
    flex-wrap: wrap;
    position: absolute;
    z-index: 205;
    bottom: 40px;
    pointer-events: none;

    @media screen and (max-width: 991px) {
        bottom: 22px;
    }
`

export const AboutCard = styled.div`
    z-index: 99;
    transition: all 0.2s ease-in-out;
    border-radius: ${rad};
    position: relative;
    outline-offset: -1px;
`

export const SubText = styled.h4`
    font-size: 1.75em;
    line-height: 1.1em;
    font-weight: 500;
    letter-spacing: -0.04em;
    transition: all .2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: #333;    
    
    @media screen and (max-width: 1500px) {
        font-size: 1.5em;
    }

    @media screen and (max-width: 991px) {
        font-size: 5vw;
    }
`
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import { rad } from '../../globalStyles';

export const ItemContainer = styled.a`
    flex: 18%;  
    max-width: 20%;
    height: 10vw; 
    float: left;
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
    padding: 9px;

    @media screen and (max-width: 1500px) {
        height: 11vw;
    }
    
    @media screen and (max-width: 991px) {
        flex: 33%;  
        max-width: 33.33%;
        height: 25vh;
    }

    @media screen and (max-width: 700px) {
        flex: 33%;  
        max-width: 33.33%;
        height: 20vh;
    }
`

export const ItemContainerLast = styled(Link)`
    flex: 18%;  
    max-width: 20%;
    height: 10vw; 
    float: left;
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
    padding: 9px;

    @media screen and (max-width: 1500px) {
        height: 11vw;
    }
    
    @media screen and (max-width: 991px) {
        flex: 33%;  
        max-width: 33.33%;
        height: 25.1vh;
    }

    @media screen and (max-width: 700px) {
        flex: 33%;  
        max-width: 33.33%;
        height: 20vh;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #171717;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    color: #aaa;    
    padding: 20px;
    padding-top: 40px;
    border-radius: ${rad};

    ${ItemContainer}:hover & {
        opacity: 1;
        background: #1d1d1d;
        padding-top: 20px;

        @media screen and (max-width: 1500px) {
                padding-top: 1vw;
        }

        @media screen and (max-width: 991px) {
            padding-top: 40px;
            opacity: 0;
        }
    }   
    
    @media screen and (max-width: 1500px) {
        padding: 1vw;
        padding-top: ${({ freeze }) => (freeze ? '1vw' : '2vw' )};
    }

    ${ItemContainerLast}:hover & {
        opacity: 1;
        background: #222;
        padding-top: 1vw;

        @media screen and (max-width: 991px) {
            padding: 15px;
            padding-top: 15px;
        }
    }  

    ${({ freeze }) => (freeze &&
        `opacity: 1;
        background: #1d1d1d;
        padding-top: 1vw;
        color: #666;
        z-index: 999;`
    )}

    @media screen and (max-width: 991px) {
        padding: 15px;
        padding-top: 15px;
    }
`

export const TextWrapper = styled.div`
    text-decoration: none;
    width: 100%;
    display: inline-block;
    cursor: pointer;
`

//text elements
//text elements
//text elements
//text elements

export const HeadText = styled.h1`
    letter-spacing: -1px;
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1em;
    margin-bottom: 0.5em;
    cursor: pointer;
    ${({ freeze }) => (freeze &&
        `font-weight: 600;`
    )}

    @media screen and (max-width: 1500px) {
        font-size: 1em;  
    }

    @media screen and (max-width: 991px) {
        font-size: 1.25em;
    }

    @media screen and (max-width: 700px) {
        font-size: 1.25em;
    }
`

export const HeadTextLast = styled(HeadText)`
    @media screen and (max-width: 991px) {
        font-size: 1.75em;
        padding: 10px;
    }

    @media screen and (max-width: 700px) {
        font-size: 1.25em;
        padding: 0;
    }
`

export const SubText = styled.h4`
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1em;
    cursor: pointer;
    font-style: italic;

    @media screen and (max-width: 1500px) {
        font-size: 0.7em;
        line-height: 1em;
    }

    @media screen and (max-width: 960px) {
        line-height: 1.1em;
    }
`

export const PreviewImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;  
    transition: all 0.2s ease-in-out;
    opacity: 1;
    border-radius: ${rad};

    ${ItemContainer}:hover & {
        opacity: 0;

        @media screen and (max-width: 960px) {
            opacity: 1;
        }
    }  

    ${({ freeze }) => (freeze &&
        `display: none;`
    )}
`

export const ShadowContainer = styled.div`
    width: 100%;
    height: 100%;  
    border-radius: ${rad};
    overflow: hidden;
    transition: all .2s ease-in-out;
    position: relative;
`
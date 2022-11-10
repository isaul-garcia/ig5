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
        height: 20vh;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #d0d0d0;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    color: #222;    
    padding: 20px;
    padding-top: 40px;
    outline-offset: -1px;
    border-radius: ${rad};
    outline: 1px solid #d0d0d0;

    ${ItemContainer}:hover & {
        opacity: 1;
        background: #d0d0d0;
        padding-top: 20px;

        @media screen and (max-width: 1500px) {
                padding-top: 1vw;
        }
    }   
    
    @media screen and (max-width: 1500px) {
        padding: 1vw;
        padding-top: ${({ freeze }) => (freeze ? '1vw' : '2vw' )};
    }

    ${ItemContainerLast}:hover & {
        opacity: 1;
        background: #d0d0d0;
        padding-top: 1vw;
    }  

    ${({ freeze }) => (freeze &&
        `opacity: 1;
        background: #d0d0d099;
        padding-top: 1vw;
        color: #777;
        outline: 10px solid #d0d0d0;
        outline-offset: 2px;
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

    @media screen and (max-width: 1500px) {
        font-size: 1em;  
    }

    @media screen and (max-width: 991px) {
        font-size: 1.25em;
    }

    ${({ freeze }) => (freeze &&
        `font-weight: 600;`
    )}
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

    ${ItemContainer}:hover & {
        opacity: 0;

        @media screen and (max-width: 960px) {
            opacity: 1;
        }
    }  
`

export const ShadowContainer = styled.div`
    width: 100%;
    height: 100%;  
    border-radius: ${rad};
    overflow: hidden;
    transition: all .2s ease-in-out;
    position: relative;
    outline-offset: -1px;
`
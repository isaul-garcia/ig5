import styled from 'styled-components/macro'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    width: 5%;
    margin-top: 4vh;
    margin-left: 4vh;
    border-left: 1px solid #d8d8d8;
    pointer-events: none;
    z-index: 10;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const ForArchiveRoute = styled(HashLink)`
    position: fixed;
    top: 0;
    width: 4.1vh;
    margin-top: 4vh;
    height: 92.1%;
    border-right: 1px solid #d8d8d8;
    background-color: #000;
    z-index: 20;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
        width: 6vh;
    }

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const ProgressBarContainer = styled.div`
    position: fixed;
    z-index: 10;
    width: 5vw;
    top: 0;
    left: 0;
    height: 100vh;
    opacity: 1;
    margin: 4vh;
    pointer-events: none;

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const ProgressBar = styled.div`
    border-bottom: 1px solid #0083ff;
    transform-origin: top;
    opacity: 1;
    height: 92vh;
    height: ${({ scroll }) => (scroll)}vh;
    pointer-events: none;
    z-index: 0;
`

export const IndicatorBlockHash = styled(HashLink)`
    margin: 0;
    padding: 0;
    width: 100%;
    height: ${({ lenght }) => (lenght)}; 
    border-top: 1px solid ${({ highlight }) => (highlight)}; 
    pointer-events: all;
    cursor: pointer;
    z-index: 10;
    ${({ last }) => (last ? `
        border-top: 0px;
        border-bottom: 1px solid #d8d8d8;
    ` : '')}

    &:hover{
        background-color: rgba(40,40,40,0.5);
    }
`
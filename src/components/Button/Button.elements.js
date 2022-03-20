import styled from 'styled-components/macro'

export const Button = styled.div`  
    border-radius: 3vh;
    background-color: ${({ customColor }) => (customColor)}44;
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: 0.2s;
    margin: 1.25em;
    margin-left: 0;
    margin-bottom: 0;

    &:hover {
        background-color: ${({ customColor }) => (customColor)}55;
    }
`

export const Text = styled.h1`
    letter-spacing: -1px;
    font-size: 3vh;
    font-weight: 700;
    line-height: 5.5vh;
    padding: 0 16px;
    color: ${({ customColor }) => (customColor)};

    @media screen and (max-width: 1300px) {
        font-size: 1.1em;        
        line-height: 2em;   
        padding: 0 16px;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.1em;    
        padding: 0 14px;
    }
`
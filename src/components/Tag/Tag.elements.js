import styled from 'styled-components/macro'
import * as c from '../../colorScheme';

export const Button = styled.div`  
    background-color: ${({ active }) => (active ? c.accent : '')};
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: 0.2s;
    padding: 6px;
    outline: 1px dotted #777;
    outline-offset: -1px;
    margin: 0 0 18px 2px;

    @media screen and (max-width: 991px) {
        padding: 9px 3px;
    }

    &:hover {
        background-color: ${c.accent};
    }
`

export const Text = styled.h1`
    font-size: 0.95em;
    font-weight: 400;
    font-family: 'Slabo 27px';
    color: ${({ active }) => (active ? '#222222' : '#bcbcbc')};
    transition: 0.2s;
    
    ${Button}:hover & {
        color: #222;
    }  

    @media screen and (max-width: 1500px) {
        font-size: 0.75em;        
        line-height: 0.85em;   
        padding: 0 3px;
    }

    @media screen and (max-width: 991px) {
        font-size: 0.9em;    
        padding: 0 14px;
    }
`
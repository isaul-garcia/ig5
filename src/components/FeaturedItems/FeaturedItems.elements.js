import styled from 'styled-components/macro'

export const ItemContainer = styled.a`
    flex: 40%;  
    height: 20vw; 
    float: left;
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
    padding: 9px;   

    @media screen and (max-width: 1500px) {
        height: 22vw;
    }


    @media screen and (max-width: 991px) {
        height: 26vh; 
    }
`
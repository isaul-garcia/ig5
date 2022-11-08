import styled from 'styled-components/macro'

export const NavContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    margin-top: -12px;
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    pointer-events: ${({ toggle }) => (toggle ? 'auto' : 'none')};
    transition: all .2s ease-in-out;
    z-index: 300;
    background: #bcbcbc;
`

export const NavWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    transition: all .2s ease-in-out;
`

export const TilesContainer = styled.div`
    width: 20%;
    margin-left: 39.5%;
    margin-top: ${({ toggle }) => (toggle ? '9%' : '6%')};
    padding: 3%;
    position: relative;
    transition: all 0.2s ease-in-out; 
    padding: ${({ toggle }) => (toggle ? '2% 5.5%' : '0% 4%')};
`

export const TilesWrapper = styled.div`
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    padding: 5px 5px 5px 5px;
    margin-bottom: 3px;
    transition: all .2s ease-in-out;
    border-radius: 20px;
    cursor: pointer;
    position: relative;

    &:hover > div {
        background-color: #f0f00f;
    }
`

export const Tile = styled.div` 
    height: ${({ toggle, feat, snippets, main }) => 
        (toggle ? 
            (feat ? `3vw` : (snippets ? `2vw` : (main ? `6vw` : `1.85vw`))) 
            : 
            (feat ? `3.75vw` : (snippets ? `3vw` : (main ? `7.5vw` : `2.75vw`)))
        )};  
    flex: ${({ feat, snippets, socials }) => (feat ? `40%` : (snippets ? `25%` : (socials ? `15%` : `100%`)))}; 
    border-radius: 15px;
    outline-offset: -1px;
    outline: 1px solid #f0f0f033;
    background-color: #f2f2f2;
    position: relative;
    transition: all .2s ease-in-out;
    margin: 2px;
`


////////
////////
////////
////////
////////

export const TextWrap = styled.div `
    width: 100vw; 
    position: absolute;
    margin-top: -20vh;
`

export const BigText = styled.h1`
    font-size: 9em;
    line-height: 0;
`

export const ButtonWrap = styled.div `
    z-index: 101;
    float: right;
    margin: 24px 32px;
`
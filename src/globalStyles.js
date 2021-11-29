import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif; 
    }    

    body {
        background-color: #000;
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
        font-weight: 500;
        font-size: 1.25em;
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

    @keyframes cyclingColorPalette {
	0% {
        border-color: #1e31e3;
	}
	50% {
		border-color: #ff00ff;
	}
	100% {
		border-color: #e0ae01;
	}
    }

    @media screen and (max-width: 991px) {
        body {
            padding: 0.5vh;
        }
    }
`

export const Container = styled.div`
    top: 0;
    width: 89vw;
    float: right;
    margin-right: 3.5vh;
    margin-top: 4vh;
    padding-top: 4vh;
    margin-bottom: 4vh;
    border-bottom: 1px solid #d8d8d8;
    border-top: 1px solid #d8d8d8;
    z-index: 1;
    transition: all .5s ease-in-out;
    
    @media screen and (max-width: 1350px) {
        width: 87vw;  
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        margin-right: 0px;
        margin-top: 0vw;
        padding-top: 0vw;
        margin-bottom: 1vw;
        border-bottom: 1px solid #000;
        border-top: 0px solid #000;
        overflow-x: hidden;
    }
`

export default GlobalStyle
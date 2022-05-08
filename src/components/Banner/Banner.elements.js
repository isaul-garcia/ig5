import styled from 'styled-components/macro';

export const MyCanvas = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: 0%;
    background-color: #000000;
    /* opacity: ${({ scrolled }) => (scrolled ? '0' : '1')}; */
    transition: 0.5s;
    overflow: hidden;
    z-index: -1;

    @media screen and (min-width: 991px) {
    ${({ scrolled }) => (scrolled ? `
    width: 50%;
    height: 90%;
    margin-left: 25%;
    ` : ``)}
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 100%;
    }
`

export const Backtest = styled.img` 
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity:1;
    z-index: -1;
`
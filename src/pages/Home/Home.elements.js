import styled from 'styled-components/macro';

export const HomeWrap = styled.div`
    position: relative;
    z-index: 100;
`

export const Loader = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    transition: 1s;
    background-color: ${({ loading }) => (loading ? '#000000' : '#00000000')};
    pointer-events: none;
`

export const TitleSection = styled.div`
    width: 100%;
    height: 76px; 
`

export const SectionText = styled.div`
    width: 100%;
    height: 76px; 
    
    @media screen and (max-width: 991px) {
        height: 50px;
    }
`

export const Separator = styled.div`
    width: ${({ tiled }) => (tiled ? `calc(100% + 16px)` : '100%')};
    display: inline-block;
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
    margin: ${({ tiled }) => (tiled ? '-8px' : '0')};
`

export const TextWrapper = styled.div`
    display: inline-block;
    pointer-events: all;
    width: 100%;
    
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const SubText = styled.h4`
    font-size: 1.75em;
    font-weight: 500;
    line-height: 1.1em;
    letter-spacing: -0.04em;
    transition: all .2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    padding: 2vw 2vw 0 2vw;

    color: #bcbcbc;
`
export const MediumText = styled.h1 `
    font-size: 2.75em;
    line-height: 1.2em;
    font-weight: 700;    
    letter-spacing: -0.04em;    
    
    @media screen and (max-width: 1500px) {
        font-size: 2.2em;
        line-height: 1.65em;
    }

    @media screen and (max-width: 991px) {
        font-size: 2.15em;
        line-height: 0.8em;
    }

    @media screen and (max-width: 700px) {
        font-size: 1.75em;
        line-height: 1.2em;
    }
`

export const LargeText = styled.h1 `
    font-size: 6em;
    line-height: 1.2em;
    font-weight: 900;    
    letter-spacing: -0.025em;
`

export const TagWrapper = styled.div`  
    margin-top: 10vh;

    @media screen and (max-width: 1300px) {
    margin-top: 4vh;
    }

    @media screen and (max-width: 991px) {
    margin-top: 27vh;
    }
`
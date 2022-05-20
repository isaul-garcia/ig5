import styled from 'styled-components/macro';

export const Loader = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    transition: 1s;
    background-color: ${({ loading }) => (loading ? '#000' : '')};
    pointer-events: none;
`

export const HeadText = styled.h1`
    letter-spacing: -0.04em;
    font-size: 5em;
    font-weight: 800;
    line-height: 1.27em;
    color: ${({ customColor }) => (customColor)};

    @media screen and (max-width: 991px) {
        font-size: 2em;        
        line-height: 2.2em;        
        padding: 0% 25%;
    }
`

export const Separator = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;
    overflow-x: none;
    cursor: pointer;
    vertical-align: top;
    border-bottom: 1px solid #222;


    &:nth-child(even){
        margin-right: 1%;
    }
`

///BANNER
//Use for the WEBGL shader
export const BannerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: 0%;
    background-color: #000000;
    transition: 0.5s;
    overflow: hidden;
    z-index: -1;

    @media screen and (min-width: 991px) {
        ${({ scrolled }) => (scrolled ? `
            width: 62%;
            height: 90%;
            margin-left: 19%;
        ` : ``)}
    }

    @media screen and (min-width: 1300px) {
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

export const BannerWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`

export const SparkImg = styled.img`
    object-fit: contain;
    display: inline-block;
    position: relative;
    width: 100%;
    margin-top: -100vh;
    opacity: 0;
    z-index: -1;
    
    @media screen and (max-width: 991px) {
        margin-top: 8vh;
        margin-bottom: -2vh;
        height: 100%;
    }
`

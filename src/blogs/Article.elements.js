import styled from 'styled-components/macro';

export const Fixer = styled.div`
    margin: -3.75vh 0 20px -5px;

    @media screen and (max-width: 991px) {
        
    margin: -1vh 0 20px -5px;
    }
`

export const DetailsWrapper = styled.div`
    width: 100%;
    border-top: 1px dashed #111;
`

export const SubTitle = styled.h4` 
    color: #555;
    
    @media screen and (max-width: 991px) {
        font-size: 1.1em;
    }
`

export const ArticleTitle = styled.h1`
    margin-left: -2px;
    
    @media screen and (max-width: 991px) {
        font-size: 2.1em;
        line-height: 1em;
    }
`

export const ArticleImg = styled.img`
    border-radius: 0.75em;
    object-fit: cover;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 600px;
    min-height: 200px;
    
    @media screen and (max-width: 991px) {
        height: 100vw;
    }
`

export const ArticleFrame = styled.div`
    background-color: #00f;
    width: 100%;
    height: 65vh;
`

export const Separator = styled.img`
    width: 100%;
    height: 20px;
    display: inline-block;
`

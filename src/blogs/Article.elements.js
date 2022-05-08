import styled from 'styled-components/macro';

export const DetailsWrapper = styled.div`
    width: 100%;
    border-top: 1px dashed #111;
`

export const SubTitle = styled.h4` 
    color: #666;
`

export const ArticleTitle = styled.h1`
    margin-left: -2px;
`

export const ArticleImg = styled.img`
    border-radius: 0.75em;
    object-fit: cover;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 600px;
    
    @media screen and (max-width: 991px) {
    height: 105vw;
    }
`

export const ArticleFrame = styled.div`
    background-color: #00f;
    width: 100%;
    height: 65vh;
`

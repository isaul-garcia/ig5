import styled from 'styled-components/macro'

export const FeaturedContainer = styled.div`
    width: 50%;
    height: 35vh;
    display: inline-block;
    overflow: hidden;
    transition: 0.4s;
    cursor: pointer;
    margin-right: 4px;

    &:nth-last-child(1){
        margin-right: 0px;
    }

    &:hover{
        width: 60%;
    }
`

export const FeaturedWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ff402b;
    background-color: #b0f50f;
    background-color: #036bff;
    background-color: #e1cb28;
    border-radius: 2em;
    padding: 2em;
`

export const FeaturedImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.65em;
`
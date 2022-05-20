import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const ItemContainer = styled(Link)`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow-y: hidden;
    border-top: 1px solid #222;
    cursor: pointer;
    
    &:hover {
        background-color: #111;
    }

    &:nth-child(even){
        margin-right: 1%;
    }

    @media screen and (max-width: 991px) {
        margin-top: 0px;
        
        &:hover {
            background-color: #bcbcbc;
        }
    }
`

export const ItemContainer0 = styled.a`
    width: 100%;
    height: 100%;
    padding: 8px 18px;
    display: block;
    position: relative;
    overflow-y: hidden;
    border-radius: 15px;
    cursor: pointer;
    background-color: #aaa;
    transition: 0.1s;
    
    &:hover {
        background-color: #888;        
        padding: 8px 26px;
    }

    &:nth-child(even){
        margin-right: 1%;
    }

    @media screen and (max-width: 991px) {
        margin-top: 0px;
        
        &:hover {
            background-color: #bcbcbc;
        }
    }
`

export const Boxed = styled.div`
    width: 25%;
    padding: 12px 0px;
    transition: all .4s ease-in-out;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 8px 0px;
    }
`

export const Name = styled(Boxed)`
    width: 25%;
    margin-left: -1px;

    @media screen and (min-width: 991px) {
        ${ItemContainer}:hover & {
        margin-left: 15%;
        width: 16%;
        padding: 40px 0px;        
        }   
    }

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const Desc = styled(Boxed)`
    width: 57%; 
    cursor: pointer;
    
    @media screen and (min-width: 991px) {
        ${ItemContainer}:hover & {
        margin-left: 0%;
        width: 47%;
        padding: 40px 0px;
        }      
    }

    @media screen and (max-width: 991px) {
        width: 75%;
    }
`
export const Tag = styled(Boxed)`
    width: 18%;
    float: right;
    cursor: pointer;

    @media screen and (min-width: 991px) {
        ${ItemContainer}:hover & {
        width: 17%;
        margin-right: 4%;
        padding: 40px 0px;
        }    
    }

    @media screen and (max-width: 991px) {
        width: 25%;
    }
`

export const Title = styled(Boxed)`
    width: 85%;
    margin-left: -1px;

    @media screen and (min-width: 991px) {
        ${ItemContainer}:hover & {
        margin-left: 15%;
        width: 64%;
        padding: 40px 0px;        
        }   
    }

    @media screen and (max-width: 991px) {
        width: 82%;
        line-height: 1.6em;
        padding: 10px 0px;  
    }
`

export const Date = styled(Boxed)`
    width: 15%;
    float: right;
    
    @media screen and (min-width: 991px) {
        ${ItemContainer}:hover & {
        width: 10%;
        margin-right: 4%;
        padding: 40px 0px;
        }  
    }

    @media screen and (max-width: 991px) {
        width: 18%;
        line-height: 1.25em;
        vertical-align: top;
    }
`

export const TextWrapper = styled.div`
    text-decoration: none;
    width: 100%;
    display: inline-block;
    cursor: pointer;
    color: #222;
    text-align: ${({ isLast }) => (isLast ? 'right' : 'left')};
    transition: 0s;

    @media screen and (min-width: 991px){
        ${ItemContainer}:hover & {
            color: #bcbcbc;
        }
    }

    @media screen and (max-width: 991px){
        padding: 0;
        text-align: left;
    }
`

export const PreviewImg = styled.img`
    width: 10%;
    height: 100%;
    margin-left: -10%;
    position: absolute;
    transition: all .4s ease-in-out;
    object-fit: cover;

    @media screen and (min-width: 991px) {
        ${ItemContainer}:hover & {
        margin-left: 0%;
        width: 11%;
        }     
    }

    @media screen and (max-width: 991px){
        display: none;
    }
`

//text elements
//text elements
//text elements
//text elements

export const HeadText = styled.h1`
    letter-spacing: -1px;
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1.1em;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        font-size: 1.75em;        
        line-height: 1em;
    }
`

export const SubText = styled.h4`
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1em;
    opacity: 1;
    cursor: pointer;

    @media screen and (max-width: 1500px) {
        font-size: 0.9em;
        line-height: 1em;
    }

    @media screen and (max-width: 960px) {
        line-height: 1.1em;
    }
`

export const TagText = styled(SubText)`
    text-align: right;
`

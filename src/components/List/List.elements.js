import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { rad } from '../../globalStyles';

export const ItemContainer = styled(Link)`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow-y: hidden;
    background-color: #1d1d1d;
    cursor: pointer;
    border-radius: ${rad};
    margin-bottom: 8px;
    outline-offset: -1px;
`

export const Boxed = styled.div`
    width: 25%;
    padding: ${({ all }) => (all ? '18px' : '25px')};
    transition: all .25s ease-in-out;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    
    @media screen and (max-width: 1500px) {
        padding: 18px;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 0px 0px;
    }
`

///////////////

export const Name = styled(Boxed)`
    width: 25%;

    ${ItemContainer}:hover & {
        margin-left: 13%;
        width: 19%;
        padding: 30px 0px;  
        
        @media screen and (max-width: 1500px) {
            padding: 22px 0px;     
        }   

        @media screen and (max-width: 991px) {
            width: 100%;
            padding: 10px 0px;    
            margin-left: 0; 
        }
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 10px 0px;     
    }
`

export const Desc = styled(Boxed)`
    width: 50%; 
    cursor: pointer;
    
    ${ItemContainer}:hover & {
        margin-left: 0%;
        width: 47%;
        padding: 30px 0px;

        @media screen and (max-width: 1500px) {
            padding: 22px 0px;     
        }   

        @media screen and (max-width: 991px) {
            width: 75%;
            opacity: 0.3;
            padding: 0 0 10px 13px;
        }
    }          

    @media screen and (max-width: 991px) {
        width: 75%;
        opacity: 0.3;
        padding: 0 0 10px 13px;
    }
`
export const Tag = styled(Boxed)`
    width: 25%;
    float: right;
    cursor: pointer;

    ${ItemContainer}:hover & {
        width: 17%;
        margin-right: 3%;
        padding: 30px 0px;

        @media screen and (max-width: 1500px) {
            padding: 22px 0px;     
        }   

        @media screen and (max-width: 991px) {
            width: 25%;
            opacity: 0.3;
            display: none;
        }
    }

    @media screen and (max-width: 991px) {
        width: 25%;
        opacity: 0.3;
        display: none;
    }
`

////////////////////////////

export const Title = styled(Boxed)`
    width: 80%;
    margin-left: -1px;

    ${ItemContainer}:hover & {
        margin-left: 13%;
        width: 70%;
        padding: 30px 0px;  
        
        @media screen and (max-width: 1500px) {
            padding: 22px 0px;     
        }   

        @media screen and (max-width: 991px) {
            width: 75%;
            line-height: 1.6em;
            padding: 10px 0 0 0;  
            overflow: hidden;
            display: block;
            margin-left: 0; 
        }
    } 
    
    @media screen and (max-width: 991px) {
        width: 75%;
        line-height: 1.6em;
        padding: 10px 0 0 0;  
        overflow: hidden;
        display: block;
    }
`

export const Date = styled(Boxed)`
    width: 18%;
    float: right;
    
    ${ItemContainer}:hover & {
        width: 10%;
        margin-right: 4%;
        padding: 30px 0px;   
        
        @media screen and (max-width: 1500px) {
            padding: 22px 0px; 
        }

        @media screen and (max-width: 991px) {
            width: 10%;
            margin-right: 11%;
            padding: 10px 0px;  
        }
    }      

    @media screen and (max-width: 991px) {
        width: 10%;
        margin-right: 11%;
        padding: 10px 0px;  
    }
`

export const ShowMore = styled(Boxed)`
    width: 100%;
    text-align: right;
    float: right;
    background-color: #171717;

    &:hover{
        background-color: #1d1d1d;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        opacity: 0.3;
        padding: 20px 0;
    }
`

export const TextWrapper = styled.div`
    text-decoration: none;
    width: 100%;
    display: inline-block;
    cursor: pointer;
    color: #bcbcbc;
    text-align: ${({ isLast }) => (isLast ? 'right' : 'left')};
`

export const PreviewImg = styled.img`
    width: 10%;
    margin-left: -10%;
    height: 100%;
    position: absolute;
    transition: all .25s ease-in-out;
    object-fit: cover;

    ${ItemContainer}:hover & {
        margin-left: 0%;
        width: 11%;

        @media screen and (max-width: 991px) {
            display: none;
            width: 10%;
            margin-left: -10%;
        }
    }   

    @media screen and (max-width: 991px) {
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

    ${({ last }) => (last ? `
        color: #666;
        font-size: 1em;
        font-weight: 600;
        letter-spacing: 0px;
    ` : null)};
    
    @media screen and (max-width: 1500px) {
        font-size: 0.8em;
    }

    @media screen and (max-width: 991px) {
        font-size: 1.1em;
        padding: 0 14px;
    }
`

export const SubText = styled.h4`
    font-size: 0.91em;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1em;
    opacity: 1;
    cursor: pointer;
    letter-spacing: -0.05em;

    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
        line-height: 1em;
    }

    @media screen and (max-width: 960px) {
        line-height: 1.1em;
    }
`

export const TagText = styled(SubText)`
    text-align: right;
`

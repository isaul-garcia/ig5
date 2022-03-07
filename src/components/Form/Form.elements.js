import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'


//form
//form
//form

export const NumInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: #e6e6e6;
    border: none;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 1.5em;
    font-weight: 400;

    &:invalid { outline: solid #0000 2px; }
    &:valid { outline: solid #0d62ff 2px; }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const SelectorInput = styled.select`
    width: 100%;
    height: 100%;
    background-color: #e6e6e6;
    border: none;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 1.5em;
    font-weight: 400;

    &:invalid { outline: solid #0000 2px; }
    &:valid { outline: solid #0d62ff 2px; }
`

export const SelectorInputChild = styled.div`
    color: #222;
    &:first-child() {
        color: #bbb; 
    }
`


export const ItemContainer = styled.a`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow-y: hidden;
    border-radius: 20px;
    background-color: #ccc;
    transition: 0.2s;
    margin-bottom: 5px;

    @media screen and (max-width: 991px) {
        margin-bottom: 2%;
    }
`

export const SubmitContainer = styled(ItemContainer)`
    background-color: #c7dec8;
    outline: 3px solid #3ed245;
    outline-offset: -3px;
    cursor: pointer;
    transition: 0.1s;

    &:hover{
        background-color: #9ad69e;
        outline: 6px solid #3ed245;
        outline-offset: -6px;
    }

    &:active{
        background-color: #3ed245;
    }
`

export const Boxed = styled.div`
    width: 25%;
    padding: 12px 0px;
    transition: all .4s ease-in-out;
    display: inline-block;
    vertical-align: top;

    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 8px 0px;
    }
`

export const Question = styled(Boxed)`
    margin-left: 2%;
    width: 70%;
    padding: 20px 0px;   

    @media screen and (max-width: 991px) {
        width: 95%;
        line-height: 1.6em;
        padding: 12px 6px  #f0aef0;  
    }
`

export const ReceiptSection = styled(Boxed)`
    background-color: ${({ boxColor }) => (boxColor)};
    border-radius: 10px;
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 3%;
    width: 94%; 
    padding: 10px 10px;  
    display: flex; 

    @media screen and (max-width: 991px) {
        width: 95%;
        line-height: 1.6em;
        padding: 12px 6px;  
    }
`


export const SubmitSection = styled(Question)`
    padding: 20px 0px;  

    @media screen and (max-width: 991px) {
        padding: 20px 2%;  
    }
`

export const InputContainer = styled(Boxed)`
    float: right;
    width: 20%;
    margin-right: 1%;
    padding: 10px 0px;

    @media screen and (max-width: 991px) {
        width: 94%;
        margin-right: 3%;
        margin-bottom: 1.5%;
    }
`

export const TextWrapper = styled.div`
    text-decoration: none;
    width: 100%;
    display: inline-block;
    color: #222;
    text-align: ${({ isLast }) => (isLast ? 'right' : 'left')};
    transition: 0s;

    @media screen and (max-width: 991px){
        padding: 0;
        text-align: left;
    }
`


//text elements
//text elements
//text elements
//text elements

export const MediumText = styled.h1`
    letter-spacing: -1px;
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1.1em;
    color: ${({ customColor }) => (customColor)};
    

    @media screen and (max-width: 991px) {
        font-size: 1.75em;        
        line-height: 1em;
    }
`


//Cards
//Cards
//Cards

export const CardSection = styled.div`
    width: 100%;
    position: relative;
    display:flex;
`

export const CardWrapper = styled.div`
    width: 33.33%;
    height: 100%;
    flex: 33.33%;
    margin-right: 10px;

    &:nth-child(3){
        margin-right: 0%;
    }
`

export const TotalSection = styled(Boxed)`
    background-color: ${({ boxColor }) => (boxColor)};
    border-radius: 16px;
    margin-top: 1%;
    width: 100%; 
    padding: 10px 10px;  
    position: sticky;
    top: 6.25vh;
    display: flex;
    z-index: 3;
    box-shadow: 0 0 20px #bcbcbc;

    @media screen and (max-width: 991px) {
        width: 95%;
        line-height: 1.6em;
        padding: 12px 6px;  
    }
`

export const RowWrapper = styled.div`
    text-decoration: none;
    width: ${({ isTotal }) => (isTotal ? '22%' : '50%')};
    color: #222;
    text-align: ${({ isLast }) => (isLast ? 'right' : 'left')};
    transition: 0s;
    padding-right: ${({ isDollar }) => (isDollar ? '5px' : '')};
    flex: 50%;
    flex: ${({ isTotal }) => (isTotal ? '15%' : '100%')};

    @media screen and (max-width: 991px){
        padding: 0;
        text-align: left;
    }
`

export const ReceiptText = styled.h1`
    letter-spacing: -1px;
    font-size: ${({ isMain }) => (isMain ? '1.1em' : '0.85em')};
    font-size: ${({ isTotal }) => (isTotal ? '1.1em' : '')};
    font-weight: 700;
    line-height: ${({ isTotal }) => (isTotal ? '1.5em' : '0.85')};
    color: ${({ customColor }) => (customColor)};

    @media screen and (max-width: 991px) {
        font-size: 1.75em;        
        line-height: 1em;
    }
`

export const ReceiptInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: ${({ isTotal }) => (isTotal ? '#bcbcbc22' : '#e6e6e688')};
    color: ${({ isTotal }) => (isTotal ? '#bcbcbc' : '#222')};
    border: none;
    padding: 5px 9px;
    border-radius: 12px;
    font-size: 0.85em;
    font-weight: 500;
    outline: none;
    text-align: right;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

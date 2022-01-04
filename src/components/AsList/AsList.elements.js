import styled from 'styled-components/macro'

export const IndicatorHelper = styled.span`
    width: 100%;
    height: 1vh;
    display: block;
    position: absolute;
    
    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const ProjectContainer = styled.div`
    width: 100%;
    //max-width: 48rem;
    display: inline-block;
    position: relative;
    overflow-x: none;
    border-top: 1px solid #f0f0f0;
    cursor: pointer;
    
    &:hover {
        background-color: #8881;
    }

    &:nth-child(even){
        margin-right: 1%;
    }

    @media screen and (max-width: 991px) {
        margin-top: 5px;
    }
`

export const ProjNameSection = styled.div`
    @media screen and (max-width: 991px) {        
        border: 1px solid #bbb;
        border-bottom: none;
        padding-top: 20px;
        margin: 4px;
        margin-bottom: 9px;
        border-radius: 0.6em 0.6em 0 0;
        height: 10.7em;
        margin-bottom: -8.5em;
    }
`

export const Boxed = styled.div`
    width: 25%;
    padding: 12px 0px;
    transition: all .5s ease-in-out;
    display: inline-block;
    mix-blend-mode: difference;
    vertical-align: top;

    @media screen and (max-width: 991px) {
        width: 100%;
        padding-left: 5px;
        height: 50px;
    }
`

export const Title = styled(Boxed)`
    width: ${({ isArticle }) => (isArticle ? '50%' : '20%')};
`
export const Desc = styled(Boxed)`
    width: ${({ isArticle }) => (isArticle ? '35%' : '65%')};
`
export const Tag = styled(Boxed)`
    width: 15%;
    float: right;
`

export const TextWrapper = styled.span`
    text-decoration: none;
    width: 100%;
    display: inline-block;
    text-align: ${({ isLast }) => (isLast ? 'right' : 'left')};

    @media screen and (max-width: 991px){
        padding: 0;
        text-align: left;
    }
`

//text elements
//text elements
//text elements
//text elements

export const HeadText = styled.h1`
    transition: all .2s ease-in-out;
    letter-spacing: -1px;
    color: #d8d8d8;
    font-size: 1.1em;
    font-weight: 600;
    line-height: 1.1em;
    transition: all .3s ease-in-out;
    opacity: 1;

    @media screen and (max-width: 1500px) {
        line-height: 1em;
        font-size: 2.4em;
    }

    @media screen and (max-width: 991px) {
        font-size: 2.5em;        
        line-height: 0.10em;
    }
`

export const SubText = styled.h4`
    font-size: 1em;
    color: #d8d8d8;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1em;
    transition: all .3s ease-in-out;
    opacity: 1;

    @media screen and (max-width: 1500px) {
        font-size: 1.1em;
        line-height: 0.9em;
    }

    @media screen and (max-width: 960px) {
        color: #888;
        line-height: 1.1em;
    }
`

export const TagText = styled(SubText)`
    text-align: right;
`

export const ButtonText = styled.a`
    height: 100%;
    text-decoration: none;
    font-size: 0.9em;
    line-height: 1em;
    padding: 0.3em 0.4em 0.4em 0.4em;
    font-weight: 400; 
    transition: all .3s ease-in-out;
    border: 1px solid #d8d8d8;
    border-radius: 0.5em;
    cursor: pointer;
    opacity: 1;
    background-color: ${({ disabled }) => (disabled ? 'rgba(216,216,216,1)' : '')};
    color: ${({ disabled }) => (disabled ? '#000' : '#d8d8d8')};

    &:hover{
        background-color: rgba(216,216,216,1);
        color: #000;
    }

    @media screen and (max-width: 991px) {
        float: right;
        width: 6.75em;        
        padding: 0.35em 0.4em 0.4em 0.7em;
        line-height: 2em;
        margin-right: 1.2em;
        margin-top: 6.25em;
    }
`
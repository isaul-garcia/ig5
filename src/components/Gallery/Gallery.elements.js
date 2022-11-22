import styled from 'styled-components/macro';
import { rad } from '../../globalStyles';

export const IndicatorHelper = styled.span`
    width: 1.25vh;
    height: 1vh;
    display: block;
    margin-top: -7vh;
    position: absolute;
    
    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const ProjectContainer = styled.div`
    width: calc(100% + 10px);
    margin-left: -5px;
    display: inline-block;
    position: relative;
    overflow-x: none;  
    
    @media screen and (max-width: 991px) {
        margin-top: 5px;
    }
`

export const ProjNameSection = styled.div`
    @media screen and (max-width: 991px) {     
    }
`

export const Boxed = styled.div`
    width: 30%;
    transition: all .5s ease-in-out;
    z-index: 2;
    text-align: left;
    position: sticky;
    display: block;

    ${({ difference }) => (difference ? `
        mix-blend-mode: difference;
    ` : '')}

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        padding-left: 5px;
        height: 50px;
    }
`

export const Name = styled(Boxed)`
    width: 80%;
    top: 3vh;
    z-index: 9;
    cursor: default;
    margin-top: -30px;

    @media screen and (max-width: 991px) {
        margin-top: 10px;
    }
`

export const Description = styled(Boxed)`
    top: 1.75em;
    padding-right: 90px;
    margin-left: 25%;    
    margin-top: -80px;

    @media screen and (max-width: 1500px) {
        padding-right: 20px;
        margin-left: 26.25%;   
    }

    @media screen and (max-width: 991px){
        width: 100%;
        text-align: right;
        margin-top: -55px;
        padding-right: 0;
        padding-left: 1.35em;
        margin-left: 0;
        padding-top: 30px;
        height: 100px;
        position: static;
    }
`

export const Tags = styled(Boxed)`
    top: 1.75em;
    padding-right: 90px;  
    margin-left: 55%;  
    margin-top: -80px;

    @media screen and (max-width: 1500px) {
        padding-right: 50px;
        margin-left: 56.4%;  
    }

    @media screen and (max-width: 991px){
        width: 100%;
        margin-top: -30px;
        margin-left: 1.05em;  
        padding-right: 0;
        padding-top: 0;
        height: 60px;
        position: static;       
        text-align: left;
        margin-bottom: 1.25em;
        opacity: 0.5;
    }
`

export const TextWrapper = styled.span`
    text-decoration: none;
    color: #000;
    width: 100%;
    display: inline-block;
    pointer-events: all;
    padding: 0vh 4em 0vh 0.5vh;
    position: relative;

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
    margin-left: -1px;
    color: #d8d8d8;
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0.63em;
    transition: all .3s ease-in-out;
    display: inline;
    vertical-align: top;
    margin-left: 55px;

    @media screen and (max-width: 1500px) {
        line-height: 1em;
        font-size: 2.4em;
    }

    @media screen and (max-width: 991px) {
        font-size: 2.5em;  
        margin-left: 0;
        vertical-align: middle;
    }
`

export const SubText = styled.h4`
    color: #999;
    font-size: 1.5em;  
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    letter-spacing: 0;
    line-height: 1.25em;
    margin-top: 0.20em;
    transition: all .3s ease-in-out;
`

export const IText = styled.h4`
    color: #666;
    font-size: 1.1em;  
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    letter-spacing: 0;
    font-style: italic;
    line-height: 1.15em;
    margin-top: 0.3em;
    transition: all .3s ease-in-out;
`

export const ButtonText = styled.a`
    padding: 4px 10px 4px 11px;
    margin-top: -6px;
    border-radius: 12px;  
    position: absolute;
    text-decoration: none;
    font-size: 0.9em;
    line-height: 1.9em;
    font-weight: 400; 
    transition: all .3s ease-in-out;
    outline: 1px solid #d8d8d8;
    outline-offset: -1px;
    cursor: pointer;
    vertical-align: top;
    margin-left: 8px;
    display: inline;
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
        /* line-height: 2em; */
        margin-right: 0.1em;
        margin-top: -2px;
    }
`

//containers
//containers
//containers
//containers

export const GalleryWrapper = styled.div`
    width: 100%;
    display: inline-block;
`

export const BaseImg = styled.img`
    border-radius: ${rad};
    object-fit: cover;
    text-align: right;
    padding: 0.5vh;    
    display: block;
    float: left;
    opacity: 1;
    position: relative;

    @media screen and (max-width: 991px) {
        width: 100%;       
    }
`

export const Img100 = styled(BaseImg)`
    width: 100%;
    height: 77vh;
    height: ${({ customHeight }) => (customHeight)}; 
    border-radius: calc(${rad} + 4px);
    
    ${({ screenShot }) => (screenShot ? `
        padding: 50px;
        object-fit: contain;
        background-color: #121212;
        height: 100%;
        border-radius: ${rad};
    ` : '')}

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const Img100100 = styled(BaseImg)`
    width: 100%;
    height: 77vh;

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`


export const Img100Fill = styled(BaseImg)`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 100%;
    }
`

export const Img100Art = styled(BaseImg)`
    width: 1705px;
    padding: 0px 690px 0px 0px;
    padding: ${({ customPad }) => (customPad)};
    height: ${({ customHeight }) => (customHeight)};
    overflow: hidden;

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 100%;    
    }
`

export const Img50 = styled(BaseImg)`
    width: 50%;
    width: ${({ customWidth }) => (customWidth)};
    height: 40vh;
    height: ${({ customHeight }) => (customHeight)};
    object-fit: cover;
    border-radius: calc(${rad} + 4px);

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 24.5em;
    }
`

export const Img66 = styled(BaseImg)`
    width: 66.66%;
    height: 77vh;
    height: ${({ shorten }) => (shorten ? '45vh' : '77vh')};
    padding: ${({ editPadding }) => (editPadding)}; 

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const Img33 = styled(BaseImg)`
    width: 33.33%;
    height: 45vh;    

    @media screen and (max-width: 991px) {
        width: 50%;
    }
`

export const Img33100 = styled(BaseImg)`
    width: 33.33%;
    height: 40vh;
    border-radius: calc(${rad} + 4px);

    @media screen and (max-width: 991px) {
        width: 100%;        
        height: 22em;
    }
`

export const Img25 = styled(BaseImg)`
    width: 25%;
    height: 45vh;   

    @media screen and (max-width: 991px) {
        width: 50%;
        height: 28em;
    }
`

export const ImgSS = styled(BaseImg)`
    width: 100%;
    height: 100%;
    padding: 0.75em;
    object-fit: contain;
    background-color: ${({ backdrop }) => (backdrop)}; 

    ${({ addpad }) => (addpad ? `
        padding: 1.25em;
    ` : '')}

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 100%;    
        padding: 0.5em;
    }
`

export const ImgSSFill = styled(ImgSS)`
    padding: 0px;    
    object-fit: cover;
`

export const SSWrapper = styled.div`
    object-fit: cover;
    text-align: right;
    float: left;
    opacity: 1;
    padding:0.5vh;
    position: relative;
    width: 66.66%;
    height: 40vh;

    ${({ fill100 }) => (fill100 ? `
    width: 100%;
    ` : '')}

    ${({ fill50 }) => (fill50 ? `
        width: 50%;
        ` : '')}
    
    height: ${({ customHeight }) => (customHeight)};
    width: ${({ customWidth }) => (customWidth)};

    @media screen and (max-width: 991px) {
        width: 100.75%;
        height: 28em;
    }
`

export const OneWrapper = styled.div`

`

//

export const OtherWorkImg = styled(Img25)`
    cursor: pointer;
    transition: 0.2s;
    display: ${({ justMobile }) => (justMobile ? `none` : `block`)};

    &:hover {
        opacity: 0.8;
        padding: 0.75vh;    
    }

    @media screen and (max-width: 1500px) {
        height: 17em;        
    }

    @media screen and (max-width: 991px) {
        height: 12em;        
        display: ${({ justDesktop }) => (justDesktop ? `none` : `block`)}
    }
`

export const OtherWorkImgMobi = styled(OtherWorkImg)`
    display: none;
    
    @media screen and (max-width: 991px) {
        display: block;
    }
`

/////////////////////////////////////////

export const VModule = styled.div`
    width: 100%;
    width: ${({ giveWidth }) => (giveWidth)};
    height: 55vh;
    height: ${({ giveHeight }) => (giveHeight)};
    padding: 0.5vh;
    display: block;
    float: left;
    position: relative;
    
    @media screen and (max-width: 991px) {
        width: 100%;
        transform: translate3d(0, 0, 0);
        height: ${({ pad }) => (pad ? '28em' : '26em')};
    }
`

export const VModule50 = styled(VModule)`
    width: 50%;
    height: 77vh;
`

export const VModule66 = styled(VModule)`
    width: 66.66%;
`

export const VModule33 = styled(VModule)`
    width: 33.33%;
`

export const VModule100 = styled(VModule)`
    width: 100%;
`

export const VContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${rad};
    overflow: hidden;
    background-color: ${({ customColor }) => (customColor)};    
    transform: translate3d(0, 0, 0);
`

export const VWrapper = styled.div`
    width: 100%;
    height: ${({ fill }) => (fill ? '' : '100%')};
    padding: ${({ pad, small }) => (pad ? (small ? '1em' : '2em') : '0')};
    vertical-align: middle;

    @media screen and (max-width: 991px) {
        padding: ${({ pad }) => (pad ? '0.5em' : '0')};
        width: ${({ pad }) => (pad ? '' : '190%')};
        margin-left: ${({ pad }) => (pad ? '' : '-45%')};
    }
`

export const SingleVideoHelper = styled.div`
    width: 106.1vh;
    display: block;
    position: relative;
`

//divisor
//divisor
//divisor
//divisor

export const DivisorSection = styled.div`
    width: 100%;
    height: 40vh;
    padding: 0.5vh;
    display: block;
    float: left;
    position: relative;
    
    @media screen and (max-width: 991px) {
        height: 16em;
    }
`

export const DivisorContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${rad};
    overflow: hidden;
    transition: 0.2s;
    background-color: ${({ accentColor }) => (accentColor)};
`

export const DivisorWrapper = styled.div`
    width: 60%;
    margin-left: 20%;
    height: ${({ fill }) => (fill ? '' : '100%')};
    padding: ${({ pad }) => (pad ? '50px' : '0')};
    vertical-align: middle;
    display: flex;
    align-items: center;
    color: #171717;

    @media screen and (max-width: 991px) {
        width: 98%;
        margin-left: 1%;
        margin-top: 0.25em;
    }
`

export const Mimg = styled.img`
    width: 25%;
    flex: 25%;
    object-fit: cover;
    text-align: right; 
    display: block;
    float: left;
    opacity: 1;
    position: relative;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform:translateY(-10px);
    }
`

///Interactive logo
///Interactive logo
///Interactive logo
export const InteractiveSection = styled.div`
    width: 33.33%;
    height: 40vh;
    padding: 0.5vh;
    display: block;
    float: left;
    position: relative;

    @media screen and (max-width: 991px) {
        width: 100%;        
        height: 20em;
    }
`

export const InteractiveSecContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: ${rad};
    overflow: hidden;
    background-color: ${({ customColor }) => (customColor)};
`

export const InteractiveSecWrapper = styled.div`
    background: ${({ customColor }) => (customColor)};
    height: 100%;
    width: 100%;
    transition: all .3s ease-in-out; 
    position: relative;
`

export const DigidenSecWrapper = styled.div`
    background: radial-gradient(circle, rgba(223,254,28,1) 40%, rgba(253,249,240,1) 71%, rgba(253,249,240,1) 100%);
    height: 104%;
    width: 100%;
    transition: all .3s ease-in-out;
    position: relative;

    &:hover{
        margin-top: 15%;
        height: 77.5%;
    }

    @media screen and (max-width: 991px) {
        &:hover{
            margin-top: 0%;
            height: 100%;
        }   
    }
`

export const IntLogo = styled.img`
    width: 100%;
    padding: 0px 50px;
    position: absolute;
    top: 45%;
    z-index: 10;
    pointer-events: none;
    transition: all .3s ease-in-out;
    
    @media screen and (max-width: 991px) {
        top: 39%;
    }
`

export const LomaLogo = styled(IntLogo)`
    padding: 0px 40px;
    top: 40%;

    @media screen and (max-width: 991px) {
        top: 33%;
        padding: 0px 80px;
    }
`

export const EarthLogo = styled(IntLogo)`
    padding: 0 20%;
    top: 28.5%;
    pointer-events: all;

    &:hover:nth-child(2) {
        transform: rotate(45deg);
    }

    @media screen and (max-width: 991px) {
        top: 12%;
    }
`

export const AnaquelLogo = styled(IntLogo)`
    padding: 0;
    margin: 0 10%;
    width: 80%;
    top: 43%;
    pointer-events: all;

    &:hover:nth-child(2) {
        transform: rotate(45deg);
    }

    @media screen and (max-width: 991px) {
        top: 36%;
    }
`

export const FillTall = styled(IntLogo)`
    padding: 0px 0px;
    top: 0;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 991px) {
        top: 33%;
    }
`

//

export const OtherTextWrapper = styled.div`
    width: 25%;
    display: inline-block;
    overflow: hidden;
    padding: 0 1em 0 0.2em;

    @media screen and (max-width: 991px) {
        width: 50%;
    }
`

export const OtherText = styled.h4`
    font-size: 1.4em;
    color: #d8d8d8;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.25em;
    margin-top: 0.20em;
    transition: all .3s ease-in-out;
    
    @media screen and (max-width: 1500px) {
        font-size: 1.1em;
        line-height: 1.1em;
    }
`

export const OtherTag = styled(OtherText)`
    color: #797979;
`

export const OtherId = styled.a`
    font-size: 1.2em;
    color:  ${({ isLink }) => ( isLink ? '#797979' : '#000')};
    background-color: ${({ isLink }) => ( isLink ? '#000' : '#797979')};
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.25em;
    margin-top: 0.20em;
    transition: all .3s ease-in-out;
    padding: 0.2em 0.5em;
    border-radius: ${rad};
    display: inline-block;
    cursor: ${({ isLink }) => ( isLink ? 'pointer' : 'default')};
    text-decoration: none;
    border: ${({ isLink }) => ( isLink ? '1px solid #797979' : '')};

    &:hover {
        color: ${({ isLink }) => ( isLink ? '#000' : '')};
        background-color: ${({ isLink }) => ( isLink ? '#959595' : '')};
    }
    
    @media screen and (max-width: 1500px) {
        font-size: 1.1em;
        line-height: 1.1em;
    }
`


export const DescriptionWrapper = styled.div`
    padding: 0 0.25em;
    z-index: 1;
`

export const PackWrapper = styled.div`
    width: 100%;
    display: inline-block;
`

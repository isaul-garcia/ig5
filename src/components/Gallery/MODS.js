import React from 'react'
import { Info } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    ProjNameSection,
    IndicatorHelper,
    Img100
} from './Gallery.elements';

import Image1 from '../../assets/mods1.png'
import Image2 from '../../assets/mods2.png'
import Image3 from '../../assets/mods3.png'
import Image4 from '../../assets/mods4.png'
import Image5 from '../../assets/mods5.png'
import Image6 from '../../assets/mods6.png'
import Image7 from '../../assets/mods7.png'
import Image8 from '../../assets/mods8.png'
import Image9 from '../../assets/mods9.png'
import Image10 from '../../assets/mods10.png'
import Image11 from '../../assets/mods11.png'
import Image12 from '../../assets/mods12.png'
import { MediumSpacer, TextContainer, SubText } from '../../globalStyles';

const Gallery = () => {
    return (
        <>
            <Info />
            <MediumSpacer />
            <ProjectContainer>
                <IndicatorHelper id="treehouse" />
                <ProjNameSection />
                <Name>
                    <TextWrapper>
                        <HeadText>MODs</HeadText>
                    </TextWrapper>
                </Name>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Modular urban intervention for the future of smart cities</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Architecture</SubText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <Img100 customHeight={'55vh'} src={Image1} />
                    <Img100 customHeight={'45vh'} src={Image2} />
                    <Img100 customHeight={'60vh'} src={Image11} />
                    <SSWrapper customWidth={'50%'} customHeight={'50vh'} >
                        <ImgSS backdrop={'#555'} src={Image4} />
                    </SSWrapper>
                    <SSWrapper customWidth={'50%'} customHeight={'50vh'} >
                        <ImgSS backdrop={'#555'} src={Image3} />
                    </SSWrapper>
                    <Img100 customHeight={'70vh'} src={Image12} />
                    <SSWrapper customWidth={'66.66%'} customHeight={'50vh'} >
                        <ImgSS backdrop={'#222'} src={Image7} />
                    </SSWrapper>
                    <SSWrapper customWidth={'33.33%'} customHeight={'50vh'}>
                        <ImgSS backdrop={'#222'} src={Image6} />
                    </SSWrapper>  
                    <Img50 customHeight={'20vh'} customWidth={'100%'} src={Image8} />
                    <Img50 customHeight={'30vh'} customWidth={'33.33%'} src={Image9} />
                    <Img50 customHeight={'30vh'} customWidth={'66.66%'} src={Image5} />
                    <Img50 customHeight={'30vh'} customWidth={'100%'} src={Image10} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
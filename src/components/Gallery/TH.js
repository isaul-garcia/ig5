import React from 'react'
import { Info } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Img33100,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    ProjNameSection,
    IndicatorHelper,
    Img100
} from './Gallery.elements';

import Image1 from '../../assets/th1.jpg'
import Image2 from '../../assets/th2.png'
import Image3 from '../../assets/th3.png'
import Image4 from '../../assets/th4.png'
import Image5 from '../../assets/th5.jpg'
import Image6 from '../../assets/th6.jpg'
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
                        <HeadText>:treehouse</HeadText>
                    </TextWrapper>
                </Name>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Self-mantained short term rental network</SubText>
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
                    <SSWrapper>
                        <ImgSS backdrop={'#8b8b8b'} src={Image3} />
                    </SSWrapper>
                    <Img33100 src={Image2} />                    
                    <Img50 customHeight={'35vh'} src={Image6} />
                    <Img50 customHeight={'35vh'} src={Image5} />
                    <Img100 customHeight={'60vh'} src={Image4} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
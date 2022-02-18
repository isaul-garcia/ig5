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

import Image1 from '../../assets/roca1.jpg'
import Image2 from '../../assets/roca2.jpg'
import Image3 from '../../assets/roca3.jpg'
import Image4 from '../../assets/roca4.jpg'
import Image5 from '../../assets/roca5.png'
import Image6 from '../../assets/roca6.png'
import Image7 from '../../assets/roca7.png'
import Image8 from '../../assets/roca9.jpg'
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
                        <HeadText>Roca</HeadText>
                    </TextWrapper>
                </Name>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Parametrically designed elementary school</SubText>
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
                    <Img100 customHeight={'72vh'} src={Image2} />
                    <SSWrapper fill100={true} customHeight={'50vh'} >
                        <ImgSS backdrop={'#555'} src={Image3} />
                    </SSWrapper>
                    <Img50 customHeight={'29vh'} customWidth={'100%'} src={Image6} />
                    <SSWrapper fill50={true} customHeight={'50vh'} >
                        <ImgSS backdrop={'#222'} src={Image4} />
                    </SSWrapper>
                    <SSWrapper fill50={true} customHeight={'50vh'}>
                        <ImgSS backdrop={'#222'} src={Image5} />
                    </SSWrapper>                   
                    <Img50 customHeight={'32vh'} customWidth={'100%'} src={Image7} />
                    <Img100 customHeight={'60vh'} src={Image8} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
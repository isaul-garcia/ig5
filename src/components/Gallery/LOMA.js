import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    ButtonText,
    InteractiveSection,
    InteractiveSecContainer,
    InteractiveSecWrapper,
    LomaLogo,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image1 from '../../assets/loma-website02B.webp'
import Image2 from '../../assets/loma-website03.webp'
import Image3 from '../../assets/loma3.webp'
import { MediumSpacer, TextContainer, SubText } from '../../globalStyles';
import { Info } from '..';

const Gallery = () => {

    return (
        <>
            <Info />
            <MediumSpacer />
            <ProjectContainer>
                <IndicatorHelper id="loma" />
                <ProjNameSection />
                <Name>
                    <TextWrapper>
                        <HeadText>Loma</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/loma/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Customizable product website prototype.</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Frontend<br/>Three.js, React Color</SubText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SSWrapper>
                        <ImgSS backdrop={'#a2a2a2'} src={Image1} />
                    </SSWrapper>
                    <InteractiveSection>
                        <InteractiveSecContainer customColor={'#1a1a1a'}>
                            <InteractiveSecWrapper>
                                <LomaLogo src={Image3} />
                            </InteractiveSecWrapper>
                        </InteractiveSecContainer>
                    </InteractiveSection>
                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#111'} src={Image2} />
                    </SSWrapper>
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
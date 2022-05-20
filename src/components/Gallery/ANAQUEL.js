import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    TextWrapper,
    HeadText,
    ButtonText,
    SSWrapper,
    ImgSS,
    InteractiveSection,
    InteractiveSecContainer,
    InteractiveSecWrapper,
    AnaquelLogo,
    ProjNameSection,
    IndicatorHelper,
    SingleVideoHelper
} from './Gallery.elements';
import { MediumSpacer, TextContainer, SubText, FullContainer } from '../../globalStyles'

import Image2 from '../../assets/anaquel-2-ss.jpg'
import Image3 from '../../assets/anaquel-logos-03.svg'
import { Info } from '..';

const Gallery = () => {

    return (
        <>
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="anaquel" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Anaquel</HeadText>
                            <ButtonText disabled={true}>WIP</ButtonText>
                        </TextWrapper>
                    </Name>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Bookmark manager and Chrome extension.</SubText>
                        </TextWrapper>
                    </TextContainer>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Chrome API</SubText>
                        </TextWrapper>
                    </TextContainer>

                    <MediumSpacer />

                    <GalleryWrapper>
                        <SingleVideoHelper />
                        <SSWrapper>
                            <ImgSS backdrop={'#aaa'} src={Image2} />
                        </SSWrapper>
                        <InteractiveSection>
                            <InteractiveSecContainer customColor={'#22cf'}>
                                <InteractiveSecWrapper>
                                    <AnaquelLogo src={Image3} />
                                </InteractiveSecWrapper>
                            </InteractiveSecContainer>
                        </InteractiveSection>
                    </GalleryWrapper>
                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
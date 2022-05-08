import React from 'react';
import { Info, VideoModule } from '..';
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
    EarthLogo,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image2 from '../../assets/earthfo1.webp'
import Image3 from '../../assets/earth-logo-light-green-letters-01.svg'
import Image4 from '../../assets/earth-logo-light-green-globe-01.svg'
import { MediumSpacer, TextContainer, SubText, FullContainer } from '../../globalStyles'

const Gallery = () => {

    return (
        <>
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="earth" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Here on Earth</HeadText>
                            <ButtonText href="https://isaul-garcia.github.io/earthfo/" target="_blank">mock-up ↗</ButtonText>
                        </TextWrapper>
                    </Name>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Informational website prototype.</SubText>
                        </TextWrapper>
                    </TextContainer>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Frontend | Victory, Three.js</SubText>
                        </TextWrapper>
                    </TextContainer>

                    <MediumSpacer />

                    <GalleryWrapper>
                        <SSWrapper>
                            <ImgSS backdrop={'#dcdbdd'} src={Image2} />
                        </SSWrapper>
                        <InteractiveSection>
                            <InteractiveSecContainer customColor={'#22cf57'}>
                                <InteractiveSecWrapper>
                                    <EarthLogo src={Image4} />
                                    <EarthLogo src={Image3} />
                                </InteractiveSecWrapper>
                            </InteractiveSecContainer>
                        </InteractiveSection>
                        <VideoModule
                            giveWidth={'100%'}
                            pad={true}
                            customColor={'#dcdbdd'}
                            videoURL={'./Videos/earth2s.mp4'}
                        />
                    </GalleryWrapper>
                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
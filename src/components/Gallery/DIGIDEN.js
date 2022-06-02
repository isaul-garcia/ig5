import React from 'react';
import { Info, VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    IntLogo,
    Name,
    TextWrapper,
    HeadText,
    ButtonText,
    SSWrapper,
    ImgSS,
    InteractiveSection,
    InteractiveSecContainer,
    DigidenSecWrapper,
    ProjNameSection,
    IndicatorHelper,
    SingleVideoHelper
} from './Gallery.elements';

import Image1 from '../../assets/5digiden-01.webp'
import Image2 from '../../assets/digiden-type.svg'
import { MediumSpacer, TextContainer, SubText, FullContainer } from '../../globalStyles';

const Gallery = () => {
    return (
        <>
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="digiden" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Digiden</HeadText>
                            <ButtonText href="https://isaul-garcia.github.io/digiden/" target="_blank">Link ↗</ButtonText>
                        </TextWrapper>
                    </Name>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Tech news website prototype.</SubText>
                        </TextWrapper>
                    </TextContainer>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Frontend</SubText>
                        </TextWrapper>
                    </TextContainer>

                    <MediumSpacer />

                    <GalleryWrapper>
                        <SingleVideoHelper />
                        <SSWrapper>
                            <ImgSS backdrop={'#dcd5c7'} src={Image1} />
                        </SSWrapper>
                        <InteractiveSection>
                            <InteractiveSecContainer customColor={'#fdf9f0'}>
                                <DigidenSecWrapper />
                                <IntLogo src={Image2} />
                            </InteractiveSecContainer>
                        </InteractiveSection>
                        <VideoModule
                            giveWidth={'100%'}
                            pad={true}
                            customColor={'#e9e4dc'}
                            videoURL={'./Videos/digiden1s.mp4'}
                        />
                    </GalleryWrapper>

                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
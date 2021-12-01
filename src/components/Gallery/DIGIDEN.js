import React from 'react';
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    IntLogo,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
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

const Gallery = ({ scrolledDown }) => {
    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="digiden" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Digiden</HeadText>
                        <ButtonText scrolledDown={scrolledDown} href="https://isaul-garcia.github.io/digiden/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Tech news website prototype.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Front End Development</SubText>
                    </TextWrapper>
                </Tags>


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
        </>
    )
}

export default Gallery;
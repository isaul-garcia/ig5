import React from 'react';
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
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
    InteractiveSecWrapper,
    EarthLogo,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image2 from '../../assets/earthfo1.webp'
import Image3 from '../../assets/earth-logo-light-green-letters-01.svg'
import Image4 from '../../assets/earth-logo-light-green-globe-01.svg'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="earth" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Here on Earth</HeadText>
                        <ButtonText scrolledDown={scrolledDown} href="https://isaul-garcia.github.io/earthfo/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Informational website prototype.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Front End Development<br/>Victory, Three.js</SubText>
                    </TextWrapper>
                </Tags>

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
        </>
    )
}

export default Gallery;
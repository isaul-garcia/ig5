import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
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

import Image1 from '../../assets/loma-website02B.jpg'
import Image2 from '../../assets/loma-website03.jpg'
import Image3 from '../../assets/loma3.png'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="loma" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Loma</HeadText>
                        <ButtonText scrolledDown={scrolledDown} href="https://isaul-garcia.github.io/loma/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Customizable product website prototype.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Front End Development</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <SSWrapper>
                        <ImgSS backdrop={'#bdbdbd'} src={Image1} />
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
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

import Image2 from '../../assets/anaquel-ss-dark.jpg'
import Image3 from '../../assets/anaquel-logos-03.svg'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="anaquel" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Anaquel</HeadText>
                        <ButtonText scrolledDown={scrolledDown} disabled={true}>WIP</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Bookmark manager and Chrome extension.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Front End Development</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <SingleVideoHelper style={{ width: "89vw" }}/>
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
        </>
    )
}

export default Gallery;
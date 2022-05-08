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
    ProjNameSection,
    IndicatorHelper,
    SingleVideoHelper,
    Img33100
} from './Gallery.elements';
import { MediumSpacer, TextContainer, SubText, FullContainer, MainText } from '../../globalStyles'

import Image2 from '../../assets/sw-place.jpg'
import Image3 from '../../assets/ballnet-red.jpg'
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
                            <HeadText>Someware</HeadText>
                            <ButtonText disabled={true}>WIP</ButtonText>
                        </TextWrapper>
                    </Name>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>An open source way to build your own phygital place</SubText>
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
                            <ImgSS backdrop={'#222'} src={Image2} />
                        </SSWrapper>
                        
                        <Img33100 src={Image3} />
                    </GalleryWrapper>

                    <MediumSpacer />
                    <TextWrapper>
                        <MainText>
                            With Someware, you'll be able to create your own phygital web place. At the moment, what that is remains a mystery to be explored. But from what we have until now, the goal is to create a project that intersects multiple tools to merge the physical and the digital world into a compatible experience. Mixing concepts from open source projects like Home Assistant and WebGL, to create an experience that encourages integration in an open manner, and ideally allows for a mix of mediums to interact with the same "phygital experience"... or in other words, creates an experience that can be interacted with throughout a multiplicity of devices.
                        </MainText>
                    </TextWrapper>

                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
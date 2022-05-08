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
    SingleVideoHelper,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image1 from '../../assets/gridy-ss.webp'
import { MediumSpacer, TextContainer, SubText, FullContainer } from '../../globalStyles';
import { Info } from '..';

const Gallery = () => {
    return (
        <>
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="gridy" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Gridy</HeadText>
                            <ButtonText href="https://isaul-garcia.github.io/gridy-spotify/" target="_blank">link ↗</ButtonText>
                        </TextWrapper>
                    </Name>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Generate covers grid from your currently listening playlist.</SubText>
                        </TextWrapper>
                    </TextContainer>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Fullstack<br />Spotify API, Axios</SubText>
                        </TextWrapper>
                    </TextContainer>

                    <MediumSpacer />

                    <GalleryWrapper>
                        <SingleVideoHelper />
                        <SSWrapper fill100={true}>
                            <ImgSS backdrop={'#131313'} src={Image1} style={{ border: "1px solid #333" }} />
                        </SSWrapper>
                    </GalleryWrapper>
                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
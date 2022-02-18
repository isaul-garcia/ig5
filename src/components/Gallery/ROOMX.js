import React from 'react';
import { Info, VideoModule } from '..';
import { MediumSpacer, TextContainer, SubText } from '../../globalStyles';
import {
    ProjectContainer,
    GalleryWrapper,
    ButtonText,
    Name,
    TextWrapper,
    HeadText,
    SingleVideoHelper,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

const Gallery = () => {

    return (
        <>
            <Info />
            <MediumSpacer />
            <ProjectContainer>
                <IndicatorHelper id="roomx" />
                <ProjNameSection />
                <Name>
                    <TextWrapper>
                        <HeadText>Room X</HeadText>
                        <ButtonText href="https://isauljosue.gitlab.io/isaul.garcia/room360x.html" target="_blank">link ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <TextContainer>
                    <TextWrapper>
                        <SubText>My quarantined reality: Merging my digital and physical life.</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Artwork</SubText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SingleVideoHelper />
                    <VideoModule
                        giveWidth={'100%'}
                        giveHeight={'52vh'}
                        fill={true}
                        customColor={'#a8a8a8'}
                        videoURL={'./Videos/roomx1s.mp4'}
                    />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
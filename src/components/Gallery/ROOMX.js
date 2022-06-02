import React from 'react';
import { Info, VideoModule } from '..';
import { MediumSpacer, TextContainer, SubText, FullContainer, MainText } from '../../globalStyles';
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
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="roomx" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Room X</HeadText>
                            <ButtonText href="https://isauljosue.gitlab.io/isaul.garcia/room360x.html" target="_blank">Link ↗</ButtonText>
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

                <MediumSpacer />
                <TextWrapper>
                    <MainText>
                        While I was working on my thesis, we were all hit with the pandemic. I couldn't help but visualize my experience throughout what I was trying to tackle itself, our "phygital" realities. I made a digital visualization of my room in Barcelona, mixing the furniture and my walls with virtual representations of what I was experiencing on the internet at the time. From virtual show posters, to virtual avatars, to zoom meetings. All existing in the melting reality that was the quarantine life.
                    </MainText>
                </TextWrapper>

            </FullContainer>
        </>
    )
}

export default Gallery;
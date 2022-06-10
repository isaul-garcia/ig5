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
import { MediumSpacer, TextContainer, SubText, FullContainer, MainText } from '../../globalStyles';
import { Info } from '..';
import VideoModule from './VideoModule';

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
                            <ButtonText href="https://isaul-garcia.github.io/gridy-spotify/" target="_blank">Link ↗</ButtonText>
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

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            Gridy generates a grid of music artworks based on the playlist that you're currently listening to, on Spotify. The project is currently limited to listed users, because the design doesn't comply with some of Spotify's guidelines. For example, needing to have the track names and artists visible, which ruins the intended design. So it's pending a redesign to allow public access.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <GalleryWrapper>
                    <VideoModule
                        pad
                        giveWidth={'100%'}
                        customColor={'#131313'}
                        videoURL={'./Videos/gridy-demo.mp4'}
                    />
                </GalleryWrapper>
            </ProjectContainer>
        </FullContainer>
        </>
    )
}

export default Gallery;
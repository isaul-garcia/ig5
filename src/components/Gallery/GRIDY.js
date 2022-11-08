import React from 'react';
import { Helmet } from 'react-helmet';
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
    IText
} from './Gallery.elements';

import Image1 from '../../assets/gridy-ss.webp'
import { MediumSpacer, TextContainer, SubText, MainText, SmallSpacer } from '../../globalStyles';
import VideoModule from './VideoModule';
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | Gridy</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Gridy</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/gridy-spotify/" target="_blank">
                            Link <BsLink45Deg color='#fff' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Generate covers grid from your currently listening playlist</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>Spotify API, Axios</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SingleVideoHelper />
                    <SSWrapper fill100={true}>
                        <ImgSS addpad backdrop={'#131313'} src={Image1} style={{ border: "1px solid #333" }} />
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
        </>
    )
}

export default Gallery;
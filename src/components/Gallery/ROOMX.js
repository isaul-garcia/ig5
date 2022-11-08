import React from 'react';
import { Helmet } from 'react-helmet';
import { VideoModule } from '..';
import { MediumSpacer, TextContainer, SubText, MainText, SmallSpacer } from '../../globalStyles';
import {
    ProjectContainer,
    GalleryWrapper,
    ButtonText,
    Name,
    TextWrapper,
    HeadText,
    SingleVideoHelper,
    ProjNameSection,
    IndicatorHelper,
    IText
} from './Gallery.elements';
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {

    return (
        <>
            <Helmet>
                <title>Isaúl García | Room X</title>
            </Helmet>
            <ProjectContainer>
                <IndicatorHelper id="roomx" />
                <ProjNameSection />
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Room X</HeadText>
                        <ButtonText href="https://isauljosue.gitlab.io/isaul.garcia/room360x.html" target="_blank">
                            Link <BsLink45Deg color='#fff' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>My quarantined reality: Merging my digital and physical life</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>Artwork</IText>
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
        </>
    )
}

export default Gallery;
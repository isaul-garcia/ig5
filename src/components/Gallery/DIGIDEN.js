import React from 'react';
import { Helmet } from 'react-helmet';
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    IntLogo,
    Name,
    TextWrapper,
    HeadText,
    ButtonText,
    SSWrapper,
    ImgSS,
    InteractiveSection,
    InteractiveSecContainer,
    DigidenSecWrapper,
    SingleVideoHelper,
    IText
} from './Gallery.elements';

import Image1 from '../../assets/5digiden-01.webp'
import Image2 from '../../assets/digiden-type.svg'
import { MediumSpacer, TextContainer, SubText, SmallSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | Digiden</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Digiden</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/digiden/" target="_blank">
                            Link <BsLink45Deg color='#fff' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Tech news website prototype</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>React</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SingleVideoHelper />
                    <SSWrapper>
                        <ImgSS backdrop={'#dcd5c7'} src={Image1} />
                    </SSWrapper>
                    <InteractiveSection>
                        <InteractiveSecContainer customColor={'#fdf9f0'}>
                            <DigidenSecWrapper />
                            <IntLogo src={Image2} />
                        </InteractiveSecContainer>
                    </InteractiveSection>
                    <VideoModule
                        giveWidth={'100%'}
                        pad={true}
                        customColor={'#e9e4dc'}
                        videoURL={'./Videos/digiden1s.mp4'}
                    />
                </GalleryWrapper>

            </ProjectContainer>
        </>
    )
}

export default Gallery;
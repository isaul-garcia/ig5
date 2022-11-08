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
    InteractiveSection,
    InteractiveSecContainer,
    InteractiveSecWrapper,
    LomaLogo,
    IText
} from './Gallery.elements';

import Image1 from '../../assets/loma-website02B.webp'
import Image2 from '../../assets/loma-website03.webp'
import Image3 from '../../assets/loma3.webp'
import { MediumSpacer, TextContainer, SubText, SmallSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | Loma</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Loma</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/loma/" target="_blank">
                            Link <BsLink45Deg color='#fff' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Customizable product website prototype</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>Three.js, React Color</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SSWrapper>
                        <ImgSS backdrop={'#a2a2a2'} src={Image1} />
                    </SSWrapper>
                    <InteractiveSection>
                        <InteractiveSecContainer customColor={'#1a1a1a'}>
                            <InteractiveSecWrapper>
                                <LomaLogo src={Image3} />
                            </InteractiveSecWrapper>
                        </InteractiveSecContainer>
                    </InteractiveSection>
                    <SSWrapper fill100={true}>
                        <ImgSS addpad backdrop={'#111'} src={Image2} />
                    </SSWrapper>
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
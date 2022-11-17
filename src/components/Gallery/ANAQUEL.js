import React from 'react';
import { Helmet } from 'react-helmet';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    TextWrapper,
    HeadText,
    ButtonText,
    SSWrapper,
    ImgSS,
    InteractiveSection,
    InteractiveSecContainer,
    InteractiveSecWrapper,
    AnaquelLogo,
    SingleVideoHelper,
    IText
} from './Gallery.elements';
import { MediumSpacer, TextContainer, SubText, SmallSpacer } from '../../globalStyles'
import Image2 from '../../assets/anaquel-2-ss.jpg'
import Image3 from '../../assets/anaquel_logo_v2_long.svg'
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | Anaquel</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Anaquel</HeadText>
                        <ButtonText href="https://anaquel.isaulgarcia.com" target="_blank">
                            Link <BsLink45Deg color='#888' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Bookmark manager and Chrome extension</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>React, MongoDB, Redux</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SingleVideoHelper />
                    <SSWrapper>
                        <ImgSS backdrop={'#1e1f21'} src={Image2} />
                    </SSWrapper>
                    <InteractiveSection>
                        <InteractiveSecContainer customColor={'#1f1e21'}>
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
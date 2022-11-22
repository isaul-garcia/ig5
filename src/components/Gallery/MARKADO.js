import React from 'react'
import { Helmet } from 'react-helmet';
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Img33100,
    Name,
    TextWrapper,
    HeadText,
    ButtonText,
    SSWrapper,
    ImgSS,
    IText
} from './Gallery.elements';

import Image1 from '../../assets/markado-home-b.webp'
import Image2 from '../../assets/mrkd5.webp'
import Image3 from '../../assets/5markado-03.webp'
import { MediumSpacer, TextContainer, SubText, SmallSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | Markado</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Markado</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/markado/" target="_blank">
                            Link <BsLink45Deg color='#888' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>E-Commerce website prototype</SubText>
                        <IText>React</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SSWrapper>
                        <ImgSS backdrop={'#a7caff'} src={Image1} />
                    </SSWrapper>
                    <Img33100 src={Image2} />
                    <Img50 src={Image3} />
                    <VideoModule
                        giveWidth={'50%'}
                        pad
                        small
                        giveHeight={'40vh'}
                        customColor={'#e7e789'}
                        videoURL={'./Videos/markado2s.mp4'}
                    />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
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
    SingleVideoHelper,
    Img33100,
    SubText,
    IText
} from './Gallery.elements';
import { MediumSpacer, TextContainer, MainText, ParagLink, SmallSpacer } from '../../globalStyles'
import Image2 from '../../assets/antillia_0.webp'
import Image3 from '../../assets/ballnet-red.jpg'
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {

    return (
        <>
            <Helmet>
                <title>Isaúl García | Antillias</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Antillias</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/antillias/" target="_blank">
                            Link <BsLink45Deg color='#fff' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>An open source way to build your own phygital place</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>Three.js, Arduino, IoT, Metaverse</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <SingleVideoHelper />
                    <SSWrapper>
                        <ImgSS backdrop={'#222'} src={Image2} />
                    </SSWrapper>

                    <Img33100 src={Image3} />
                </GalleryWrapper>

                <MediumSpacer />

                <TextWrapper>
                    <MainText>
                        <ParagLink href={'https://isaul-garcia.github.io/antillias/'} target={'_blank'}>Antillias</ParagLink> uses Someware principles. Where you'll be able to create your own phygital web place. At the moment, what that is remains a mystery to be explored. But from what we have until now, the goal is to create a project that intersects multiple tools to merge the physical and the digital world into a compatible experience. Mixing parts from open source projects like Home Assistant and WebGL, to create an experience that encourages integration in a secure and open manner when world building. Ideally it allows for a mix of mediums to interact with the same "phygital experience"... or in other words; create an experience that can be interacted with, throughout a multiplicity of devices.
                    </MainText>
                </TextWrapper>

                <MediumSpacer />
                <TextWrapper>
                    <MainText>
                        This project is the continuation of my thesis. Follow the links to check out more on the thesis <ParagLink href={'/#/blog/someware'} target={'_blank'}>final presentation</ParagLink>, and the entire  <ParagLink href={'https://isauljosue.gitlab.io/isaul.garcia/index.html'} target={'_blank'}>process documentation</ParagLink>.
                    </MainText>
                </TextWrapper>

            </ProjectContainer>
        </>
    )
}

export default Gallery;
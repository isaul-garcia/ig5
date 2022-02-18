import React from 'react'
import { Info, VideoModule } from '..';
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
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image1 from '../../assets/markado-home-b.webp'
import Image2 from '../../assets/mrkd5.webp'
import Image3 from '../../assets/5markado-03.webp'
import { MediumSpacer, TextContainer, SubText } from '../../globalStyles';

const Gallery = () => {
    return (
        <>
            <Info />
            <MediumSpacer />
            <ProjectContainer>
                <IndicatorHelper id="markado" />
                <ProjNameSection />
                <Name>
                    <TextWrapper>
                        <HeadText>Markado</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/markado/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <TextContainer>
                    <TextWrapper>
                        <SubText>E-Commerce website prototype.</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <SubText>Frontend</SubText>
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
                        pad={true}
                        giveHeight={'55vh'}
                        customColor={'#e7e789'}
                        videoURL={'./Videos/markado2s.mp4'}
                    />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
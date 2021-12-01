import React from 'react'
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Img33100,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
    ButtonText,
    SSWrapper,
    ImgSS,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image1 from '../../assets/markado-home-b.webp'
import Image2 from '../../assets/mrkd5.webp'
import Image3 from '../../assets/5markado-03.webp'

const Gallery = ({ scrolledDown }) => {
    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="markado" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Markado</HeadText>
                        <ButtonText scrolledDown={scrolledDown} href="https://isaul-garcia.github.io/markado/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>E-Commerce website prototype.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Front End Development</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <SSWrapper>
                        <ImgSS backdrop={'#a7caff'} src={Image1} />
                    </SSWrapper>
                    <Img33100 src={Image2} />
                    <Img50 src={Image3} />
                    <VideoModule
                        giveWidth={'50%'}
                        pad={true}
                        giveHeight={'77vh'}
                        customColor={'#e7e789'}
                        videoURL={'./Videos/markado2s.mp4'}
                    />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
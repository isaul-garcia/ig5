import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
    SSWrapper,
    ImgSS,
    ButtonText,
    SingleVideoHelper,
    ProjNameSection,
    IndicatorHelper
} from './Gallery.elements';

import Image1 from '../../assets/gridy-ss.jpg'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="loma" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Gridy</HeadText>
                        <ButtonText scrolledDown={scrolledDown} href="https://isaul-garcia.github.io/gridy-spotify/" target="_blank">link ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>An artworks grid from your currently listening playlist.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Front End Development</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <SingleVideoHelper style={{ width: "89vw" }}/>
                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#131313'} src={Image1}  style={{ border: "1px solid #333" }}/>
                    </SSWrapper>
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
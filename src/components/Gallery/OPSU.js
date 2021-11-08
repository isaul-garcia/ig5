import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Img100Fill,
    Img50,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
} from './Gallery.elements';

import Image2 from '../../assets/opsu2.jpg'
import Image3 from '../../assets/opsu3.jpg'
import Image4 from '../../assets/opsu4.jpg'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>OPSU</HeadText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Phone ecosystem design.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Design, Interface</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <Img100Fill src={Image2} />
                    <Img50 src={Image3} />
                    <Img50 src={Image4} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
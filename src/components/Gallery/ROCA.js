import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Img100Fill,
    Img66,
    Img33,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
} from './Gallery.elements';

import Image1 from '../../assets/roca1.jpg'
import Image3 from '../../assets/roca6.png'
import Image4 from '../../assets/roca8A.png'
import Image5 from '../../assets/roca8B.png'
import Image6 from '../../assets/roca4.jpg'
import Image8 from '../../assets/roca5B.png'
import Image9 from '../../assets/roca9.jpg'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>ROCA Escuela Elemental</HeadText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>School designed through parametric design.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Architecture</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <Img66 src={Image1} />
                    <Img33 src={Image4} />
                    <Img33 src={Image5} />
                    <Img100Fill src={Image3} />
                    <Img66 src={Image6} />
                    <Img33 src={Image8} />
                    <Img33 src={Image9} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
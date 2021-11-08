import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Img100,
    Img100Fill,
    Img50,
    Img66,
    Img33,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
} from './Gallery.elements';

import Image1 from '../../assets/mods1.jpg'
import Image2 from '../../assets/mods16.png'
import Image3 from '../../assets/mods14.png'
import Image4 from '../../assets/mods15.png'
import Image5 from '../../assets/mods11.png'
import Image8 from '../../assets/mods18.png'
import Image9 from '../../assets/mods19.png'
import Image10 from '../../assets/mods20.png'

const Gallery = ({ scrolledDown }) => {
    return (
        <>
            <ProjectContainer>
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>MODs</HeadText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Urban public computing system.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Architecture, Interface</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <Img100 src={Image1} />
                    <Img100Fill src={Image2} />
                    <Img50 src={Image3} />
                    <Img50 src={Image4} />
                    <Img100 src={Image5} />
                    <Img66 src={Image9} />
                    <Img33 src={Image8} />
                    <Img33 src={Image10} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
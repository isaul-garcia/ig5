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

import Image1 from '../../assets/sw1.jpg'
import Image6 from '../../assets/pcpww1.jpg'
import Image7 from '../../assets/pcpww2.jpg'
import Image8 from '../../assets/sw4.png'
import Image9 from '../../assets/ballroom.jpg'
import Image10 from '../../assets/sw-sensors.jpg'

const Gallery = ({scrolledDown}) => {

    return (
        <>
            <ProjectContainer>
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Someware</HeadText>              
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Exploring place computing.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Development, Research</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <Img66 src={Image1} />
                    <Img33 src={Image6} />
                    <Img33 src={Image7} />
                    <Img33 src={Image8} />
                    <Img33 src={Image9} />
                    <Img100Fill src={Image10} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
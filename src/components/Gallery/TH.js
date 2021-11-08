import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Img66,
    Img33100,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
} from './Gallery.elements';

import Image1 from '../../assets/th1.jpg'
import Image2 from '../../assets/th2.png'
import Image3 from '../../assets/th5.jpg'
import Image4 from '../../assets/th6.jpg'
import Image5 from '../../assets/th3b.png'
import Image6 from '../../assets/th4.png'

const Gallery = ({ scrolledDown }) => {

    return (
        <>
            <ProjectContainer>
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>:treehouse</HeadText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Smart short term rental network.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Architecture, Interface</SubText>
                    </TextWrapper>
                </Tags>

                <GalleryWrapper>
                    <Img66 src={Image1} />
                    <Img33100 src={Image2} />
                    <Img50 src={Image3} />
                    <Img50 src={Image4} />
                    <Img50 src={Image5} />
                    <Img50 src={Image6} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
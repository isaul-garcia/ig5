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
    ProjNameSection,
    OtherWorkImg,
    OtherTextWrapper,
    OtherText,
    OtherTag
    } from './Gallery.elements';

import Image1 from '../../assets/sq_roca.png'
import Image2 from '../../assets/graphx-nav-sq.png'
import Image3 from '../../assets/mods19bc3.jpg'
import Image4 from '../../assets/sq_sw.png'

const Gallery = ({scrolledDown}) => {
    return (
        <>
            <ProjectContainer>        
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Other Work</HeadText>                                  
                    </TextWrapper>
                </Name>                
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}></SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}></SubText>
                    </TextWrapper>
                </Tags>


                <GalleryWrapper>    
                    <OtherTextWrapper>
                        <OtherText>Someware</OtherText>
                        <OtherTag>Experimenting on the phygital web.</OtherTag>
                    </OtherTextWrapper>
                    <OtherTextWrapper>
                        <OtherText>MODs</OtherText>
                        <OtherTag>Modular urban intervention for the future of smart cities.</OtherTag>
                    </OtherTextWrapper>
                    <OtherWorkImg justMobile={true} src={Image4} /> 
                    <OtherWorkImg justMobile={true} src={Image3} /> 
                    <OtherTextWrapper>
                        <OtherText>Roca School</OtherText>
                        <OtherTag>Parametrically designed elementary school.</OtherTag>
                    </OtherTextWrapper>
                    <OtherTextWrapper>
                        <OtherText>Artwork</OtherText>
                        <OtherTag>I also like to draw and make digital art.</OtherTag>
                    </OtherTextWrapper>
                    <OtherWorkImg justDesktop={true} src={Image4} /> 
                    <OtherWorkImg justDesktop={true} src={Image3} /> 
                    <OtherWorkImg src={Image1} /> 
                    <OtherWorkImg src={Image2} /> 
                </GalleryWrapper>

            </ProjectContainer>
        </>
    )
}

export default Gallery;
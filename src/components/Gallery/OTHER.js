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
    OtherTag,
    OtherId,
} from './Gallery.elements';

import Image1 from '../../assets/sq_roca.webp'
import Image2 from '../../assets/graphx-nav-sq.webp'
import Image3 from '../../assets/mods19bc3.webp'
import Image4 from '../../assets/sq_sw.webp'

const Gallery = () => {
    return (
        <>
            <ProjectContainer>
                <ProjNameSection />
                <Name>
                    <TextWrapper>
                        <HeadText>Other Work</HeadText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText></SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText></SubText>
                    </TextWrapper>
                </Tags>


                <GalleryWrapper>
                    <OtherTextWrapper>
                        <OtherText>Someware</OtherText>
                        <OtherTag>Experimenting on the phygital web.</OtherTag>
                        <OtherId>MA</OtherId>
                        <OtherId isLink={true} href="https://isauljosue.gitlab.io/isaul.garcia/" target="_blank">Repo ↗</OtherId>
                    </OtherTextWrapper>
                    <OtherTextWrapper>
                        <OtherText>MODs</OtherText>
                        <OtherTag>Modular urban intervention for the future of smart cities.</OtherTag>
                        <OtherId>BA</OtherId>
                    </OtherTextWrapper>
                    <OtherWorkImg justMobile={true} src={Image4} />
                    <OtherWorkImg justMobile={true} src={Image3} />
                    <OtherTextWrapper>
                        <OtherText>Roca School</OtherText>
                        <OtherTag>Parametrically designed elementary school.</OtherTag>
                        <OtherId>BA</OtherId>
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
import React from 'react';
import {
    ProjectContainer,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
    ButtonText,
    ProjNameSection,
    IndicatorHelper,
} from './Gallery.elements';

// import Image1 from '../../assets/5digiden-01.webp'
// import Image2 from '../../assets/digiden-type.svg'

const Gallery = ({ scrolledDown }) => {
    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id="digiden" />
                <ProjNameSection scrolledDown={scrolledDown} />
                <Name>
                    <TextWrapper>
                        <HeadText scrolledDown={scrolledDown}>Digiden</HeadText>
                        <ButtonText scrolledDown={scrolledDown} href="https://isaul-garcia.github.io/digiden/" target="_blank">mock-up ↗</ButtonText>
                    </TextWrapper>
                </Name>
                <Description>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Tech news website prototype.</SubText>
                    </TextWrapper>
                </Description>
                <Tags>
                    <TextWrapper>
                        <SubText scrolledDown={scrolledDown}>Frontend</SubText>
                    </TextWrapper>
                </Tags>

            </ProjectContainer>
        </>
    )
}

export default Gallery;
import React from 'react';
import {
    ProjectContainer,
    Title,
    Desc,
    Tag,
    TextWrapper,
    HeadText,
    SubText,
    ProjNameSection,
    IndicatorHelper,
    TagText
} from './AsList.elements';

// import Image1 from '../../assets/5digiden-01.webp'
// import Image2 from '../../assets/digiden-type.svg'

const Gallery = ({ helperId, header, description, tags, isArticle }) => {
    return (
        <>
            <ProjectContainer>
                <IndicatorHelper id={helperId} />
                <ProjNameSection />
                <Title isArticle={isArticle}>
                    <TextWrapper>
                        <HeadText>{header}</HeadText>
                    </TextWrapper>
                </Title>
                <Desc isArticle={isArticle}>
                    <TextWrapper>
                        <SubText>{description}</SubText>
                    </TextWrapper>
                </Desc>
                <Tag>
                    <TextWrapper>
                        <TagText>{tags}</TagText>
                    </TextWrapper>
                </Tag>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
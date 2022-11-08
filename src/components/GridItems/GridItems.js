import React from 'react';
import {
    ItemContainer,
    TextWrapper,
    HeadText,
    SubText,
    PreviewImg,
    TextContainer,
    ShadowContainer
} from './GridItems.elements';

const Gallery = ({ freeze, last, ...props }) => {
    return (
        <>
            <ItemContainer onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} href={props.linkId} target='_blank'>
                <ShadowContainer>
                    <TextContainer freeze={freeze}>
                        <TextWrapper>
                            <HeadText freeze={freeze}>
                                {props.header}
                            </HeadText>
                        </TextWrapper>
                        <TextWrapper>
                            <SubText>
                                {props.tags}
                            </SubText>
                        </TextWrapper>
                    </TextContainer>
                    <PreviewImg freeze={freeze} src={props.Img} />
                </ShadowContainer>
            </ItemContainer>
        </>
    )
}

export default Gallery;
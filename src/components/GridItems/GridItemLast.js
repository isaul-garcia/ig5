import React from 'react';
import {
    ItemContainerLast,
    TextWrapper,
    HeadTextLast,
    SubText,
    PreviewImg,
    TextContainer,
    ShadowContainer
} from './GridItems.elements';

const Gallery = ({ freeze, ...props }) => {
    return (
        <>
            <ItemContainerLast onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to={props.linkId}>
                <ShadowContainer>
                    <TextContainer freeze={freeze}>
                        <TextWrapper>
                            <HeadTextLast freeze={freeze}>
                                {props.header}
                            </HeadTextLast>
                        </TextWrapper>
                        <TextWrapper>
                            <SubText>
                                {props.tags}
                            </SubText>
                        </TextWrapper>
                    </TextContainer>
                    <PreviewImg freeze={freeze} src={props.Img} />
                </ShadowContainer>
            </ItemContainerLast>
        </>
    )
}

export default Gallery;
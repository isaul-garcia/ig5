import React from 'react';
import { BlogBubble, NewBubble } from '../../globalStyles';
import {
    ItemContainer,
    Title,
    Date,
    TextWrapper,
    HeadText,
    TagText,
    PreviewImg
} from './List.elements';

const Gallery = ({ ...props }) => {
    return (
        <>
            <ItemContainer onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to={props.linkId}>               
                <PreviewImg src={props.Img} />
                <Title>
                    <TextWrapper>
                        <HeadText>{props.header}<BlogBubble hasTag={props.isBlog}>Blog</BlogBubble><NewBubble isNew={props.isNew}>NEW</NewBubble></HeadText>
                    </TextWrapper>
                </Title>
                <Date>
                    <TextWrapper>
                        <TagText>{props.tags}</TagText>
                    </TextWrapper>
                </Date>
            </ItemContainer>
        </>
    )
}

export default Gallery;
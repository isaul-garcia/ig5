import React from 'react';
import { NewBubble } from '../../globalStyles';
import {
    ItemContainer,
    Title,
    Date,
    TextWrapper,
    HeadText,
    TagText,
    PreviewImg
} from './ListItem.elements';

const Gallery = ({ ...props }) => {
    return (
        <>
            <ItemContainer key={props.k} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to={props.linkId}>               
                <PreviewImg  src={props.Img} />
                <Title>
                    <TextWrapper>
                        <HeadText>{props.header}<NewBubble isNew={props.isNew}>NEW</NewBubble></HeadText>
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
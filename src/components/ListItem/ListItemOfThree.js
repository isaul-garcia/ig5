import React from 'react';
import { TagBubble } from '../../globalStyles';
import {
    ItemContainer,
    Name,
    Desc,
    Tag,
    TextWrapper,
    HeadText,
    SubText,
    TagText,
    PreviewImg,
} from './ListItem.elements';

const Gallery = ({ ...props }) => {
    return (
        <>
            <ItemContainer onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to={props.linkId} >
                <PreviewImg  src={props.Img} />
                <Name>
                    <TextWrapper>
                        <HeadText>{props.header}<TagBubble hasTag={props.hasTag}>Mock</TagBubble></HeadText>
                    </TextWrapper>
                </Name>
                <Desc>
                    <TextWrapper>
                        <SubText>{props.description}</SubText>
                    </TextWrapper>
                </Desc>
                <Tag>
                    <TextWrapper>
                        <TagText>{props.tags}</TagText>
                    </TextWrapper>
                </Tag>
            </ItemContainer>
        </>
    )
}

export default Gallery;
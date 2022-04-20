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
    ItemContainer0
} from './ListItem.elements';

const Gallery = ({ ...props }) => {
    return (
        <>
            <ItemContainer0 href={props.lnk} target="_blank" >
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
            </ItemContainer0>
        </>
    )
}

export default Gallery;
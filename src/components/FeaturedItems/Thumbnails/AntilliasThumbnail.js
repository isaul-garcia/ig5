import React from 'react';
import {
    ItemContainer
} from '../FeaturedItems.elements';
import Island from '../../../assets/antillias_island.jpg'
import LogoImg from '../../../assets/antillias_logotype.svg'
import { IslandBackground, ItemWrapper, LogoType, LogoWrapper, SmallText } from './AntilliasThumbnail.elements';

const Gallery = () => {
    return (
        <>
            <ItemContainer href='https://isaul-garcia.github.io/antillias/' target='_blank'>
                <ItemWrapper style={{ backgroundColor: '#d1d1d1' }}>
                    <LogoWrapper>
                        <LogoType src={LogoImg} />
                    </LogoWrapper>
                    <SmallText>Making phygital places</SmallText>
                    <IslandBackground src={Island} />
                </ItemWrapper>
            </ItemContainer>
        </>
    )
}

export default Gallery;
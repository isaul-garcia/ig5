import React from 'react';
import {
    ItemContainer
} from '../FeaturedItems.elements'
import LogoImg from '../../../assets/anaquel_logo_v2.svg'
import AnaquelWindow from '../../../assets/anaquel_window.png'
import {
    Window,
    ItemWrapper,
    LogoWrapper,
    Logo,
    LogoType,
    SmallText,
} from './AnaquelThumbnail.elements';

const Gallery = () => {
    return (
        <>
            <ItemContainer href='https://anaquel.isaulgarcia.com/' target='_blank'>
                <ItemWrapper style={{ backgroundColor: '#1f1e21' }}>
                    <Window src={AnaquelWindow} />
                    <SmallText>Bookmarks App</SmallText>
                    <LogoWrapper>
                        <Logo src={LogoImg}/>
                        <LogoType>Anaquel</LogoType>
                    </LogoWrapper>
                </ItemWrapper>
            </ItemContainer>
        </>
    )
}

export default Gallery;
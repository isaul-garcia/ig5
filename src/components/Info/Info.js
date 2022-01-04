import React from 'react';
import {
    Name,
    Description,
    TextWrapper,
    HeadText,
    HeadTextDecrease,
    SubText,
    IconContainer,
    IconWrapper,
    IgIcon,
    SelfTags,
    IgIconMobile,
    HeaderContainer
} from './Info.elements';
import Ig from '../../assets/ig_round_d8-01.svg'
import IgMobile from '../../assets/ig-rectangle.svg'

const Info = ({ scrolledDown }) => {
    return (
        <>
            <HeaderContainer scrolledDown={scrolledDown} />
            <IconContainer>
                <IconWrapper to="/">
                    <IgIcon src={Ig} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                    <IgIconMobile src={IgMobile} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                </IconWrapper>
            </IconContainer>
            <Name>
                <TextWrapper>
                    <HeadText scrolledDown={scrolledDown}>Isaúl García</HeadText>
                    <HeadTextDecrease scrolledDown={scrolledDown}>Isaúl García</HeadTextDecrease>
                </TextWrapper>
            </Name>
            <Description>
                <TextWrapper>
                    <SubText scrolledDown={scrolledDown}>A creative developer building software solutions and exploring new interactions.</SubText>
                </TextWrapper>
            </Description>
            <SelfTags scrolledDown={scrolledDown}>
                <TextWrapper>
                    <SubText scrolledDown={scrolledDown}>Frontend Developer, Designer</SubText>
                </TextWrapper>
            </SelfTags>
        </>
    )
}

export default Info;
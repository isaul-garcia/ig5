import React from 'react';
import {
    TextContainer,
    TextWrapper,
    HeadText,
    IconContainer,
    IconWrapper,
    IgIcon,
    BackIconContainer,
    BackIconWrapper,
    BackIcon,
    TinyTextBox,
    NavContainer,
    NavWrapper,
} from './Info.elements';
import Ig from '../../assets/ig_round_d8-02.svg'
import Back from '../../assets/arrow_button-01.svg'

const Info = ({ removeBack, noTabButtons, loading, scrolled }) => {
    return (
        <>
            <BackIconContainer removeBack={removeBack}>
                <BackIconWrapper to="/">
                    <BackIcon src={Back} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                </BackIconWrapper>
            </BackIconContainer>

            <TextContainer removeBack={removeBack}>
                <TextWrapper>
                    <HeadText onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} >Isaúl García</HeadText>
                </TextWrapper>
            </TextContainer>

            <IconContainer>
                <IconWrapper to="/">
                    <IgIcon src={Ig} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                </IconWrapper>
            </IconContainer>

            {noTabButtons ?
                null
                :
                (
                    <>
                        <NavContainer removeBack={false}>
                            <NavWrapper to="/design">
                                <TinyTextBox onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} scrolled={scrolled}>Design</TinyTextBox>
                            </NavWrapper>
                        </NavContainer>

                    </>
                )
            }
        </>
    )
}

export default Info;
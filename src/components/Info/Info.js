import React from 'react';
import {
    TextContainer,
    TextWrapper,
    HeadTextDecrease,
    IconContainer,
    IconWrapper,
    IgIcon,
    BackIconContainer,
    BackIconWrapper,
    BackIcon,
    Breadcrumb,
    CrumbContainer,
    CrumbWrapper,
} from './Info.elements';
import Ig from '../../assets/ig_round_d8-02.svg'
import Back from '../../assets/arrow_button-01.svg'

const Info = ({removeBack}) => {
    return (
        <>
            <BackIconContainer removeBack={removeBack}>
                <BackIconWrapper to="/">
                    <BackIcon src={Back} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                </BackIconWrapper>
            </BackIconContainer>
            
            <TextContainer removeBack={removeBack}>
                <TextWrapper>
                    <HeadTextDecrease to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} >Isaúl García</HeadTextDecrease>
                </TextWrapper>
            </TextContainer>

            {/* --ForBreadCrumbs-- */}

            <IconContainer>
                <IconWrapper to="/">
                    <IgIcon src={Ig} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                </IconWrapper>
            </IconContainer>

            <CrumbContainer removeBack={false}>
                <CrumbWrapper to="/design">
                    <Breadcrumb onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>Design</Breadcrumb>
                </CrumbWrapper>
            </CrumbContainer>
        </>
    )
}

export default Info;
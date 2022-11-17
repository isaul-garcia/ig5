import React from 'react'
import { IconContext } from 'react-icons/lib'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import {
    AliasesIcons,
    EmailContainer,
    IconWrapper,
    EmailText,
    NameContainer,
    LargeText,
    AliasWrapper,
    FooterContainer,
    DitSpacer
} from './Footer.elements'
import { Dit, Dity } from '../../globalStyles'
import Alias from '../../assets/aliases_black.svg'
import Ascend from '../Animations/Ascend'

const Footer = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#bcbcbc', size: 28 }}>
                <FooterContainer>
                    <Ascend>
                        <EmailContainer>
                            <EmailText>isaulgarcia@proton.me</EmailText>
                        </EmailContainer>

                        <IconWrapper href="https://github.com/isaul-garcia" target="_blank">
                            <BsGithub style={{ marginTop: -5, transform: 'translate(0, 4px)' }} />
                        </IconWrapper>

                        <IconWrapper href="https://twitter.com/isaulgarcia_" target="_blank">
                            <BsTwitter style={{ marginTop: -5, transform: 'translate(0, 3px)' }} />
                        </IconWrapper>
                    </Ascend>

                    <DitSpacer>
                        <Dit>
                            <Dity />
                        </Dit>
                        <Dit toRight>
                            <Dity />
                        </Dit>
                    </DitSpacer>

                    <NameContainer>
                        <AliasWrapper alias>
                            <AliasesIcons src={Alias} alt="Aliases" />
                        </AliasWrapper>
                        <LargeText>
                            Isaúl García
                        </LargeText>
                    </NameContainer>

                    <Dit single></Dit>
                    <Dit single toRight></Dit>
                </FooterContainer>
            </IconContext.Provider>
        </>
    )
}

export default Footer;
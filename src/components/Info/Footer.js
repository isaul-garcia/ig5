import React from 'react';
import {
    EndText,
    FooterTextContainer,
    AliasesContainer,
    IconWrapper,
    AliasesIcons,
    Footer,
    EmailText,
} from './Info.elements';

import Alias from '../../assets/alias_line_light-03-01.svg'

const Info = () => {
    return (
        <>
            <Footer>
                <EmailText>
                    <EndText darken={true}>isaulgarcia@protonmail.com</EndText>
                </EmailText>
                <FooterTextContainer>
                    <EndText href="https://github.com/isaul-garcia" target="_blank">Github</EndText>
                </FooterTextContainer>
                <FooterTextContainer>
                    <EndText href="/design" target="_blank">Design</EndText>
                </FooterTextContainer>
                <AliasesContainer>
                    <IconWrapper>
                        <AliasesIcons src={Alias} alt="Aliases" />
                    </IconWrapper>
                </AliasesContainer>
            </Footer>
        </>
    )
}

export default Info;
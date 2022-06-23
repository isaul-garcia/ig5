import React from 'react';
import {
    FooterText,
    AliasesContainer,
    AliasesIcons,
    Footer,
    EmailTextContainer,
    SocialIconContainer,
    SocialIconWrapper,
    SocialIcon,
    AliasWrapper
} from './Info.elements';

import Alias from '../../assets/alias_line_light-03-01.svg'
import Twitter from '../../assets/twitter_button-01.svg'
import Github from '../../assets/github_button-01.svg'

const Info = () => {
    return (
        <>
            <Footer>
                <EmailTextContainer>
                    <FooterText darken={true}>isaulgarcia@proton.me</FooterText>
                </EmailTextContainer>

                <SocialIconContainer>
                    <SocialIconWrapper href="https://github.com/isaul-garcia" target="_blank">
                        <SocialIcon src={Github} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                    </SocialIconWrapper>
                </SocialIconContainer>

                <SocialIconContainer>
                    <SocialIconWrapper href="https://twitter.com/isaulgarcia_" target="_blank">
                        <SocialIcon src={Twitter} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                    </SocialIconWrapper>
                </SocialIconContainer>

                <AliasesContainer>
                    <AliasWrapper>
                        <AliasesIcons src={Alias} alt="Aliases" />
                    </AliasWrapper>
                </AliasesContainer>
            </Footer>
        </>
    )
}

export default Info;
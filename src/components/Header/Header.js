import React from 'react'
import {
    SmallSpacer
} from '../../globalStyles'
import {
    Container,
    LargeText,
    SmallText,
    AboutContainer,
    AboutCard,
    SubText,
    Wallpaper,
    Wrapper,
    Loader,
    TaoBuffer
} from './Header.elements'
import { Banner, Ascend } from '../../components'
import Tao1 from '../../assets/tao1.svg'
import Tao2 from '../../assets/tao2.svg'
import Tao3 from '../../assets/tao3.svg'

const Name = () => {
    return (
        <>
            <SmallText>
                Designer & Developer
            </SmallText>
            <SmallSpacer />
            <LargeText>
                Isaúl<br />García
            </LargeText>
        </>
    )
}

const Header = () => {
    return (
        <>
            <Container>
                <Banner />
                <Wrapper>
                    <Ascend>
                        <Name />
                    </Ascend>
                    <AboutContainer>
                        <Ascend>
                            <AboutCard>
                                <SubText >
                                    Hello! I'm a creative developer who enjoys building for the web and making fun engaging interactions.
                                </SubText>
                            </AboutCard>
                        </Ascend>
                    </AboutContainer>
                </Wrapper>
                <Wallpaper />
                <Loader>
                    <TaoBuffer anim={'0s'} src={Tao1} />
                    <TaoBuffer anim={'0.25s'} src={Tao2} />
                    <TaoBuffer anim={'0.5s'} src={Tao3} />
                </Loader>
            </Container>
        </>
    )
}

export default Header;
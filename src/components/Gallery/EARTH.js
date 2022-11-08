import React from 'react';
import { Helmet } from 'react-helmet';
import { VideoModule } from '..';
import {
    Name,
    TextWrapper,
    HeadText,
    ButtonText,
    SSWrapper,
    ImgSS,
    InteractiveSection,
    InteractiveSecContainer,
    InteractiveSecWrapper,
    EarthLogo,
    ProjectContainer,
    IText
} from './Gallery.elements';

import Image2 from '../../assets/earthfo1.webp'
import Image3 from '../../assets/earth-logo-light-green-letters-01.svg'
import Image4 from '../../assets/earth-logo-light-green-globe-01.svg'
import { MediumSpacer, TextContainer, SubText, SmallSpacer } from '../../globalStyles'
import BackButton from '../BackButton/BackButton'
import { BsLink45Deg } from 'react-icons/bs'

const Gallery = () => {

    return (
        <>
            <Helmet>
                <title>Isaúl García | Here on Earth</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Here on Earth</HeadText>
                        <ButtonText href="https://isaul-garcia.github.io/earthfo/" target="_blank">
                            Link <BsLink45Deg color='#fff' size='20' style={{ marginTop: -10, transform: 'translate(0, 5px)' }} />
                        </ButtonText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Informational website prototype</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>Victory, Three.js</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <SSWrapper>
                    <ImgSS backdrop={'#dcdbdd'} src={Image2} />
                </SSWrapper>

                <InteractiveSection>
                    <InteractiveSecContainer customColor={'#22cf57'}>
                        <InteractiveSecWrapper>
                            <EarthLogo src={Image4} />
                            <EarthLogo src={Image3} />
                        </InteractiveSecWrapper>
                    </InteractiveSecContainer>
                </InteractiveSection>

                <VideoModule
                    giveWidth={'100%'}
                    pad={true}
                    customColor={'#dcdbdd'}
                    videoURL={'./Videos/earth2s.mp4'}
                />
            </ProjectContainer>
        </>
    )
}

export default Gallery;
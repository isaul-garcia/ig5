import React from 'react';
import { Helmet } from 'react-helmet';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    Img100,
    PackWrapper,
    IText
} from './Gallery.elements';

import Image1 from '../../assets/mods1.webp'
import Image2 from '../../assets/mods2.png'
import Image3 from '../../assets/mods3.png'
import Image4 from '../../assets/mods4.png'
import Image5 from '../../assets/mods5.webp'
import Image6 from '../../assets/mods6.png'
import Image7 from '../../assets/mods7.webp'
import Image8 from '../../assets/mods8.webp'
import Image9 from '../../assets/mods9.png'
import Image10 from '../../assets/mods10.png'
import Image11 from '../../assets/mods11.webp'
import Image12 from '../../assets/mods12.webp'
import { MediumSpacer, TextContainer, SubText, MainText, SmallSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | MODs</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>MODs</HeadText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Modular urban intervention for the future of smart cities</SubText>
                    </TextWrapper>
                </TextContainer>
                <TextContainer>
                    <TextWrapper>
                        <IText>Architecture</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <PackWrapper>
                        <Img100 customHeight={'52vh'} src={Image1} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            Cities are important nodes of information and human interaction. MODs was designed as a computerized platform that would help the adoption of smart city technologies to public spaces and its inhabitants. The platform itself would empower citizens to understand how these technologies work. Making it accessible for citizens to use this system to create services that help whole neighborhoods by the community itself.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img100 customHeight={'35vh'} src={Image2} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            The design itself merges both physical and digital demands. Embedding the hardware within the common urban structures that exist today. It would be important for people to be aware of what types of sensors are surrounding them, so both a digital companion and the structure itself should make its function evident.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img100 customHeight={'50vh'} src={Image11} />
                        <SSWrapper customWidth={'50%'} customHeight={'50vh'} >
                            <ImgSS backdrop={'#555'} src={Image4} />
                        </SSWrapper>
                        <SSWrapper customWidth={'50%'} customHeight={'50vh'} >
                            <ImgSS backdrop={'#555'} src={Image3} />
                        </SSWrapper>
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            The form is made up of tubes and double sided slates that click together to form a module with two sides, and possibly two separate functions. The idea is that these modules themselves are easily modifiable and upgradable. The tube shapes also help create more dynamic iterations that easily adjust to the space.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img100 customHeight={'70vh'} src={Image12} />
                        <SSWrapper customWidth={'66.66%'} customHeight={'50vh'} >
                            <ImgSS backdrop={'#222'} src={Image7} />
                        </SSWrapper>
                        <SSWrapper customWidth={'33.33%'} customHeight={'50vh'}>
                            <ImgSS backdrop={'#222'} src={Image6} />
                        </SSWrapper>
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            Inspired by computer motherboards, creating a format that would systematize the urban structure to function similarly, would help citizens, not only to benefit from the technology advancements, but to be aware of it and participate in its moderation, and formation all together. With hopes that these technologies help us connect with each other and take advantage of the chaotic harmony that exists in urban centers without falling into deteriorating and surveillance patterns.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img50 customHeight={'20vh'} customWidth={'100%'} src={Image8} />
                        <Img50 customHeight={'30vh'} customWidth={'33.33%'} src={Image9} />
                        <Img50 customHeight={'30vh'} customWidth={'66.66%'} src={Image5} />
                        <Img50 customHeight={'30vh'} customWidth={'100%'} src={Image10} />
                    </PackWrapper>
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
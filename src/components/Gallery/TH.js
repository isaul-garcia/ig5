import React from 'react'
import { Helmet } from 'react-helmet';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Img33100,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    Img100,
    PackWrapper,
    IText
} from './Gallery.elements';

import Image1 from '../../assets/th1.jpg'
import Image2 from '../../assets/th2.webp'
import Image3 from '../../assets/th3.png'
import Image4 from '../../assets/th4.webp'
import Image5 from '../../assets/th5.jpg'
import Image6 from '../../assets/th6.jpg'
import { MediumSpacer, TextContainer, SubText, MainText, SmallSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | :treehouse</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>:treehouse</HeadText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Self-mantained short term rental network</SubText>
                        <IText>Architecture</IText>
                    </TextWrapper>
                </TextContainer>

                <MediumSpacer />

                <GalleryWrapper>
                    <PackWrapper>
                        <Img100 customHeight={'55vh'} src={Image1} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            Rising above the treeline or peeking behind a mountain's back, its design is meant to accentuate the view of the specific location. The :treehouse lives among natural environments, where you could rent short-term, for a time off, or plan scheduled trips that would transfer you around other :treehouses around the island.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <SSWrapper>
                            <ImgSS backdrop={'#8b8b8b'} src={Image3} />
                        </SSWrapper>
                        <Img33100 src={Image2} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            Consisting of four levels, the design includes a gardening area and an exterior kitchen. It would have a build in elevator for items to be transported between floors easily.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img50 customHeight={'35vh'} src={Image6} />
                        <Img50 customHeight={'35vh'} src={Image5} />
                        <Img100 customHeight={'60vh'} src={Image4} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            The idea is to create some sort of circular economy between :treehouse nodes. Where there would exist an operating system that would communicate and adjust pricing relative to the type of maintanance the node requires, or its context for that matter. With the goal to create a self sustaining system that also fosters a new type of tourism that prompts you to engage with the resources around the :treehouse and take care of them in a circulating/community owned property experiment.
                        </MainText>
                    </TextWrapper>

                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
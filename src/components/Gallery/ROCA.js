import React from 'react'
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
import { MediumSpacer, TextContainer, SubText, MainText, SmallSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'

import Image1 from '../../assets/roca1.jpg'
import Image2 from '../../assets/roca2.jpg'
import Image3 from '../../assets/roca3.jpg'
import Image4 from '../../assets/roca4.webp'
import Image5 from '../../assets/roca5.webp'
import Image6 from '../../assets/roca6.png'
import Image7 from '../../assets/roca7.png'
import Image8 from '../../assets/roca9.jpg'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | Roca</title>
            </Helmet>
            <ProjectContainer>
                <BackButton />
                <Name difference>
                    <TextWrapper>
                        <HeadText>Roca</HeadText>
                    </TextWrapper>
                </Name>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Parametrically designed elementary school</SubText>
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
                        <Img100 customHeight={'55vh'} src={Image1} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            The ROCa primary school is located inside the San Juan Botanical Garden, more specifically at a former water purifier by sediment. Inspired by the nearby river, its form takes shape of the erosed stones from the river flow. Contours were obstruded from the terrain's natural curves.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img100 customHeight={'52vh'} src={Image2} />
                        <SSWrapper fill100={true} customHeight={'50vh'} >
                            <ImgSS backdrop={'#555'} src={Image3} />
                        </SSWrapper>
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            Its skin is made up of 3D printed bricks, some of them see through. The school holds a nursery garden on its center. ROCa's program consists on an education that revolves around nature, teaching children to nurture, protect and enjoy their natural environment.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <PackWrapper>
                        <Img50 customHeight={'22vh'} customWidth={'100%'} src={Image6} />
                    </PackWrapper>

                    <MediumSpacer />

                    <TextWrapper>
                        <MainText>
                            I used Grasshopper, a Rhino 3D plug-in, to create both the bricks and their positioning to create the curved wall appearance.
                        </MainText>
                    </TextWrapper>

                    <MediumSpacer />

                    <SSWrapper fill50={true} customHeight={'50vh'} >
                        <ImgSS backdrop={'#222'} src={Image4} />
                    </SSWrapper>
                    <SSWrapper fill50={true} customHeight={'50vh'}>
                        <ImgSS backdrop={'#222'} src={Image5} />
                    </SSWrapper>
                    <Img50 customHeight={'27vh'} customWidth={'100%'} src={Image7} />
                    <Img100 customHeight={'60vh'} src={Image8} />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
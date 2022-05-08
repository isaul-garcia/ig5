import React from 'react'
import { Info } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    Img50,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    ProjNameSection,
    IndicatorHelper,
    Img100,
    PackWrapper
} from './Gallery.elements';

import Image1 from '../../assets/roca1.jpg'
import Image2 from '../../assets/roca2.jpg'
import Image3 from '../../assets/roca3.jpg'
import Image4 from '../../assets/roca4.jpg'
import Image5 from '../../assets/roca5.png'
import Image6 from '../../assets/roca6.png'
import Image7 from '../../assets/roca7.png'
import Image8 from '../../assets/roca9.jpg'
import { MediumSpacer, TextContainer, SubText, FullContainer, MainText } from '../../globalStyles';

const Gallery = () => {
    return (
        <>
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="treehouse" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Roca</HeadText>
                        </TextWrapper>
                    </Name>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Parametrically designed elementary school</SubText>
                        </TextWrapper>
                    </TextContainer>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>Architecture</SubText>
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
                            <Img100 customHeight={'72vh'} src={Image2} />
                            <SSWrapper fill100={true} customHeight={'50vh'} >
                                <ImgSS backdrop={'#555'} src={Image3} />
                            </SSWrapper>
                        </PackWrapper>

                        <MediumSpacer />

                        <TextWrapper>
                            <MainText>
                                Its skin is made up of 3D printed bricks, some of them see through. The school holds a nursery garden on its center. ROCa's program consists on an education that revolves around nature, teaching children to nurture and enjoy their natural environment.
                            </MainText>
                        </TextWrapper>

                        <MediumSpacer />

                        <PackWrapper>
                            <Img50 customHeight={'29vh'} customWidth={'100%'} src={Image6} />
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
                        <Img50 customHeight={'32vh'} customWidth={'100%'} src={Image7} />
                        <Img100 customHeight={'60vh'} src={Image8} />
                    </GalleryWrapper>
                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
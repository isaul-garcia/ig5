import React from 'react';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
    SSWrapper,
    ImgSS,
    ImgSSFill,
    Img50,
    SingleVideoHelper,
    ProjNameSection,
    IndicatorHelper,
    InteractiveSecContainer,
    InteractiveSection,
    FillTall,
    DescriptionWrapper,
    PackWrapper
} from './Gallery.elements';

import Image1 from '../../assets/designs/aq007.jpg'
import Image2 from '../../assets/designs/aq005.jpg'
import Image3 from '../../assets/designs/aq004.jpg'
import Image4 from '../../assets/designs/aq006.jpg'
import Image5 from '../../assets/designs/ba1.jpg'
import Image6 from '../../assets/designs/ba3.png'
import Image7 from '../../assets/designs/ba5.png'
import Image8 from '../../assets/designs/ba6.png'
import Image9 from '../../assets/designs/bfit6.png'
import Image10 from '../../assets/designs/bfit3.png'
import Image12 from '../../assets/designs/opsu3.jpg'
import Image13 from '../../assets/designs/opsu2.jpg'
import Image14 from '../../assets/designs/opsu11.jpg'
import Image16 from '../../assets/designs/bfit2.jpg'
import { FullContainer, LargeSpacer, MediumSpacer, SmallSpacer, SubTitle } from '../../globalStyles';
import { Info } from '..';

const Gallery = () => {

    return (
        <>
            <FullContainer>
                <Info />
                <MediumSpacer />
                <ProjectContainer>
                    <IndicatorHelper id="design" />
                    <ProjNameSection />
                    <Name>
                        <TextWrapper>
                            <HeadText>Design</HeadText>
                        </TextWrapper>
                    </Name>
                    <Description>
                        <TextWrapper>
                            <SubText></SubText>
                        </TextWrapper>
                    </Description>
                    <Tags>
                        <TextWrapper>
                            <SubText></SubText>
                        </TextWrapper>
                    </Tags>

                    <GalleryWrapper>
                        <SingleVideoHelper />

                        <DescriptionWrapper>
                            <SubTitle>Bonjour Ana</SubTitle>
                            <h5>Graphic and Web Designer at startup company for cleaning and handy services. Responsible for leading the website design. Also worked on the brand image, graphic content, social media, and prints.</h5>
                        </DescriptionWrapper>
                        <SmallSpacer />
                        <PackWrapper>
                            <SSWrapper fill100={true}>
                                <ImgSS backdrop={'#131313'} src={Image5} style={{ border: "1px solid #333" }} />
                            </SSWrapper>
                            <Img50 src={Image6} customHeight={'50vh'} />
                            <Img50 src={Image8} customHeight={'50vh'} />
                            <SSWrapper fill100={true}>
                                <ImgSS backdrop={'#131313'} src={Image7} style={{ border: "1px solid #333" }} />
                            </SSWrapper>
                        </PackWrapper>
                        <LargeSpacer />

                        <DescriptionWrapper>
                            <SubTitle>B-Fit</SubTitle>
                            <h5>Commissioned to build the User Interface of a virtual trainer application. Designing routine-based interactions that maximized keeping track with the work out in real time and post.</h5>
                        </DescriptionWrapper>
                        <SmallSpacer />
                        <PackWrapper>
                            <SSWrapper>
                                <ImgSSFill backdrop={'#131313'} src={Image9} style={{ border: "1px solid #aaa" }} />
                            </SSWrapper>
                            <InteractiveSection>
                                <InteractiveSecContainer customColor={'#1a1a1a'} >
                                    <FillTall src={Image16} />
                                </InteractiveSecContainer>
                            </InteractiveSection>
                            <SSWrapper fill100={true}>
                                <ImgSS backdrop={'#131313'} src={Image10} style={{ border: "1px solid #333" }} />
                            </SSWrapper>
                        </PackWrapper>
                        <LargeSpacer />

                        <DescriptionWrapper>
                            <SubTitle>AQ Views</SubTitle>
                            <h5>Longterm work with Andres Quiñones, a Videographer and Photographer based in Orlando, Florida. Designed the logo and the brand experience. Also make social media assets, currently developing the new website, merch and aid with graphic animations.</h5>
                        </DescriptionWrapper>
                        <SmallSpacer />
                        <PackWrapper>
                            <SSWrapper>
                                <ImgSSFill backdrop={'#131313'} src={Image1} style={{ border: "1px solid #aaa" }} />
                            </SSWrapper>
                            <InteractiveSection>
                                <InteractiveSecContainer customColor={'#1a1a1a'} style={{ border: "1px solid #333" }}>
                                    <FillTall src={Image3} />
                                </InteractiveSecContainer>
                            </InteractiveSection>
                            <Img50 src={Image2} customHeight={'40vh'} />
                            <Img50 src={Image4} customHeight={'40vh'} />
                        </PackWrapper>
                        <LargeSpacer />

                        <DescriptionWrapper>
                            <SubTitle>Opsu</SubTitle>
                            <h5>Personal project conceptualizing a smartphone ecosystem, from its physical design to the operating system.</h5>
                        </DescriptionWrapper>
                        <SmallSpacer />
                        <PackWrapper>
                            <Img50 src={Image14} customHeight={'30vh'} />
                            <Img50 src={Image13} customHeight={'30vh'} />
                            <SSWrapper fill100={true}>
                                <ImgSS backdrop={'#131313'} src={Image12} style={{ border: "1px solid #333" }} />
                            </SSWrapper>
                        </PackWrapper>
                    </GalleryWrapper>
                </ProjectContainer>
            </FullContainer>
        </>
    )
}

export default Gallery;
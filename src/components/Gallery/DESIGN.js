import React from 'react'
import { Helmet } from 'react-helmet';
import {
    ProjectContainer,
    GalleryWrapper,
    Name,
    TextWrapper,
    HeadText,
    SSWrapper,
    ImgSS,
    Img100,
    PackWrapper,
    IText
} from './Gallery.elements';
import { MediumSpacer, TextContainer, SubText, LargeSpacer } from '../../globalStyles';
import BackButton from '../BackButton/BackButton'

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
import Image16 from '../../assets/designs/bfit2.jpg'

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
                        <HeadText>Design</HeadText>
                    </TextWrapper>
                </Name>
                <LargeSpacer />



                <GalleryWrapper>
                    <TextContainer>
                        <TextWrapper>
                            <SubText>AQ Views</SubText>
                            <IText>Branding and website design for videographer.</IText>
                        </TextWrapper>
                    </TextContainer>
                    <MediumSpacer />
                    <PackWrapper>
                        <Img100 customHeight={'55vh'} src={Image1} />
                        <Img100 customHeight={'52vh'} src={Image2} />
                        <Img100 customHeight={'55vh'} src={Image4} />
                        <SSWrapper fill100={true} customHeight={'50vh'} >
                            <ImgSS backdrop={'#555'} src={Image3} />
                        </SSWrapper>
                    </PackWrapper>

                    <LargeSpacer />

                    <TextContainer>
                        <TextWrapper>
                            <SubText>Bonjour! Ana</SubText>
                            <IText>Designed for various mediums, including a website design.</IText>
                        </TextWrapper>
                    </TextContainer>
                    <MediumSpacer />
                    <PackWrapper>
                        <Img100 customHeight={'55vh'} src={Image5} />
                        <Img100 customHeight={'48vh'} src={Image6} />
                        <SSWrapper fill100={true} customHeight={'50vh'} >
                            <ImgSS backdrop={'#f7f6ef'} src={Image8} />
                        </SSWrapper>
                        <Img100 customHeight={'55vh'} src={Image7} />
                    </PackWrapper>

                    <LargeSpacer />

                    <TextContainer>
                        <TextWrapper>
                            <SubText>B-Fit</SubText>
                            <IText>UI/UX for fitness trainer app.</IText>
                        </TextWrapper>
                    </TextContainer>
                    <MediumSpacer />
                    <PackWrapper>
                        <Img100 customHeight={'55vh'} src={Image9} />
                        <SSWrapper fill100={true} customHeight={'50vh'} >
                            <ImgSS backdrop={'#404141'} src={Image10} />
                        </SSWrapper>
                        <Img100 customHeight={'55vh'} src={Image16} />
                    </PackWrapper>
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
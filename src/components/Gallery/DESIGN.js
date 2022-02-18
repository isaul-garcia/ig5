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
    FillTall
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
import Image11 from '../../assets/designs/hilo0.jpg'
import Image12 from '../../assets/designs/opsu3.jpg'
import Image13 from '../../assets/designs/opsu2.jpg'
import Image14 from '../../assets/designs/opsu11.jpg'
import Image16 from '../../assets/designs/bfit2.jpg'
import { MediumSpacer } from '../../globalStyles';
import { Info } from '..';

const Gallery = () => {

    return (
        <>
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
                    

                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#131313'} src={Image5}  style={{ border: "1px solid #333" }}/>
                    </SSWrapper>                    
                    <Img50 src={Image6} customHeight={'50vh'}/>
                    <Img50 src={Image8} customHeight={'50vh'}/>
                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#131313'} src={Image7}  style={{ border: "1px solid #333" }}/>
                    </SSWrapper>  

                    <SSWrapper>
                        <ImgSSFill backdrop={'#131313'} src={Image9} style={{ border: "1px solid #aaa" }}/>
                    </SSWrapper>
                    <InteractiveSection>
                        <InteractiveSecContainer customColor={'#1a1a1a'} >
                            <FillTall src={Image16} />
                        </InteractiveSecContainer>
                    </InteractiveSection>
                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#131313'} src={Image10}  style={{ border: "1px solid #333" }}/>
                    </SSWrapper>

                    <SSWrapper>
                        <ImgSSFill backdrop={'#131313'} src={Image1} style={{ border: "1px solid #aaa" }}/>
                    </SSWrapper>
                    <InteractiveSection>
                        <InteractiveSecContainer customColor={'#1a1a1a'} style={{ border: "1px solid #333" }}>
                            <FillTall src={Image3} />
                        </InteractiveSecContainer>
                    </InteractiveSection>
                    <Img50 src={Image2} customHeight={'40vh'}/>
                    <Img50 src={Image4} customHeight={'40vh'}/>
                
                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#131313'} src={Image11}  style={{ border: "1px solid #333" }}/>
                    </SSWrapper>

                    <Img50 src={Image14} customHeight={'30vh'}/>
                    <Img50 src={Image13} customHeight={'30vh'}/>
                    <SSWrapper fill100={true}>
                        <ImgSS backdrop={'#131313'} src={Image12}  style={{ border: "1px solid #333" }}/>
                    </SSWrapper>  
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
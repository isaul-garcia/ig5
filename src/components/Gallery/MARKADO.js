import React, {useState} from 'react'
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    DivisorSection,
    DivisorContainer,
    DivisorWrapper,
    Img50,
    Img33100,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
    ButtonText,
    Mimg,
    SSWrapper,
    ImgSS,
    ProjNameSection,
    IndicatorHelper
    } from './Gallery.elements';

import Image1 from '../../assets/markado-home-b.jpg'
import Image2 from '../../assets/mrkd5.jpg'
import Image3 from '../../assets/5markado-03.png'
import Image4 from '../../assets/t-house1.png'
import Image5 from '../../assets/t-car1.png'
import Image6 from '../../assets/t-comp1.png'
import Image7 from '../../assets/t-sofa1.png'

const Gallery = ({scrolledDown}) => {    
  const [isColorAccent, setIsColorAccent] = useState('#79e8b6');
    return (
        <>
            <ProjectContainer>
            <IndicatorHelper  id="markado"/>
                <ProjNameSection scrolledDown={scrolledDown} />
                    <Name>
                        <TextWrapper>
                            <HeadText scrolledDown={scrolledDown}>Markado</HeadText>
                            <ButtonText scrolledDown={scrolledDown} href="https://isauljosue.github.io/markado/" target="_blank">mock-up ↗</ButtonText>                                    
                        </TextWrapper>
                    </Name>
                    <Description>
                        <TextWrapper>
                            <SubText scrolledDown={scrolledDown}>E-Commerce website prototype.</SubText>
                        </TextWrapper>
                    </Description>
                    <Tags>
                        <TextWrapper>
                            <SubText scrolledDown={scrolledDown}>Front End Development</SubText>
                        </TextWrapper>
                    </Tags>

                <GalleryWrapper>
                    <SSWrapper>
                        <ImgSS  backdrop={'#a7caff'} src={Image1} />
                    </SSWrapper>
                    <Img33100 src={Image2} />
                    <DivisorSection>
                        <DivisorContainer accentColor={isColorAccent}>
                            <DivisorWrapper>
                                <Mimg onMouseEnter={() => setIsColorAccent('#a8a1ff')} onMouseLeave={() => setIsColorAccent('#79e8b6')} src={Image4} />
                                <Mimg onMouseEnter={() => setIsColorAccent('#5397ff')} onMouseLeave={() => setIsColorAccent('#79e8b6')} src={Image5} />
                                <Mimg onMouseEnter={() => setIsColorAccent('#fa8c4c')} onMouseLeave={() => setIsColorAccent('#79e8b6')} src={Image6} />
                                <Mimg onMouseEnter={() => setIsColorAccent('#d5d736')} onMouseLeave={() => setIsColorAccent('#79e8b6')} src={Image7} />
                            </DivisorWrapper>
                        </DivisorContainer>
                    </DivisorSection>
                    <Img50 src={Image3} /> 
                    <VideoModule 
                        giveWidth={'50%'} 
                        pad={true}
                        giveHeight={'77vh'}
                        customColor={'#e7e789'} 
                        videoURL={'./Videos/markado2s.mp4'}
                    />
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
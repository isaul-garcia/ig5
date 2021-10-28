import React from 'react';
import { VideoModule } from '..';
import {
    ProjectContainer,
    GalleryWrapper,
    ButtonText,
    Name,
    Description,
    Tags,
    TextWrapper,
    HeadText,
    SubText,
    SingleVideoHelper,
    ProjNameSection,
    IndicatorHelper
    } from './Gallery.elements';

const Gallery = ({scrolledDown}) => { 

    return ( 
        <>
            
            <ProjectContainer>
            <IndicatorHelper  id="roomx"/>
                <ProjNameSection scrolledDown={scrolledDown} />
                    <Name>
                        <TextWrapper>
                            <HeadText scrolledDown={scrolledDown}>Room X</HeadText> 
                            <ButtonText scrolledDown={scrolledDown} href="https://isauljosue.gitlab.io/isaul.garcia/room360x.html" target="_blank">link ↗</ButtonText>              
                        </TextWrapper>
                    </Name>
                    <Description>
                        <TextWrapper>
                            <SubText scrolledDown={scrolledDown}>My quarantined reality.</SubText>
                        </TextWrapper>
                    </Description>
                    <Tags>
                        <TextWrapper>
                            <SubText scrolledDown={scrolledDown}>Artwork</SubText>
                        </TextWrapper>
                    </Tags>

                <GalleryWrapper>
                    <SingleVideoHelper />
                    <VideoModule 
                        giveWidth={'100%'}
                        giveHeight={'80vh'}
                        fill={true}
                        customColor={'#a8a8a8'}
                        videoURL={'./Videos/roomx1s.mp4'}
                    />   
                </GalleryWrapper>
            </ProjectContainer>
        </>
    )
}

export default Gallery;
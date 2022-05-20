import React, { useState, useEffect } from 'react';
import {
    Banner,
    Info,
    ListItemOfThree,
    ListItemOfTwo,
} from '../../components';
import {
    MediumSpacer,
    LargeSpacer,
    GiantSpacer,
    SmallSpacer,
    Backdrop,
    SubText,
    OverContainer,
    TextContainer,
    TextWrapper,
} from '../../globalStyles';
import {
    myProjects, 
    myArticles, 
    myOthers,
} from './Data';
import { 
    Loader,
    Separator,
    SparkImg,
    BannerContainer,
    BannerWrapper } from './Home.elements';
import Image2 from '../../assets/red-estrella-s.webp'

const Module = ({ scrolled }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200);
    }, [])
    return (
        <>
            <BannerContainer scrolled={scrolled}>
                <BannerWrapper>
                    <Loader loading={loading} />
                    <Banner />
                </BannerWrapper>
            </BannerContainer>

            <GiantSpacer />

            <OverContainer>
                <Backdrop scrolled={scrolled} />
                <Info removeBack={true} />

                <MediumSpacer />

                <LargeSpacer />

                <TextContainer>
                    <TextWrapper>
                        <SubText>
                            I'm a creative developer with an interest in the evolution of the web, data visualization and mixed realities. I enjoy exploring digital technologies and experimenting for fun innovative interactions.
                        </SubText>
                    </TextWrapper>
                </TextContainer>
                <SmallSpacer />
                <TextContainer>
                    <TextWrapper>
                        <SubText>Frontend Engineer, Designer</SubText>
                    </TextWrapper>
                </TextContainer>

                <SparkImg src={Image2} />

                <MediumSpacer />
                <MediumSpacer />

                <Separator>
                    <h4>Featured</h4>
                    <MediumSpacer />
                    {myProjects.map((props) => (
                        <ListItemOfThree {...props} />
                    ))}
                </Separator>

                <LargeSpacer />

                <Separator>
                    <h4>Blog</h4>
                    <MediumSpacer />
                    {myArticles.map((props) => (
                        <ListItemOfTwo {...props} />
                    ))}
                </Separator>

                <LargeSpacer />

                <Separator>
                    <h4>More</h4>
                    <MediumSpacer />
                    {myOthers.map((props) => (
                        <ListItemOfThree {...props} />
                    ))}
                </Separator>
            </OverContainer>
        </>
    )
}

export default Module;
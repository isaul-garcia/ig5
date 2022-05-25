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
    HomeContainer,
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
    BannerContainer,
    BannerWrapper
} from './Home.elements';

const Module = ({ scrolled }) => {
    //Loader
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

            <HomeContainer scrolled={scrolled}>
                <Backdrop scrolled={scrolled} />
                <Info removeBack={true} scrolled={scrolled} />

                <MediumSpacer />

                <LargeSpacer disableMobi={true}/>

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
                        <SubText><i>Frontend Engineer, Designer</i></SubText>
                    </TextWrapper>
                </TextContainer>

                <LargeSpacer />

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
            </HomeContainer>
        </>
    )
}

export default Module;
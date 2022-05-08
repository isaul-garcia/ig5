import React, { useState, useEffect } from 'react';
import {
    Banner,
    Info,
    ListItemOfThree,
    ListItemOfTwo,
} from '../../components';
import {
    Separator,
    MediumSpacer,
    LargeSpacer,
    TextWrapper,
    SubText,
    TextContainer,
    SparkImg,
    Backdrop,
    OverContainer,
    BannerContainer,
    BannerWrapper,
    GiantSpacer,
    SmallSpacer
} from '../../globalStyles';
import { myProjects, myArticles, myOthers } from './Data';
import Image2 from '../../assets/red-estrella-s.webp'
import { Loader } from './Home.elements';

//

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
                        A creative developer building software solutions and exploring new interactions. With a particular interest in the evolution of the web, data visualization and mixed realities.
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
                    <h4>Writing</h4>
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
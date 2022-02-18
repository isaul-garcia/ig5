import React from 'react';
import {
    Info,
    ListItemOfThree,
    ListItemOfTwo,
} from '../../components';
import { Separator, MediumSpacer, LargeSpacer, TextWrapper, SubText, TextContainer, HomeImg } from '../../globalStyles';
import { myProjects, myArticles, myOthers } from './Data';
import Image from '../../assets/red-estrella-s.webp'

const Module = () => {
    return (
        <>
            <Info removeBack={true} />
    
            <MediumSpacer />

            <HomeImg src={Image}/>

            <LargeSpacer />


            <TextContainer>
                <TextWrapper>
                    <SubText>A creative developer building software solutions and exploring new interactions.</SubText>
                </TextWrapper>
            </TextContainer>
            <TextContainer>
                <TextWrapper>
                    <SubText>Frontend Engineer, Designer</SubText>
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

            <MediumSpacer />
        </>
    )
}

export default Module;
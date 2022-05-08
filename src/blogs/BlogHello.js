import React from 'react';
import { Info } from '../components';
import { MediumSpacer, LargeSpacer, TextWrapper, MainText, FullContainer } from '../globalStyles';
import * as s from './Data';
import Image from '../assets/unknown.png'
import { ArticleImg, ArticleTitle, SubTitle } from './Article.elements';

const Archive = () => {
    return (
        <>
            <FullContainer>
            <Info />
                <LargeSpacer />

                <ArticleImg src={Image} />

                <MediumSpacer />

                <ArticleTitle>Hello, Internet</ArticleTitle>
                <MediumSpacer />
                <SubTitle><i></i></SubTitle>
                <MediumSpacer />
                <h5>02/18/2022</h5>

                {s.blogHello.map((props) => (
                    <>
                        <MediumSpacer />
                        <TextWrapper>
                            <MainText>
                                {props.articleText}
                            </MainText>
                        </TextWrapper>
                    </>
                ))}

                <MediumSpacer />
            </FullContainer>
        </>
    )
}

export default Archive;
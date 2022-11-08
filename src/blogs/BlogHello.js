import React from 'react';
import { MediumSpacer, TextWrapper, MainText } from '../globalStyles';
import * as s from './Data';
import Image from '../assets/unknown.png'
import { ArticleImg, ArticleTitle, Fixer, SubTitle } from './Article.elements';
import BackButton from '../components/BackButton/BackButton'
const Archive = () => {
    return (
        <>
            <Fixer />
            <BackButton reduce />
            <ArticleImg src={Image} />

            <MediumSpacer />

            <ArticleTitle>Hello, Internet</ArticleTitle>
            <MediumSpacer />
            <SubTitle><i></i></SubTitle>
            <MediumSpacer />
            <h5>02/18/2022</h5>

            {s.blogHello.map((props, key) => (
                <div key={key}>
                    <MediumSpacer />
                    <TextWrapper>
                        <MainText>
                            {props.articleText}
                        </MainText>
                    </TextWrapper>
                </div>
            ))}

            <MediumSpacer />
        </>
    )
}

export default Archive;
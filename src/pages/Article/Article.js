import React from 'react';
import { Info } from '../../components';
import { MediumSpacer, LargeSpacer, TextWrapper, MainText, ArticleImg, ArticleTitle } from '../../globalStyles';
import * as s from './Data';
import Image from '../../assets/unknown.png'

const Archive = () => {
    return (
        <>
            <Info />
            <LargeSpacer />

            <ArticleImg src={Image} />

            <LargeSpacer />

            <ArticleTitle>Hello, Internet</ArticleTitle>

            {s.myArticles.map((props) => (
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
        </>
    )
}

export default Archive;
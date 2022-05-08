import React, {useState, useEffect} from 'react';
import { Info } from '../../components';
import { MediumSpacer, LargeSpacer, TextWrapper, MainText, ArticleImg, ArticleTitle, FullContainer } from '../../globalStyles';
import * as s from './Data';
import Image from '../../assets/unknown.png'

const Archive = () => {
    const [source, setSource] = useState('')

    const getURL = () => {
        let url = window.location.href;
        let src = url.split("#/articles/");
        src = "blog" + src[1];
        setSource(src);
      };

      useEffect(() => {
        getURL();
      }, []);

    return (
        <>
            <FullContainer>
                <Info />
                <LargeSpacer />

                <ArticleImg src={Image} />

                <LargeSpacer />

                <ArticleTitle>Someware: Exploring Phygital Placemaking</ArticleTitle>

                {s.blogsomeware.map((props) => (
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
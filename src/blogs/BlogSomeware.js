import React from 'react';
import { Info } from '../components';
import { MediumSpacer, LargeSpacer, TextWrapper, MainText, FullContainer, SubText } from '../globalStyles';
import * as s from './Data';
import Image from '../assets/sw_big.webp'
import { ArticleFrame, ArticleImg, ArticleTitle, SubTitle } from './Article.elements';

const Archive = () => {
    return (
        <>
            <FullContainer>
                <Info />
                <LargeSpacer />

                <ArticleImg src={Image} />

                <MediumSpacer />

                <ArticleTitle>Someware: Exploring Phygital Placemaking</ArticleTitle>
                <MediumSpacer />
                <SubTitle><i>Re-Documenting the work I did for my Master's Thesis.</i></SubTitle>
                <MediumSpacer />
                <h5>05/04/2022</h5>

                {s.blogSomeware.map((props) => (
                    <>
                        <MediumSpacer />

                        {props.isText === true ?
                            
                                <TextWrapper>
                                    <MainText>
                                        {props.articleText}
                                    </MainText>
                                </TextWrapper>
                            :
                            null
                        }

                        {props.isImage === true ?
                            <ArticleImg src={props.Img} />
                            :
                            null
                        }

                        {props.isFrame === true ?
                            <ArticleFrame src={props.Img}>Log In</ArticleFrame>
                            :
                            null
                        }

                        {props.isRefs === true ?
                            <TextWrapper>
                                <SubText>
                                    {props.articleText}
                                </SubText>
                            </TextWrapper>
                            :
                            null
                        }
                    </>
                ))}

                <MediumSpacer />
            </FullContainer>

        </>
    )
}

export default Archive;
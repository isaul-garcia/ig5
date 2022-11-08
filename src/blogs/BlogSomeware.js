import React from 'react';
import { MediumSpacer, TextWrapper, MainText, SubText } from '../globalStyles';
import * as s from './Data';
import Image from '../assets/sw_big.webp'
import Sep from '../assets/sep.svg'
import { ArticleFrame, ArticleImg, ArticleTitle, Fixer, Separator, SubTitle } from './Article.elements';
import BackButton from '../components/BackButton/BackButton'
const Archive = () => {
    return (
        <>
            <Fixer />
            <BackButton reduce />
            <ArticleImg src={Image} />

            <MediumSpacer />

            {s.blogSomeware.map((props, key) => (
                <div key={key}>

                    {props.isTitle === true ?

                        <>
                            <ArticleTitle>{props.articleTitle}</ArticleTitle>
                            <MediumSpacer />
                            <SubTitle><i>{props.subTitle}</i></SubTitle>
                            <MediumSpacer />
                            <h5>{props.datePosted}</h5>
                        </>
                        :
                        null
                    }

                    {props.isDesc === true ?

                        <>
                            <h5 style={{ color: "#777" }}>{props.descText}</h5>
                        </>
                        :
                        null
                    }

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
                        <ArticleFrame src={props.Img}>Empty</ArticleFrame>
                        :
                        null
                    }

                    {props.isSeparator === true ?
                        (<>
                            <MediumSpacer />
                            <Separator src={Sep} />
                            <MediumSpacer />
                        </>)
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
                </div>
            ))}

            <MediumSpacer />

        </>
    )
}

export default Archive;
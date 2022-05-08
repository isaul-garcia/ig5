import React from 'react';
import { MediumSpacer, LargeSpacer, TextWrapper, SubText, ArticleImg, ArticleFrame } from '../../globalStyles';


const ArticleFormat = ({props}) => {
    return (
        <>
            <LargeSpacer />
            <TextWrapper>
                <SubText>
                    {props.articleText}
                </SubText>
            </TextWrapper>

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

            <MediumSpacer />
        </>
    )
}

export default ArticleFormat;
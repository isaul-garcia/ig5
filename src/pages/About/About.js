

import React from 'react';
import { Helmet } from 'react-helmet';
import { Dit, Dity, MediumText, MobileSpacer, SectionText, SmallSpacer, SmallText } from '../../globalStyles';
import { TfiEmail } from 'react-icons/tfi'
import FadeIn from '../../components/Animations/FadeIn';

const Module = () => {
    return (
        <>
            <Helmet>
                <title>Isaúl García | More</title>
            </Helmet>
            <FadeIn>
                <MobileSpacer/>
                <Dit toRight><Dity /></Dit>
                <SectionText>
                    <MediumText>About me</MediumText>
                </SectionText>
                <MobileSpacer/>
                <SmallSpacer />
                <SectionText>
                    <SmallText>Hello, my name is Isaúl. I am a designer and a frontend developer who enjoys exploring the digital and making fun engaging interactions. I like building products for the web, as some of my main interests are in the evolution of the web and mixed realities.</SmallText>
                    <br />
                    <SmallText>I am open for work! Got a position for a frontend developer, need a web site for your business, or have an idea for a collaboration? Send me an email.</SmallText>
                    <br />
                    <SmallText>Let's build something.</SmallText>
                    <br />
                    <SmallText>↓ <TfiEmail /> ↓ <TfiEmail /> ↓</SmallText>
                </SectionText>
            </FadeIn>
        </>
    )
}

export default Module;
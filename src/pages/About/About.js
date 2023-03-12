

import React from 'react';
import { Helmet } from 'react-helmet';
import { Dit, Dity, MediumSpacer, MediumText, MobileSpacer, SectionText, SmallSpacer, SmallText } from '../../globalStyles';
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
                <MediumSpacer />
                <MobileSpacer/>
                <SmallSpacer />
                <SectionText>
                    <SmallText>Hello. I'm Isaúl, a designer and a web developer who enjoys exploring the digital. I like building products for the web, as some of my main interests are in the evolution of the web itself and mixed realities.</SmallText>
                    <br />
                    <SmallText>I'm open for work! Need a website for your business? Or, Have an idea for a collaboration? Shoot me an email. Let's build something!</SmallText>
                    <br />
                    <SmallText>↓ <TfiEmail /> ↓ <TfiEmail /> ↓</SmallText>
                </SectionText>
            </FadeIn>
        </>
    )
}

export default Module;
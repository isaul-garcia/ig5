import React, { useState } from 'react';
import { Button, MyCanvas } from '../../components';
import { FillContainer, MediumSpacer} from '../../globalStyles';
import { TitleWrapper, Container1, Container2, Container3, Container4, ContactWrapper, TopWrapper, Emoji, BigText, SubText, TopText, MessageText, TagWrapper, BubbleWrapper, SparksWrapper } from './HireMe.elements';
import { tagsData, tagsDataSecond } from './Data';
import Marquee from "react-fast-marquee";
import Postbox from "../../assets/Postbox.png"

const Module = () => {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <FillContainer>
                <Container1>
                    <TopWrapper>
                        <TopText customColor={"#bcbcbc"}>NOW CONSIDERING PROJECTS FOR Q2</TopText>
                    </TopWrapper>
                </Container1>

                <Container2>
                    <Marquee gradient={false} speed={50}>
                        <BigText customColor={"#0058d4"}>CHECK THIS OUT✶CHEQUEATE ESTO✹CHECK THIS OUT✶CHEQUEATE ESTO✹</BigText>
                    </Marquee>
                </Container2>

                <Container3>
                    <BubbleWrapper>
                        <MyCanvas />
                    </BubbleWrapper>
                    <ContactWrapper expand={expand}>
                        <MessageText customColor={"#008509"} onClick={() => { setExpand(!expand) }} expand={expand}>MESSAGE ME<Emoji src={Postbox} alt="postbox emoji"></Emoji></MessageText>
                    </ContactWrapper>
                </Container3>

                <Container4>
                    <TitleWrapper>
                        <BigText customColor={"#bcbcbc"}>Isaúl García</BigText>
                        <MediumSpacer />
                        <SubText customColor={"#bcbcbc"}>A creative developer building software solutions and exploring new interactions. A creative developer building software solutions and exploring new interactions. A creative developer building software solutions and exploring new interactions. </SubText>
                    </TitleWrapper>
                    <TagWrapper>
                        <Marquee gradient={false} speed={20} direction={'right'}>
                            {tagsData.map((props) => (
                                <Button {...props} />
                            ))}
                        </Marquee>
                        <Marquee gradient={false} speed={20}>
                            {tagsDataSecond.map((props) => (
                                <Button {...props} />
                            ))}
                        </Marquee>
                    </TagWrapper>
                    <SparksWrapper>
                        {/* <Sparks src={SparksImg} alt="sparks illustration"/> */}
                        {/* <svg version="1.1" viewBox="0 0 1100 1080">
                            <polyline class="path" stroke="#e0ae01" stroke-width="5" fill="none" stroke-miterlimit="10" points="2.1,84.5 58.1,13.5 36.1,84.5 92.1,13.5 70.1,84.5 126.1,13.5 104.1,84.5 160.1,13.5 138.1,84.5 
                            194.1,13.5 172.1,84.5 228.1,13.5 206.1,84.5 262.1,13.5 240.1,84.5 296.1,13.5 274.1,84.5 330.1,13.5 308.1,84.5 364.1,13.5 
                            342.1,84.5 398.1,13.5 376.1,84.5 432.1,13.5 410.1,84.5 466.1,13.5 444.1,84.5 500.1,13.5 478.1,84.5 534.1,13.5 512.1,84.5 
                            568.1,13.5 546.1,84.5 602.1,13.5 580.1,84.5 636.1,13.5 614.1,84.5 670.1,13.5 648.1,84.5 704.1,13.5"/>
                        </svg> */}
                    </SparksWrapper>
                </Container4>
            </FillContainer>
        </>
    )
}

export default Module;
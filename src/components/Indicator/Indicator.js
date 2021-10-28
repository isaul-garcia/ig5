import React, { useEffect, useState } from 'react';
import { 
    Container,
    IndicatorBlockHash,
    ProgressBar,
    ProgressBarContainer
    } from './Indicator.elements';

const Indicator = () => {
    const [scroll, setScroll] = useState(0);
  
    useEffect(() => {
  
        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${(totalScroll / windowHeight) * 92.1}`;
  
            setScroll(scroll);
        }
  
        window.addEventListener("scroll", progressBarHandler);
  
        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <>
            <ProgressBarContainer>
                <ProgressBar scroll={scroll} />
            </ProgressBarContainer>
            <Container>
                {/* they must have a summation of 92vh */}
                <IndicatorBlockHash lenght={'3.7vh'}  highlight={'#d8d8d8'} smooth to="#top" />
                <IndicatorBlockHash lenght={'18.1vh'}  highlight={'#d8d8d8'} smooth to="#digiden" />
                <IndicatorBlockHash lenght={'18.1vh'} highlight={'#d8d8d8'} smooth to="#loma" />
                <IndicatorBlockHash lenght={'18.1vh'} highlight={'#d8d8d8'} smooth to="#earth"/>
                <IndicatorBlockHash lenght={'23.2vh'}  highlight={'#d8d8d8'} smooth to="#markado"/>
                <IndicatorBlockHash lenght={'10.8vh'}  highlight={'#d8d8d8'} smooth to="#roomx"/>
                <IndicatorBlockHash lenght={'0vh'} last={true}/>
            </Container>
        </>
    )
}

export default Indicator;
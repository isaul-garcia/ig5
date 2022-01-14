import React, { useEffect, useState } from 'react';
import {
    Container,
    IndicatorBlockHash,
    ProgressBar,
    ProgressBarContainer,
    ForArchiveRoute
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
            {/* <ForArchiveRoute to="/archive" /> */}
            <Container>
                {/* they must have a summation of 92vh */}
                <IndicatorBlockHash lenght={'3vh'} highlight={'#d8d8d8'} smooth to="#top" />
                <IndicatorBlockHash lenght={'15.6vh'} highlight={'#d8d8d8'} smooth to="#digiden" />
                <IndicatorBlockHash lenght={'15.6vh'} highlight={'#d8d8d8'} smooth to="#loma" />
                <IndicatorBlockHash lenght={'15.6vh'} highlight={'#d8d8d8'} smooth to="#earth" />
                <IndicatorBlockHash lenght={'8.6vh'} highlight={'#d8d8d8'} smooth to="#gridy" />
                <IndicatorBlockHash lenght={'15.6vh'} highlight={'#d8d8d8'} smooth to="#markado" />
                <IndicatorBlockHash lenght={'8.6vh'} highlight={'#d8d8d8'} smooth to="#anaquel" />
                <IndicatorBlockHash lenght={'9.4vh'} highlight={'#d8d8d8'} smooth to="#roomx" />
                <IndicatorBlockHash lenght={'0vh'} last={true} />
            </Container>
        </>
    )
}

export default Indicator;
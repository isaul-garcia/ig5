import React from 'react';
import {
    Container,
    IndicatorBlockHash,
} from './Indicator.elements';

const Indicator = () => {

    return (
        <>
            <Container>
                {/* they must have a summation of 92vh */}
                <IndicatorBlockHash lenght={'92vh'} highlight={'#d8d8d8'} smooth to="#top" />
                <IndicatorBlockHash lenght={'0vh'} last={true} />
            </Container>
        </>
    )
}

export default Indicator;
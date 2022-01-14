import React from 'react';
import {
    Info,
    Footer,
    EmptyIndicator,
    DESIGN
} from '../../components';
import { OverContainer } from '../../globalStyles';

const Home = ({ scrolledDown }) => {
    return (
        <>
            <EmptyIndicator />

            <OverContainer>
                <Info scrolledDown={scrolledDown} />
                <DESIGN scrolledDown={scrolledDown} />
                <Footer />
            </OverContainer>
        </>
    )
}

export default Home;
import React from 'react';
import {
    Info,
    Footer,
    EmptyIndicator,
    DESIGN
} from '../../components';
import { Container } from '../../globalStyles';

const Home = ({ scrolledDown }) => {
    return (
        <>
            <EmptyIndicator />

            <Container>
                <Info scrolledDown={scrolledDown} />
                <DESIGN scrolledDown={scrolledDown} />
                <Footer />
            </Container>
        </>
    )
}

export default Home;
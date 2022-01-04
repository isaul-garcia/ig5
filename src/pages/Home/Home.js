import React from 'react';
import {
    Info,
    Footer,
    Indicator,
    LOMA,
    MARKADO,
    ROOMX,
    EARTH,
    DIGIDEN,
    OTHER,
    GRIDY,
    ANAQUEL
} from '../../components';
import { Container } from '../../globalStyles';

const Home = ({ scrolledDown }) => {
    return (
        <>
            <Indicator />

            <Container>
                <Info scrolledDown={scrolledDown} />
                <DIGIDEN scrolledDown={scrolledDown} />
                <LOMA scrolledDown={scrolledDown} />
                <EARTH scrolledDown={scrolledDown} />
                <GRIDY scrolledDown={scrolledDown} />
                <MARKADO scrolledDown={scrolledDown} />
                <ANAQUEL scrolledDown={scrolledDown} />
                <ROOMX scrolledDown={scrolledDown} />
                <OTHER scrolledDown={scrolledDown} />
                <Footer />
            </Container>
        </>
    )
}

export default Home;
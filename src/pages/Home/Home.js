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
import { OverContainer } from '../../globalStyles';

const Home = ({ scrolledDown }) => {
    return (
        <>
            <Indicator />

            <OverContainer>
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
            </OverContainer>
        </>
    )
}

export default Home;
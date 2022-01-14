import React from 'react';
import {
    Info,
    Footer,
    EmptyIndicator,
    AsList
} from '../../components';
import { OverContainer, Halved, MediumSpacer } from '../../globalStyles';
import { digiden, loma, earth, gridy, markado, anaquel, roomx, someware, mods, roca, artwork,
           ar1, ar2, ar3, ar4 } from './Data';

const Archive = ({ scrolledDown }) => {
    return (
        <>
            <EmptyIndicator />

            <OverContainer>
                <Info scrolledDown={scrolledDown} />

                <Halved>
                <h4>Projects</h4>
                <MediumSpacer />
                    <AsList {...digiden} />
                    <AsList {...loma} />
                    <AsList {...earth} />
                    <AsList {...gridy} />
                    <AsList {...markado} />
                    <AsList {...anaquel} />
                    <AsList {...roomx} />
                    <AsList {...someware} />
                    <AsList {...mods} />
                    <AsList {...roca} />
                    <AsList {...artwork} />
                </Halved>

                <Halved>
                <h4>Articles</h4>  
                <MediumSpacer />
                    <AsList isArticle={true} {...ar1} />
                    <AsList isArticle={true} {...ar2} />
                    <AsList isArticle={true} {...ar3} />
                    <AsList isArticle={true} {...ar4} />
                </Halved>

                <Footer />
            </OverContainer>
        </>
    )
}

export default Archive;
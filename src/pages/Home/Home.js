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
    ARCHIVE
} from '../../components';
import { Container } from '../../globalStyles';

const Home = ({scrolledDown}) => {
    return (
        <>
            <Indicator />
            
            <Container>
                <Info scrolledDown={scrolledDown}/>     
                <DIGIDEN scrolledDown={scrolledDown}/>         
                <LOMA scrolledDown={scrolledDown}/>   
                <EARTH scrolledDown={scrolledDown}/>
                <MARKADO scrolledDown={scrolledDown}/>
                <ROOMX scrolledDown={scrolledDown}/>  
                <ARCHIVE scrolledDown={scrolledDown}/>  
                <Footer />
            </Container>
        </>
    )
}

export default Home;
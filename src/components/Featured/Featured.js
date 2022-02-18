import React from 'react';
import { FeaturedContainer, FeaturedImg, FeaturedWrapper } from './Featured.elements';

import Image1 from '../../assets/anaquel-ss.jpg'

const Featured = () => {
    return (
        <>
            <FeaturedContainer>
                <FeaturedWrapper>
                    <FeaturedImg src={Image1}/>
                </FeaturedWrapper>
            </FeaturedContainer>
        </>
    )
}

export default Featured;
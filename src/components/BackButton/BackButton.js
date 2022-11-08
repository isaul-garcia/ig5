import React from 'react';
import {
    BackWrapper
} from './BackButton.elements';
import { IconContext } from 'react-icons/lib';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const Info = ({ reduce }) => {
    let history = useNavigate();
    const ReactIconWrap = {
        marginTop: -4,
        transform: 'translate(0, 4px)',
        borderRadius: '8px'
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#222222', size: 26 }}>
                <BackWrapper reduce={reduce} onClick={() => history(-1)} >
                    <IoIosArrowRoundBack style={ReactIconWrap} />
                </BackWrapper>
            </IconContext.Provider>
        </>
    )
}

export default Info;
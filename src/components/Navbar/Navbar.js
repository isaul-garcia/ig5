import React, { useEffect, useState } from 'react';
import {
    Icon,
    NavContainer,
    NavWrapper,
    NavLink,
    NavButton,
    IconWrapper,
    Navigation,
    MagicButton,
    MiniText,
} from './Navbar.elements';
import IgG from '../../assets/ig-gray.svg';

import { IconContext } from 'react-icons/lib';
import Descend from '../Animations/Descend';
import { TiThMenu } from 'react-icons/ti'
import { MobileSpacer } from '../../globalStyles';

const Navs = ({ handleClick }) => {
    return (
        <>
            <MobileSpacer />
            <NavWrapper toRight onClick={handleClick}>
                <NavLink last={+true} to="/more" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    Blogs
                </NavLink>
            </NavWrapper>
            <NavWrapper toRight onClick={handleClick}>
                <NavLink to="/snippets" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    Snippets
                </NavLink>
            </NavWrapper>
            <NavWrapper toRight onClick={handleClick}>
                <NavLink to="/about" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    About
                </NavLink>
            </NavWrapper>
        </>
    )
}

const Navbar = () => {
    const [button, setButton] = useState(+false);
    const [view, setView] = useState(+false);

    const handleClick = () => setView(!view);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(true)
        } else {
            setButton(false)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <IconContext.Provider value={{ color: '#bcbcbc', size: 22 }}>
                <Navigation>
                    <Descend>
                        <NavContainer view={view}>
                            <IconWrapper to="/">
                                <Icon src={IgG} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                            </IconWrapper>
                            <MagicButton last={+true} to="/more" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                <MiniText>LOOKING FOR FRONTEND ROLE!</MiniText>
                            </MagicButton>

                            {button ? (
                                <>
                                    <NavButton onClick={handleClick}>
                                        <TiThMenu style={{ transform: 'translate(0, 2px)' }} />
                                    </NavButton>
                                    {view ? (
                                        <Navs handleClick={handleClick} />
                                    ) : (
                                        null
                                    )}
                                </>
                            ) : (
                                <Navs />
                            )}

                        </NavContainer>
                    </Descend>
                </Navigation>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
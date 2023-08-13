import React, { useEffect, useState } from 'react';
import {
    NavContainer,
    NavWrapper,
    NavLink,
    NavButton,
    IconWrapper,
    Navigation,
    IGIcon,
    MagicButton,
    MiniText
} from './Navbar.elements';
import { IconContext } from 'react-icons/lib';
import Descend from '../Animations/Descend';
import { TiThMenu } from 'react-icons/ti'
import { MobileSpacer } from '../../globalStyles';
import { useLocation } from 'react-router-dom';

const Navs = ({ handleClick }) => {
    const location = useLocation();
    const active = +true;

    return (
        <>
            <MobileSpacer />
            <NavWrapper toRight onClick={handleClick}>
                <NavLink last={+true} active={location.pathname === "/more" ? active : undefined} to="/more" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    Blogs
                </NavLink>
            </NavWrapper>
            <NavWrapper toRight onClick={handleClick}>
                <NavLink active={location.pathname === "/snippets" ? active : undefined} to="/snippets" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    Snippets
                </NavLink>
            </NavWrapper>
            <NavWrapper toRight onClick={handleClick}>
                <NavLink active={location.pathname === "/about" ? active : undefined} to="/about" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
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
        if (window.innerWidth <= 900) {
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
                            <IconWrapper to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                <IGIcon />
                            </IconWrapper>
                            <MagicButton last={+true} to="/more" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                <MiniText scrollamount="4">hello</MiniText>
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

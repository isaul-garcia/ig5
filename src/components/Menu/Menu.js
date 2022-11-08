import React from 'react';
import {
    NavContainer,
    NavWrapper,
    Tile,
    TilesContainer,
    TilesWrapper,
} from './Menu.elements';

const Nav = (props) => {
    return (
        <>
            <NavContainer toggle={props.toggle} >
                {/* <ButtonWrap>
                    <Button toggle={props.toggle} setToggle={props.setToggle} />
                </ButtonWrap> */}

                <NavWrapper toggle={props.toggle}>
                    <TilesContainer toggle={props.toggle}>
                        <TilesWrapper>
                            <Tile main toggle={props.toggle}/>
                        </TilesWrapper>
                        <TilesWrapper>
                            {/* <Tile feat toggle={props.toggle}/>
                            <Tile feat toggle={props.toggle}/>
                            <Tile feat toggle={props.toggle}/>
                            <Tile feat toggle={props.toggle}/> */}
                        </TilesWrapper>
                        <TilesWrapper>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                            <Tile snippets toggle={props.toggle}/>
                        </TilesWrapper>
                        <TilesWrapper>
                            <Tile toggle={props.toggle}/>
                            <Tile toggle={props.toggle}/>
                            <Tile toggle={props.toggle}/>
                        </TilesWrapper>
                        <TilesWrapper>
                            <Tile socials toggle={props.toggle}/>
                            <Tile socials toggle={props.toggle}/>
                            <Tile socials toggle={props.toggle}/>
                            <Tile socials toggle={props.toggle}/>
                        </TilesWrapper>
                    </TilesContainer>
                </NavWrapper>
            </NavContainer>
        </>
    )
}

export default Nav;
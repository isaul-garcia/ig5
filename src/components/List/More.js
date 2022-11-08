import React, { useState } from 'react'
import {
    ItemContainer,
    TextWrapper,
    HeadText,
    ShowMore
} from './List.elements'

const Gallery = ({ setNumBlogs }) => {
    
    const [moreLink, setMoreLink] = useState("/")
    const [text, setText] = useState("Show More")
    function handleClick() {
        setMoreLink("/more")
        setNumBlogs(6)
        setText('See All')

        if (moreLink === "/more") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }
    return (
        <>
            <ItemContainer to={moreLink} onClick={() => handleClick()}>           
                <ShowMore>
                    <TextWrapper style={{textAlign: "center"}}>
                        <HeadText last>{text}</HeadText>
                    </TextWrapper>
                </ShowMore>
            </ItemContainer>
        </>
    )
}

export default Gallery;
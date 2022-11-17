import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    Ascend,
    GridItems,
    Tag
} from '../../components';
import FadeIn from '../../components/Animations/FadeIn';
import { Dit, Dity, MediumSpacer, MediumText, MobileSpacer, SectionText, Separator, SmallSpacer, SmallText } from '../../globalStyles';
import { allSnippets } from '../Home/Data';

const Module = () => {
    const gatherTags = () => {
        const all = allSnippets.map((item) => item.tag)
        const uniq = [...new Set(all.flat(1))]
        let newArr = []
        while (uniq.length > 0) { newArr.push(uniq.splice(0, 1)) }
        return newArr
    }
    const [myTags] = useState(gatherTags())

    const [foundSnippets, setFoundSnippets] = useState(allSnippets)
    const [active, setActive] = useState('all')

    const filter = (keyword) => {
        setActive(keyword?.toString())
        setFoundSnippets(allSnippets)
        if (keyword !== '') {
            const resultsSnippets = allSnippets.filter((item) => {
                return item.tag.includes(keyword)
            })
            setFoundSnippets(resultsSnippets)
        } else {
            setFoundSnippets(allSnippets)
        }
    }

    const showAll = (keyword) => {
        setActive(keyword.toString())
        setFoundSnippets(allSnippets)
    }
    return (
        <>
            <Helmet>
                <title>Isaúl García | Snippets</title>
            </Helmet>
            <FadeIn>
                <MobileSpacer />
                <Dit toRight><Dity /></Dit>
                <SectionText>
                    <MediumText>Snippets</MediumText>
                </SectionText>

                <MediumSpacer />
                <MobileSpacer />
                <SmallSpacer />
                <SectionText>
                    <SmallText>These are pieces of code I make that showcase specific features or demo tiny digital experiences. Mainly for explorative and educational purposes.</SmallText>
                </SectionText>
                <MediumSpacer />

                {myTags.slice(1, myTags.length).map((props, key) => (
                    <Tag key={key} filter={filter} active={active} val={props} />
                ))}
                <Tag filter={showAll} val={'all'} active={active} />

                <Ascend>
                    <Separator tiled>
                        <MediumSpacer />
                        {foundSnippets.map((props) => (
                            <GridItems snippets key={props.key} {...props} />
                        ))}
                    </Separator>
                </Ascend>
            </FadeIn>
        </>
    )
}

export default Module;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    Ascend,
    ListThree,
    ListTwo,
    Tag
} from '../../components';
import FadeIn from '../../components/Animations/FadeIn';
import { Dit, Dity, MediumSpacer, MediumText, MobileSpacer, SectionText, Separator, SmallSpacer, SmallText } from '../../globalStyles';
import { allProjects } from '../Home/Data';

const Module = () => {
    const gatherTags = () => {
        const all = allProjects.map((item) => item.tag)
        const uniq = [...new Set(all.flat(1))]
        let newArr = []
        while (uniq.length > 0) { newArr.push(uniq.splice(0, 1)) }
        return newArr
    }
    const [myTags] = useState(gatherTags())

    const [foundProjects, setFoundProjects] = useState(allProjects)
    const [active, setActive] = useState('all')

    const filter = (keyword) => {
        setActive(keyword?.toString())
        setFoundProjects(allProjects)
        if (keyword !== '') {
            const resultsProjects = allProjects.filter((item) => {
                return item.tag?.toString().toLowerCase().startsWith(keyword.toLowerCase())
            })
            setFoundProjects(resultsProjects)
        } else {
            setFoundProjects(allProjects)
        }
    }

    const showAll = (keyword) => {
        setActive(keyword.toString())
        setFoundProjects(allProjects)
    }
    return (
        <>
            <Helmet>
                <title>Isaúl García | About</title>
            </Helmet>
            <FadeIn>
                <MobileSpacer />
                <Dit toRight><Dity /></Dit>
                <SectionText>
                    <MediumText>Blogs and more</MediumText>
                </SectionText>
                <MediumSpacer />
                <MobileSpacer />
                <SmallSpacer />
                <SectionText>
                    <SmallText>Apart from blogs, this space currently serves as some sort of archive. I want to write more, so will try to fill this with more of my thoughts.</SmallText>
                </SectionText>
                <MediumSpacer />

                {myTags.map((props, key) => (
                    <Tag key={key} filter={filter} active={active} val={props} />
                ))}
                <Tag filter={showAll} val={'all'} active={active} />

                <Ascend>
                    <Separator>
                        <MediumSpacer />
                        {foundProjects.map((props) => (
                            props.description && !props.hasTag ? <ListThree key={props.key} {...props} />
                                : props.hasTag ? <ListThree key={props.key} {...props} />
                                    : <ListTwo key={props.key} {...props} />
                        ))}
                    </Separator>
                </Ascend>
            </FadeIn>
        </>
    )
}

export default Module;
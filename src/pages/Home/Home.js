import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    AnaquelThumbnail,
    AntilliasThumbnail,
    Ascend,
    GridItemLast,
    GridItems,
    Header,
    ListThree,
    ListTwo,
    More,
    Tag
} from '../../components';
import FadeIn from '../../components/Animations/FadeIn';
import {
    MediumSpacer,
    LargeSpacer,
    Dit,
    Dity
} from '../../globalStyles';
import {
    allSnippets,
    allProjects
} from './Data';
import {
    Separator,
    HomeWrap,
    MediumText,
    SectionText
} from './Home.elements';

const Home = ({ collapse }) => {
    const [numBlogs, setNumBlogs] = useState(4)

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
                <title>Isaúl García</title>
            </Helmet>
            <FadeIn>
                {/* Header */}
                <Header collapse={collapse} id={"header"} />

                <HomeWrap>
                    {/* Featured */}
                    <LargeSpacer collapse={collapse} />
                    <Dit collapse={collapse} toRight><Dity /></Dit>
                    <SectionText collapse={collapse}>
                        <MediumText collapse={collapse}>Featured</MediumText>
                    </SectionText>
                    <Ascend>
                        <Separator tiled>
                            <MediumSpacer />
                            <AnaquelThumbnail collapse={collapse} />
                            <AntilliasThumbnail collapse={collapse} />
                        </Separator>
                    </Ascend>

                    {/* Snippets */}
                    <LargeSpacer collapse={collapse} />
                    <Dit collapse={collapse} toRight><Dity collapse={collapse} /></Dit>
                    <SectionText collapse={collapse}>
                        <MediumText collapse={collapse}>Snippets</MediumText>
                    </SectionText>
                    <Ascend>
                        <Separator tiled>
                            <MediumSpacer />
                            {allSnippets.slice(0, 4).map((props) => (
                                <GridItems collapse={collapse} snippets={+true} key={props.key} {...props} />
                            ))}
                            <GridItemLast collapse={collapse} header='See all Snippets' linkId={'/snippets'} snippets={+true} freeze />
                        </Separator>
                    </Ascend>

                    {/* Blogs */}
                    <LargeSpacer collapse={collapse} />
                    <Dit collapse={collapse} toRight><Dity collapse={collapse} /></Dit>
                    <SectionText collapse={collapse}>
                        <MediumText collapse={collapse}>More</MediumText>
                    </SectionText>
                    {myTags.map((props, key) => (
                        <Tag key={key} filter={filter} active={active} val={props} />
                    ))}
                    <Tag filter={showAll} val={'all'} active={active} />
                    <Ascend>
                        <Separator>
                            <MediumSpacer />
                            {foundProjects.slice(0, numBlogs).map((props) => (
                                props.description && !props.hasTag ? <ListThree collapse={collapse} key={props.key} {...props} /> : props.hasTag ? <ListThree collapse={collapse} key={props.key} {...props} /> : <ListTwo collapse={collapse} key={props.key} {...props} />
                            ))}
                            <More collapse={collapse} setNumBlogs={setNumBlogs} />
                        </Separator>
                    </Ascend>
                </HomeWrap>
            </FadeIn>
        </>
    )
}

export default Home;
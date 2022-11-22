import React from 'react'
import "inter-ui/inter.css"
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, ScopeReview, Snippets, About, More } from './pages'
import {
    DIGIDEN,
    ANAQUEL,
    ROOMX,
    MARKADO,
    GRIDY,
    EARTH,
    LOMA,
    TH,
    ROCA,
    MODS,
    ANTILLIAS,
    DESIGN
} from './components'
import { BlogHello, BlogSomeware } from './blogs'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/snippets' element={<Snippets />} />
                <Route path='/more' element={<More />} />
                <Route path='/scope' element={<ScopeReview />} />
                {/* Projects */}
                <Route path='/digiden' element={<DIGIDEN />} />
                <Route path='/loma' element={<LOMA />} />
                <Route path='/earth' element={<EARTH />} />
                <Route path='/gridy' element={<GRIDY />} />
                <Route path='/markado' element={<MARKADO />} />
                <Route path='/anaquel' element={<ANAQUEL />} />
                <Route path='/antillias' element={<ANTILLIAS />} />
                <Route path='/room-x' element={<ROOMX />} />
                <Route path='/treehouse' element={<TH />} />
                <Route path='/roca' element={<ROCA />} />
                <Route path='/mods' element={<MODS />} />
                <Route path='/design' element={<DESIGN />} />
                {/* Blogs */}
                <Route path='/hello-internet' element={<BlogHello />} />
                <Route path='/someware' element={<BlogSomeware />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
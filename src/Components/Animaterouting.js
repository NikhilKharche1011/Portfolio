import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const Home = lazy(() => import('./Home'))
const Projects = lazy(() => import('./Projects'))
const About = lazy(() => import('./About_me'))
// const Resume = lazy(() => import('./Resume'))
const Contact = lazy(() => import('./Contact_me'))



const Animaterouting = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/About_me' element={<About />} />
                {/* <Route path='/Resume' element={<Resume />} /> */}
                <Route path='/Contact_me' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Animaterouting
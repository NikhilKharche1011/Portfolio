import React, { useEffect, useState, Suspense, lazy } from 'react';
import { ChakraProvider, Flex, Text } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { FaLinkedin } from 'react-icons/fa'
const Home = lazy(() => import('./Components/Home'))
const Projects = lazy(() => import('./Components/Projects'))
const About_me = lazy(() => import('./Components/About_me'))
const Resume = lazy(() => import('./Components/Resume'))
const Contact_me = lazy(() => import('./Components/Contact_me'))
function App() {
  return (
    <ChakraProvider>
      <Suspense fallback={
        <>
          <Flex h='100lvh' width='100%' bgColor='#1a1a1a' justifyContent='center' alignItems='center'>
            <Text color='#ff4545' fontSize='50px'>
              LOADING...
            </Text>
          </Flex>
        </>
      }>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/About_me' element={<About_me />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Contact_me' element={<Contact_me />} />
          </Routes>
        </Router>
        <Flex flexDirection='row' transform='rotate(270deg)' position='fixed' top='45%' left='-10px' display={{ xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', base: 'none' }} >
          <Text letterSpacing='1px' fontSize='18px' color='#fff'>FOLLOW ME - </Text>
          <Flex color='#fff' alignItems='center' fontSize='17px' mx='5px' justifyContent='center' ><FaLinkedin /></Flex>

        </Flex>
      </Suspense>


    </ChakraProvider>
  );
}

export default App;

import React, { useEffect, useState, Suspense, lazy } from 'react';
import { ChakraProvider, Flex, Text, extendTheme } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn  } from "react-icons/fa6";
const Home = lazy(() => import('./Components/Home'))
const Projects = lazy(() => import('./Components/Projects'))
const About_me = lazy(() => import('./Components/About_me'))
const Resume = lazy(() => import('./Components/Resume'))
const Contact_me = lazy(() => import('./Components/Contact_me'))
function App() {
const customtheme = extendTheme({

   breakpoints : {
    base: '0em',
    sm: '34em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
})

  return (
    <ChakraProvider theme={customtheme}>
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
      </Suspense>

      <Flex flexDirection='row' transform='rotate(270deg)' position='fixed' top='50%' left='-20px' display={{ xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', base: 'none' }} >
        <Text letterSpacing='1px' fontSize='18px' color='#ebebeb' transition='1s' _hover={{textDecoration:'underline #ff4545', textUnderlineOffset:'5px'}}>CONTACT ME - </Text>
        <Flex bgColor='#ff4545' px='3px' color='#ebebeb' alignItems='center' fontSize='16px' mb='5px' justifyContent='center' mx='2px' ><FaLinkedinIn  /></Flex>
        <Flex bgColor='#ff4545' px='3px' color='#ebebeb' alignItems='center' fontSize='16px' mb='5px' justifyContent='center' mx='2px' ><BiLogoGmail /></Flex>

      </Flex>

    </ChakraProvider>
  );
}

export default App;

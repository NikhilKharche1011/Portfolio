import React, { Suspense, lazy } from 'react';
import { ChakraProvider, Flex, Text, extendTheme } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
const Home = lazy(() => import('./Components/Home'))
const Projects = lazy(() => import('./Components/Projects'))
const About = lazy(() => import('./Components/About_me'))
const Resume = lazy(() => import('./Components/Resume'))
const Contact= lazy(() => import('./Components/Contact_me'))
function App() {
  const customtheme = extendTheme({

    breakpoints: {
      base: '0em',
      sm: '40em',
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
          <AnimatePresence>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/About_me' element={<About />} />
              <Route path='/Resume' element={<Resume />} />
              <Route path='/Contact_me' element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </Suspense>



    </ChakraProvider>
  );
}

export default App;

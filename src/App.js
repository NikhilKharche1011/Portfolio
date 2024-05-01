import React, { Suspense, lazy } from 'react';
import { ChakraProvider, Flex, Text, extendTheme } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';
// const Animaterouting = lazy(() => import('./Components/Animaterouting'))
import Animaterouting from './Components/Animaterouting'

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
      {/* <Suspense fallback={
        <>
          <Flex h='100lvh' width='100%' bgColor='#1a1a1a' justifyContent='center' alignItems='center'>
            <Text color='#ff4545' fontSize='50px'>
              LOADING...
            </Text>
          </Flex>
        </>
      }> */}
        <Router>
          <Animaterouting />
        </Router>
      {/* </Suspense> */}



    </ChakraProvider>
  );
}

export default App;

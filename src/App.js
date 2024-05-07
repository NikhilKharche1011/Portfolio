import React, { Suspense, lazy } from 'react';
import { ChakraProvider, Flex, Text, extendTheme, Spinner } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';
const Animaterouting = lazy(() => import('./Components/Animaterouting'))
function App() {
  const customtheme = extendTheme({

    breakpoints: {
      base: '0em',
      sm: '33em',
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
            <Spinner
              thickness='5px'
              speed='1s'
              emptyColor='#2a2a2a'
              color='#ff4545'
              size='xl'
            />
          </Flex>
        </>
      }>
        <Router>
          <Animaterouting />
        </Router>
      </Suspense>



    </ChakraProvider>
  );
}

export default App;

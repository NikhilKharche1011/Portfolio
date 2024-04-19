import React, { useEffect, useState, Suspense, lazy } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
const Home = lazy(() => import('./Components/Home'))
function App() {
  return (
    <ChakraProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      
      
    </ChakraProvider>
  );
}

export default App;

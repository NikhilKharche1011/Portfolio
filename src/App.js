import React, { useEffect, useState, Suspense, lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <ChakraProvider>
      <Navbar />

    </ChakraProvider>
  );
}

export default App;

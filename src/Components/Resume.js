import React from 'react'
import Navbar from './Navbar'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const Resume = () => {
  const MotionFlex = motion(Flex);
 

  const pageVariants = {
    initial: {
      // x: -300,
      transform:'scale(0)',
      opacity: 0, 
      background: '#ff454596',
      transition: { duration: 0.5 }, // Adjust duration as needed
    },
    exit: {
      // x: -300,
      transform:'scale(2)',
      opacity: 0, 
      background: '#ff454596',
      transition: { duration: 0.5 }, // Adjust duration as needed
    },
    enter: {
      opacity: 1,
      transform:'scale(1)',
      background: '#1a1a1a',
      transition: { duration: 1.2 }, // Adjust duration as needed
    },
  };
  return (
    <MotionFlex
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    w='100%'
    h='100lvh'
    flexDirection='column'
    bgColor='#1a1a1a'
    bgPosition='center'
    bgSize='cover'
    overflowY='scroll'
    className='scroll'
    alignItems='center'
    >
    <Navbar />
    <Flex>

        <Text color='white'>
            Resume
        </Text>
    </Flex>
</MotionFlex>
  )
}

export default Resume
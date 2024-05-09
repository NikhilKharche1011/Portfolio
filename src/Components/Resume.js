import React from 'react'
import Navbar from './Navbar'
import { Flex, Text, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const Resume = () => {
  const MotionFlex = motion(Flex);
  const MotionGrid = motion(Grid)
  const MotionGridItem = motion(GridItem)

  const pageVariants = {
    initial: {
      // x: -300,
      transform: 'scale(0)',
      opacity: 0,
      background: '#ff454596',
      transition: { duration: 0.8   }, // Adjust duration as needed
    },
    exit: {
      // x: -300,
      transform: 'scale(2)',
      opacity: 0,
      background: '#ff454596',
      transition: { duration: 0.8   }, // Adjust duration as needed
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
      background: '#1a1a1a',
      transition: { duration: 0.8   }, // Adjust duration as needed
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
      overflow='hidden'
      className='scroll'
      alignItems='center'
      position='relative'
    >
      <Navbar />
      <Flex>

      
      </Flex>
      <MotionGrid
        initial={{ transform: 'scale(0)' }}
        animate={{ transform: 'scale(1)' }}
        h='100vh'
        zIndex='-1'
        width='100%'
        templateColumns={{ base: 'repeat(4, 1fr)', sm: 'repeat(7, 1fr)', md: 'repeat(10, 1fr)' }}
        position='absolute'
        top='0px'
        left='0px'
      >
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
        <MotionGridItem
          initial={{ border: '2px solid #fff' }}
          animate={{ border: '1px solid #0c0c0c' }}
          transition={{ duration: 1 }}
          w='100%'
          h='10vh'
          border='1px solid #0c0c0c'
        />
      </MotionGrid>
    </MotionFlex>
  )
}

export default Resume
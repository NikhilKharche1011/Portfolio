import React from 'react'
import Navbar from './Navbar'
import {
    Flex,
    Button,
    Text,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Resume from '../assets/Nikhil_resume_nov_2024.pdf'

const Home = () => {
    const MotionText = motion(Text);
    const MotionFlex = motion(Flex);
    const MotionButton = motion(Button);
    const MotionGrid = motion(Grid);
    const MotionGridItem = motion(GridItem);

    const pageVariants = {
        initial: {
            transform: 'scale(0)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.8 },
        },
        exit: {
            transform: 'scale(2)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.2 },
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)',
            background: '#1a1a1a',
            transition: { duration: 0.8 },
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
            position='relative'

        >
            <Navbar />


            <Flex
                justify="center"
                height={{ '2xl': '100%', xl: '100%', lg: '100%', md: '100%', sm: '100%', base: '100lvh' }}

                overflow='hidden'
            >
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
                <Flex
                    zIndex='1'
                    flexDirection='column'
                    justifyContent={{ base: 'center', sm: 'center' }}
                    alignItems={{ base: 'flex-start', sm: 'center' }}
                    p={{ base: "0px", sm: '5px' }}
                    // mt={{ base: "10%", sm: '0px' }}
                    maxW={{ '2xl': '75%', xl: '90%', lg: "90%", md: "90%", sm: "90%", base: "90%" }}
                >
                    <MotionText
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        fontFamily='"Major Mono Display", monospace'
                        as="h1"
                        fontSize={{ '2xl': '1vw', xl: '1vw', base: '15px' }}
                        color="#a6a6a6"
                    >
                        I'm
                    </MotionText>
                    <MotionText
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        as="h2"
                        textAlign={{ base: 'flex-start', sm: 'center' }}
                        fontSize={{ '2xl': '5vw', xl: '5vw', lg: '5vw', md: '5vw', sm: '5vw', base: '45px' }}
                        lineHeight='1'
                        color="#ff4545BD"
                        mt={2}
                        fontWeight='900'
                    >
                        <Text as='span'>&lt;</Text> Nikhil Kharche <Text as='span'>/&gt;</Text>
                    </MotionText>
                    <MotionText
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        as="h2"
                        // textAlign='left'
                        fontSize={{ '2xl': '2.5vw', xl: '2.5vw', lg: '2.5vw', md: '2.5vw', sm: '2.5vw', base: '25px' }}
                        lineHeight='1'
                        color="#a6a6a6"
                        mb='20px'
                        fontWeight='900'
                    >
                        React Js Developer
                    </MotionText>
                    <MotionText
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        fontSize={{ base: '18px', sm: '1.5vw', md: '1vw' }}
                        color="#a6a6a6"
                        letterSpacing='1px'
                        textAlign={{ base: 'flex-start', sm: 'center' }}
                    >
                        Passionate frontend developer at Marworx Technologies Pvt Ltd., Pune with <Text as='span' color='#ff4545' m='0px' fontSize={{ base: '18px', sm: '1.5vw', md: '1vw' }} > 1 Year </Text>of experience in <Text as='span' color='#ff4545' m='0px' fontSize={{ base: '18px', sm: '1.5vw', md: '1vw' }} >React js, Bootstrap, Chakra Ui</Text>. Committed to crafting engaging user experiences.
                    </MotionText>
                    <MotionButton
                        onClick={() => window.open(Resume)}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=' aniblock4'
                        bgColor='transparent'
                        border='2px solid #a6a6a6'
                        color='#ff4545'
                        letterSpacing='1px'
                        _hover={{ color: '#ebebeb', border: '2px solid #ff4545' }}
                        zIndex='11'
                        borderRadius='0px'
                        w='max-content'
                        mt={4}
                    >
                        Resume
                    </MotionButton>
                </Flex>
            </Flex>
            <Flex h={{ base: '7vh', sm: '0vh' }} bgColor='#1a1a1a00' w='100%'>

            </Flex>
            <div className="cursor"></div>
        </MotionFlex >


    )
}

export default Home
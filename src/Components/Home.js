import React from 'react'
import Navbar from './Navbar'
import {
    Flex,
    Button,
    Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
const Home = () => {
    const MotionText = motion(Text);
    const MotionFlex = motion(Flex);
    const MotionButton = motion(Button);

    const pageVariants = {
        initial: {
            transform: 'scale(0)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.5 },
        },
        exit: {
            transform: 'scale(2)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.5 },
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)',
            background: '#1a1a1a',
            transition: { duration: 1 },
        },
    };
    return (
        <MotionFlex
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            // inherit={{ x: - 1000, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // exit={{ x: 1000, opacity: 0 }}
            // transition={{ duration: 5 }}
            w='100%'
            h='100lvh'
            flexDirection='column'
            bgColor='#1a1a1a'
            bgPosition='center'
            bgSize='cover'
            overflowY='scroll'
            className='scroll'
        // alignItems='center'
        // justifyContent='center'
        >
            <Navbar />
            {/* <Flex justifyContent='center' alignItems='center' h='100%' > */}

            <Flex
                // align="center"
                justify="center"
                height={{ '2xl': '100%', xl: '100%', lg: '100%', md: '100%', sm: '100%', base: '100lvh' }}
            // backgroundColor="green.800"
            >
                <Flex flexDirection='column' justifyContent='center' alignItems='center' p={5} maxW={{ '2xl': '75%', xl: '90%', lg: "90%", md: "90%", sm: "90%", base: "90%" }} >
                    <MotionText
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        fontFamily='"Major Mono Display", monospace'
                        // className='animation aniblock1'
                        as="h1"
                        fontSize={{ '2xl': '1vw', xl: '1vw' }}
                        color="white"
                    >
                        I'm
                    </MotionText>
                    <MotionText
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        // className=' aniblock2'
                        as="h2"
                        textAlign='center'
                        fontSize={{ '2xl': '5vw', xl: '5vw', lg: '5vw', md: '5vw', sm: '5vw', base: '5vw' }}
                        lineHeight='0.9'
                        color="#ff4545BD"
                        mt={2}
                        fontWeight='900'
                    >
                        &lt; Nikhil Kharche /&gt;
                    </MotionText>
                    <MotionText
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        // className=' aniblock4'
                        as="h2"
                        textAlign='left'
                        fontSize={{ '2xl': '2.5vw', xl: '2.5vw', lg: '2.5vw', md: '2.5vw', sm: '2.5vw', base: '2.5vw' }}
                        lineHeight='0.9'
                        color="#ebebeb"
                        mb='20px'
                        fontWeight='900'
                    >
                        React Js Developer
                    </MotionText>
                    <MotionText
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        // className='animation aniblock3'
                        // fontSize='13px'
                        fontSize='1.2vw'
                        color="#ebebeb"
                        letterSpacing='1px'
                        // fontFamily='monospace'
                        textAlign='center'
                    >
                        Passionate frontend developer at Knight Motion Media, Pune, with 6 months of experience in <span style={{ color: '#ff4545', m: '0px', fontFamily: 'monospace', fontSize: '1.1vw' }}>React js, Bootstrap, Chakra Ui</span>. Committed to crafting engaging user experiences.
                    </MotionText>
                    <MotionButton
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=' aniblock4'
                        bgColor='transparent'
                        border='2px solid #ff4545'
                        color='#ebebeb'
                        letterSpacing='1px'
                        _hover={{ color: '#ebebeb' }}
                        zIndex='11'
                        borderRadius='0px'
                        // _hover={{ bgColor: '#ff4545', transform: 'scale(1.1)', color: '#ebebebf' }}
                        // transition='0.5s ease-in-out'
                        mt={4}
                    >
                        Resume
                    </MotionButton>
                </Flex>
            </Flex>


            {/* </Flex> */}
        </MotionFlex >


    )
}

export default Home
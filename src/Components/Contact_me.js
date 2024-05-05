import React from 'react'
import Navbar from './Navbar'
import {
    Flex,
    Text,
    Box,
    Heading,
    Link,
    Button,
    Stack,
    Icon,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion } from 'framer-motion'
import map from '../assets/map_image.webp'

const Contact_me = () => {
    const Mapflex = motion(Flex)
    const MotionFlex = motion(Flex);
    const MotionGrid = motion(Grid)
    const MotionGridItem = motion(GridItem)

    const pageVariants = {
        initial: {
            // x: -300,
            transform: 'scale(0)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.5 }, // Adjust duration as needed
        },
        exit: {
            // x: -300,
            transform: 'scale(2)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.5 }, // Adjust duration as needed
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)',
            background: '#1a1a1a',
            transition: { duration: 1 }, // Adjust duration as needed
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
            position='relative'
            bgColor='#1a1a1a'
            bgPosition='center'
            bgSize='cover'
            overflow='hidden'
            className='scroll'
            alignItems='center'
        >
            <Navbar />
            <Flex

                w='100%'
                h='100%'
                px={{ xl: '5%', lg: '4%', md: '3%', sm: '3%', base: '2%' }}
                // justifyContent='center'
                // bgImage={bg_image}
                bgPosition='center'
                bgSize='cover'
                justifyContent='center'
                flexDirection='column'
                overflowY='scroll'
                className='scrollcss'
            // position='relative'
            >
                <Flex
                    w='100%'
                    h='60vh'
                    bgImage={map}
                    bgPosition='center'
                    bgSize='cover'
                    borderRadius='15px'

                    flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                    justifyContent='space-around'
                >
                    <Flex
                        width={{ base: '100%', sm: '100%', md: '30%', lg: '35%', xl: '35%' }}
                        fontSize={{ base: '6vw', sm: '3.5vw' }}
                        alignItems={{ base: 'flex-start', sm: 'flex-end' }}
                        justifyContent='center'
                        h='100%'
                        color='#ff4545'
                    >
                        {/* <Text>
                            Contact Me
                        </Text> */}
                    </Flex>
                    <Flex
                        w={{ base: '100%', sm: '100%', md: '35%', lg: '30%', xl: '25%' }}
                        h='100%'
                        transform={{ base: 'scale(1)', sm: 'scale(1)', md: 'scale(1.1)' }}
                        borderRadius='5px'
                        bgColor='#ebebeb'
                        overflowY='scroll'
                        className='scroll'
                    >
                        <Flex as='form' width='100%' flexDirection='column' overflowY='scroll' className='scroll' justifyContent='center' alignItems='flex-end' >
                            <Flex w='100%' flexDirection='column' px='2%' overflowY='scroll' className='scroll'>
                                <FormControl my='6%' variant='flushed'>
                                    {/* <FormLabel  fontWeight='900'>Name</FormLabel> */}
                                    <Input
                                        _placeholder={{ color: '#000' }}
                                        placeholder='Name'
                                        m='0px'
                                        color='#2a2a2a'
                                        border='none'
                                        borderBottom='1px solid #ccc'
                                        borderRadius='0xp'
                                        outline='none'
                                        _focus={{ boxShadow: 'none' }}
                                        _focusVisible={{ fontWeight: '900', border: 'none', boxShadow: 'none', color: '#0c0c0c', borderBottom: '2px solid #a6a6a6', bgColor: '#ccc' }}
                                        _hover={{ borderBottom: '2px solid #a6a6a6' }}
                                        type='text'

                                    />
                                </FormControl>

                                <FormControl my='6%' variant='flushed'>
                                    {/* <FormLabel  fontWeight='900'>Email</FormLabel> */}
                                    <Input
                                        _placeholder={{ color: '#000' }}
                                        placeholder='Email'
                                        m='0px'
                                        color='#2a2a2a'
                                        border='none'
                                        borderBottom='1px solid #ccc'
                                        borderRadius='0xp'
                                        outline='none'
                                        _focus={{ boxShadow: 'none' }}
                                        _focusVisible={{ fontWeight: '900', border: 'none', boxShadow: 'none', color: '#0c0c0c', borderBottom: '2px solid #a6a6a6', bgColor: '#ccc' }}
                                        _hover={{ borderBottom: '2px solid #ff4545' }}
                                        type='email'

                                    />
                                </FormControl>

                                <FormControl my='6%' variant='flushed'>
                                    {/* <FormLabel  fontWeight='900'>Message</FormLabel> */}
                                    <Textarea
                                        overflowY='scroll'
                                        className='scrollcss'
                                        _placeholder={{ color: '#000' }}
                                        placeholder='Message'
                                        m='0px'
                                        color='#2a2a2a'
                                        border='none'
                                        borderBottom='1px solid #ccc'
                                        borderRadius='0xp'
                                        outline='none'
                                        _focus={{ boxShadow: 'none' }}
                                        fontWeight='900'
                                        _focusVisible={{ fontWeight: '900', border: 'none', boxShadow: 'none', color: '#0c0c0c', borderBottom: '2px solid #a6a6a6', bgColor: '#ccc' }}
                                        _hover={{ borderBottom: '2px solid #ff4545' }}
                                        type='text'

                                    />
                                </FormControl>
                            </Flex>
                            <Button
                                type='submit'
                                w='fit-content'
                                bgColor='#ff4545'
                                borderRadius='0px'
                                my='6%'
                                _hover={{ bgColor: '#ff4545' }}
                            >
                                Send Message
                            </Button>


                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    mt='3%'
                    alignItems='center'
                    w='100%'
                    flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                >
                    <Flex
                        h='100%'
                        width={{ base: '100%', sm: '34%' }}
                        direction='column'
                    >
                        <Flex

                            fontSize={{ base: '6vw', sm: '3.8vw' }}
                            h='100%'
                            color='#ff4545'
                            overflowY='scroll' className='scroll'
                            lineHeight='1'
                        >
                            <Text>
                                Contact Me
                            </Text>
                        </Flex>
                        <Flex>
                            <Text
                                color='#a6a6a6'
                                fontSize={{ base: '2.3vw', sm: '1.5vw', md: '1vw' }}
                            >
                                You may reach out to me via the provided contact form or through the social media links.
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center' justifyContent='center' width={{ base: '100%', sm: '40%' }}>
                        <Text
                            color='#ebebeb'
                            fontSize={{ base: '2.3vw', sm: '1.5vw', md: '1vw' }}

                        >
                            Email
                        </Text>
                        <Text
                            color='#a6a6a6'
                            as='a'
                            fontSize={{ base: '2.3vw', sm: '1.5vw', md: '1vw' }}
                            href='mailto:nkharche99@gmail.com'
                            _hover={{color:'#ff4545'}}
                        >
                            nkharche99@gmail.com
                        </Text>

                    </Flex>

                    <Flex flexDirection='row' alignItems='center' justifyContent='flex-start' width={{ base: '100%', sm: '30%' }}>
                        <Flex
                            mx='10px'
                            _hover={{color:'#ff4545'}}
                            color='#a6a6a6'
                            fontSize='2vw'

                        >
                            <Flex as='a' href='https://www.linkedin.com/in/nikhilkharche99/'>
                                <FaLinkedin />
                            </Flex>
                        </Flex>

                        <Flex
                            mx='10px'
                            _hover={{color:'#ff4545'}}
                            color='#a6a6a6'
                             fontSize='2vw'>
                            <Flex
                                as='a'
                                href='https://github.com/NikhilKharche1011'
                            >
                                <FaGithub />
                            </Flex>
                        </Flex>
                        <Flex
                            mx='10px'
                            _hover={{color:'#ff4545'}}
                            color='#a6a6a6'
                             fontSize='2vw'
                        >
                            <Flex
                                as='a'
                                href='https://www.instagram.com/_nikuhiru_/'
                            >
                                <FaInstagram />
                            </Flex>
                        </Flex>
                        <Flex
                            mx='10px'
                            _hover={{color:'#ff4545'}}
                            color='#a6a6a6'
                             fontSize='2vw'
                        >
                            <Flex 
                            as='a'
                            href='https://twitter.com/NikhilKharche2'
                            >
                            <FaXTwitter />
                            </Flex>
                        </Flex>

                    </Flex>

                </Flex>
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

export default Contact_me
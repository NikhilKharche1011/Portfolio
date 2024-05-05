import React from 'react'
import Navbar from './Navbar'
import { Flex, Text, Box, Heading, Link, Button, Stack, Icon, Grid, GridItem } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'
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
                alignItems='center'
                flexDirection='column'
            // position='relative'
            >
                {/* <Flex w='100%' h='100%' position='relative' justifyContent='center' overflow='hidden'>

                    <MotionFlex
                        position='absolute'
                        h='max-content'
                        color='#ff4545'
                        w='100%'
                        zIndex='11'
                            fontSize={{base:'30px', sm:'40px', md:'50px', lg:'60px', xl:'70px', '2xl':'80px'}}
                            top={{base:'0px', sm:'0px', md:'-10px', lg:'-15px', xl:'-23px', '2xl':'-31px'}} 
                    >
                        <Text
                            // fontSize='4.5vw'
                        >
                            Contact Me
                        </Text>
                    </MotionFlex>
                    <Mapflex
                        h='100%'
                        w='100%'
                        // justifyContent='center'
                        initial={{ x: -300, opacity: 0, backgroundColor: '#ff454500' }}
                        exit={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, backgroundColor: '#ff454500' }}
                        transition={{ duration: 1 }}
                        my='30px'
                        bgColor='#ff454'
                        filter='grayscale(100%) invert(100%)'
                    >

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711140519!2d73.78056593920137!3d18.524598599722342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714503919281!5m2!1sen!2sin"
                            width="55%"
                            style={{ height: "70vh", borderRadius: '30px', border: '3px solid #ff4545' }}
                        ></iframe>
                    </Mapflex>
                </Flex> */}
                <Box color='#fff'>
                    <Heading as="h2">Let's Get in Touch: Ways to Connect with Me</Heading>
                    <Text>
                        I appreciate your interest in reaching out to me! If you have feedback, questions, or suggestions, feel free to email me at nkharche99@gmail.com I usually reply within 24 hours, but it might take longer during busy times. You can also connect with me on Instagram or LinkedIn for regular updates. I look forward to hearing from you!
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <Button leftIcon={<Icon as={FaTwitter} />}>Follow on Twitter</Button>
                        <Button leftIcon={<Icon as={FaGithub} />}>Follow on GitHub</Button>
                        <Button leftIcon={<Icon as={FaLinkedin} />}>Follow on LinkedIn</Button>
                        <Button leftIcon={<Icon as={FaInstagram} />}>Follow on Instagram</Button>
                    </Stack>
                    <Text>mail@thomgard.dev</Text>
                </Box>
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
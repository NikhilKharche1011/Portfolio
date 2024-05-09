import React, { useState, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';
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
import emailjs from '@emailjs/browser';
import { ImCheckmark, ImCross } from 'react-icons/im';

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
            transition: { duration: 0.8  },

        },
        exit: {
            // x: -300,
            transform: 'scale(2)',
            opacity: 0,
            background: '#ff454596',
            transition: { duration: 0.2  }, // Adjust duration as needed
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)',
            background: '#1a1a1a',
            transition: { duration: 0.8   }, // Adjust duration as needed
        },
    };
    // const [loading, setloading] = useState(false)
    const contactref = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setloading(true)
        const formData = {
            from_name: contactref.current.name.value,
            from_email: contactref.current.email.value,
            message: contactref.current.message.value
        };
        // console.log(formData);
        if (contactref.current.email) {

            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_OWN, formData, process.env.REACT_APP_PUBLIC_ID)
                .then(
                    (response) => {
                        // if (response.text === 'ok') {
                        console.log('Email sent successfully!', response.status, response.text);
                        contactref.current['name'].value = "";
                        contactref.current['email'].value = "";
                        contactref.current['message'].value = "";
                        // setloading(false)
                        // }

                    },
                    (error) => {
                        console.error('Email sending failed:', error);
                    }
                );

            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_OTHER, {
                from_name: 'Nikhil Kharche',
                to_name: formData.from_name,
                reply_to: formData.from_email
            }, process.env.REACT_APP_PUBLIC_ID)
                .then((response) => {
                    console.log('Thank you message sent', response.text);
                    toast.custom(
                        <Flex bgColor='#008631' alignItems='center' gap={2} color='#fff' p='10px'>
                            <ImCheckmark color='#08ff09' fontSize='20px' />
                            <Text>{formData.from_name}, Thank You for Contacting </Text>
                        </Flex>
                    )
                }, (error) => {
                    console.log('Failed to send thank you email', error.text);
                    toast.custom(
                        <Flex bgColor='#c30010' alignItems='center' gap={2} color='#fff' p='10px'>
                            <ImCross color='#fe0808' />

                            <Text> Error in contacting</Text>
                        </Flex>
                    )
                });
        }
        else if (!contactref.current.email) {
            toast.custom(
                <Flex bgColor='#c30010' alignItems='center' gap={2} color='#fff' p='10px'>
                    <ImCross color='#fe0808' fontSize='20px' />

                    <Text> Error in contacting</Text>
                </Flex>
            )
        }
    };

    return (
        <MotionFlex
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            // once={true}
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
                px={{ xl: '5%', lg: '4%', md: '3%', sm: '3%', base: '0%' }}
                // justifyContent='center'
                // bgImage={bg_image}
                bgPosition='center'
                bgSize='cover'
                justifyContent={{ base: 'flex-start', sm: 'flex-start' , md:'center' }}
                flexDirection='column'
                overflowY='scroll'
                className='scrollcss'
            // position='relative'
            >
                <Flex
                    w='100%'
                    h={{ base: '75lvh', sm: '80lvh', md:'60lvh' }}
                    bgImage={map}
                    bgPosition='center'
                    bgSize='cover'
                    borderRadius='15px'

                    flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                    justifyContent='space-around'
                    px={{ base: '10px', sm: '10px', md:'0px' }}
                >
                    <Flex
                        width={{ base: '100%', sm: '100%', md: '30%', lg: '35%', xl: '35%' }}
                        fontSize={{ base: '6vw', sm: '3.5vw' }}
                        alignItems={{ base: 'flex-start', sm: 'flex-end' }}
                        justifyContent='center'
                        h={{ base: '25%', sm: '20%', md:'100%' }}
                        color='#ff4545'
                    >

                    </Flex>
                    <Flex
                        w={{ base: '100%', sm: '100%', md: '35%', lg: '30%', xl: '25%' }}
                        h={{base:'60lvh', md:'60lvh', md:'100%'}}
                        transform={{ base: 'scale(1)', sm: 'scale(1)', md: 'scale(1.1)' }}
                        borderRadius='5px'
                        bgColor='#ebebeb'
                        overflowY='scroll'
                        className='scroll'
                    >
                        <Flex
                            as='form'
                            width='100%'
                            flexDirection='column'
                            overflowY='scroll'
                            className='scroll'
                            justifyContent='center'
                            alignItems='flex-end'
                            onSubmit={handleSubmit}
                            ref={contactref}
                        >
                            <Flex w='100%' flexDirection='column' px='2%' overflowY='scroll' className='scroll'>
                                <FormControl my='6%' variant='flushed'>
                                    <Input
                                        name='name'
                                        placeholder='Name'
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
                                    <Input
                                        name='email'
                                        placeholder='Email'
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
                                    <Textarea
                                        name='message'
                                        placeholder='Message'
                                        color='#2a2a2a'
                                        border='none'
                                        borderBottom='1px solid #ccc'
                                        borderRadius='0xp'
                                        outline='none'
                                        _focus={{ boxShadow: 'none' }}
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
                                // isLoading={loading}
                                _hover={{ bgColor: '#ff4545' }}
                            >
                                Send Message
                            </Button>


                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    mt={{ base: '10%', sm: '10%', md: '3%' }}
                    alignItems='center'
                    w='100%'
                    flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                    px={{ base: '15px', sm: '0px' }}

                >
                    <Flex
                        h='100%'
                        width={{ base: '100%', sm: '100%', md: '34%' }}
                        direction='column'
                        alignItems={{ base: 'center', sm: 'center', md: 'normal' }}
                    >
                        <Flex

                            fontSize={{ base: '8vw', sm: '8vw', md: '3.8vw' }}
                            // h='100%'
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
                                fontSize={{ base: '2.3vw', sm: '2.3vw', md: '1vw' }}
                                textAlign={{ base: 'center', sm: 'center', md: 'justify' }}
                            >
                                You may reach out to me via the provided contact form or through the social media links.
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex mt={{ base: '5%', sm: '5%', md: '0%' }} flexDirection='column' alignItems='center' justifyContent='center' width={{ base: '100%', sm: '100%', md: '40%' }}>
                        <Text
                            color='#ebebeb'
                            fontSize={{ base: '4vw', sm: '3.3vw', md: '1vw' }}

                        >
                            Email
                        </Text>
                        <Text
                            color='#a6a6a6'
                            as='a'
                            fontSize={{ base: '4vw', sm: '3.3vw', md: '1vw' }}
                            href='mailto:nkharche99@gmail.com'
                            _hover={{ color: '#ff4545' }}
                        >
                            nkharche99@gmail.com
                        </Text>

                    </Flex>

                    <Flex
                        mt={{ base: '5%', sm: '5%', md: '0%' }}
                        flexDirection='row'
                        alignItems='center'
                        justifyContent={{ base: 'space-evenly', sm: 'space-evenly', md: 'flex-start' }}
                        width={{ base: '100%', sm: '100%', md: '30%' }}
                        py={{base:'20px', sm:'20px', md:'0px'}}
                    >
                        <Flex
                            mx='10px'
                            _hover={{ color: '#ff4545' }}
                            color='#a6a6a6'
                            fontSize={{base:'7vw', sm:'7vw', md:'2vw'}}

                        >
                            <Flex as='a' href='https://www.linkedin.com/in/nikhilkharche99/'>
                                <FaLinkedin />
                            </Flex>
                        </Flex>

                        <Flex
                            mx='10px'
                            _hover={{ color: '#ff4545' }}
                            color='#a6a6a6'
                             fontSize={{base:'7vw', sm:'7vw', md:'2vw'}}>
                            <Flex
                                as='a'
                                href='https://github.com/NikhilKharche1011'
                            >
                                <FaGithub />
                            </Flex>
                        </Flex>
                        <Flex
                            mx='10px'
                            _hover={{ color: '#ff4545' }}
                            color='#a6a6a6'
                             fontSize={{base:'7vw', sm:'7vw', md:'2vw'}}
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
                            _hover={{ color: '#ff4545' }}
                            color='#a6a6a6'
                             fontSize={{base:'7vw', sm:'7vw', md:'2vw'}}
                        >
                            <Flex
                                as='a'
                                href='https://twitter.com/NikhilKharche2'
                            >
                                <FaXTwitter />
                            </Flex>
                        </Flex>

                    </Flex>
                    <Flex h={{ base: '7vh', sm: '7vh', md:'0vh' }} bgColor='#1a1a1a00' w='0%'>

                    </Flex>
                </Flex>
            </Flex>
            <Toaster />
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
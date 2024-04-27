import React from 'react'
import Navbar from './Navbar'
import {
    ChakraProvider,
    ColorModeScript,
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Code,
    Text
} from '@chakra-ui/react';
const Home = () => {
    return (
        <Flex
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
                height={{ '2xl': '100%', xl: '100%', lg: '100%', md: '100%', sm: '100%', base: 'auto' }}
            // backgroundColor="green.800"
            >
                <Flex flexDirection='column' justifyContent='center' alignItems='center' p={5} maxW={{ '2xl': '1100px', xl: '850px', lg: "850px", md: "850px", sm: "850px", base: "850px" }} >
                    <Heading fontFamily='monospace' className='animation aniblock1' as="h1" fontSize={{ '2xl': '20px', xl: '15px' }} color="white">
                        I'm
                    </Heading>
                    <Text className='animation aniblock2' as="h2" textAlign='center' fontSize={{ '2xl': '130px', xl: '100px', lg: '100px', md: '80px', sm: '80px', base: '35px' }} lineHeight='0.9' color="#ff4545BD" mt={2}>
                        &lt; Nikhil Kharche /&gt;
                    </Text>
                    <Text className='animation aniblock2' as="h2" textAlign='left' fontSize={{ '2xl': '35px', xl: '30px', lg: '30px', md: '30px', sm: '30px', base: '25px' }} lineHeight='0.9' color="#ebebeb" mb='20px'>
                        React Js Developer
                    </Text>
                    <Text className='animation aniblock3' fontSize='13px' color="#ebebeb" letterSpacing='1px' fontFamily='monospace' textAlign='center' >
                        Passionate frontend developer at Knight Motion Media, Pune, with 6 months of experience in <span style={{ color: '#ff4545', m: '0px', fontFamily: 'monospace', fontSize: '14px' }}>React js, Bootstrap, Chakra Ui</span>. Committed to crafting engaging user experiences.
                    </Text>
                    <Button
                        className='animation aniblock4'
                        bgColor='transparent'
                        border='2px solid #ff4545'
                        color='#ebebeb'
                        letterSpacing='1px'
                        _hover={{color:'#ebebeb'}}
                        zIndex='11'
                        borderRadius='0px'
                        // _hover={{ bgColor: '#ff4545', transform: 'scale(1.1)', color: '#ebebebf' }}
                        // transition='0.5s ease-in-out'
                        mt={4}
                    >
                        Resume
                    </Button>
                </Flex>
            </Flex>


            {/* </Flex> */}
        </Flex>


    )
}

export default Home
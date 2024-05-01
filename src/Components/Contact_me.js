import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Contact_me = () => {
    const Mapflex = motion(Flex)
   
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
            alignItems='center'
        >
            <Navbar />
            <Flex

                w='100%'
                h='100%'
                px={{ xl: '7%', lg: '4%', md: '3%', sm: '3%', base: '2%' }}
                // justifyContent='center'
                alignItems='center'
                flexDirection='column'
            >
                <Suspense fallback={
                    <>
                        <Flex h='100lvh' width='100%' bgColor='#ff4545' justifyContent='center' alignItems='center'>
                            <Text color='#ff4545' fontSize='50px'>
                                LOADING...
                            </Text>
                        </Flex>
                    </>
                }
                >
                    <Mapflex
                        h='100%'
                        w='100%'
                        justifyContent='center'
                        initial={{ x: -300, opacity: 0, backgroundColor: '#ff454500' }}
                        exit={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, backgroundColor: '#ff454500' }}
                        transition={{ duration: 1 }}
                        my='30px'
                        bgColor='#ff454'
                    >

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711140519!2d73.78056593920137!3d18.524598599722342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714503919281!5m2!1sen!2sin" width="70%" style={{ height: "40vh", borderRadius: '20px' }} ></iframe>
                    </Mapflex>
                </Suspense>
            </Flex>
        </Flex>
    )
}

export default Contact_me
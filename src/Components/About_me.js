import React from 'react'
import Navbar from './Navbar'
import pic from '../assets/image.webp'
import { Flex, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react'
import { color } from 'framer-motion';
const About_me = () => {
  return (
    <Flex
      w='100%'
      h='100lvh'
      flexDirection='column'
      // bgColor='#8f9494'
      bgColor='#1a1a1a'
      bgPosition='center'
      bgSize='cover'
      overflowY='scroll'
      className='scroll'
      alignItems='center'
    >
      <Navbar />
      <Flex
        align="center"
        // justify="center"
        // height="100%"
        flexDirection='column'
        w='100%'
        overflowY='scroll'
        className='scroll'
        h='90vh'
        px={{ xl: '7%', lg: '4%', md: '5%', sm: '3%', base: '2%' }}
      >
        <Flex alignItems='center' justifyContent='center' flexDirection={{ base: 'column', sm: 'column', md:'row' }}>
          <Flex mb={{base:'20px', sm:'0px'}} w={{base:'100%', sm:'49%', }} h={{base:'100%', sm:'100%', md:'90lvh'}}  justifyContent='center' >
            <Image h='100%'  src={pic} />
          </Flex>
          <Flex  pr='10px' className='scrollcss' w={{ base: '95%', sm: '95%', md:'49%' }} h='100%' flexDirection='column' alignItems='flex-start' color='#ebebeb'>
            <Text fontSize={{'2xl':'60px', xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }} color='#ff4545' lineHeight='1' mb='1'>
              About me:
            </Text>
            <Flex flexDirection='column' mb='8'>

              <Text >
                Hey there! 👋 I'm Nikhil Kharche, a passionate frontend developer based in Pune. With a love for building user-centric web applications, I thrive on turning ideas into beautifully crafted digital experiences.
              </Text>


            </Flex>
            <Flex color="#fff" flexDirection="column">
              <Text color="#ff4545" fontSize={{'2xl':'35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }} >
                Current Work:
              </Text>
              <Text mb="2">
                Knight Motion Media, Pune
              </Text>
              <Text mb="2">
                Position: React Js Developer
              </Text>
              <Text mb="2">
                Duration: Oct 2023 - Present
              </Text>
              <Text>
                Responsibilities:
              </Text>
              <UnorderedList mb="8" pl="1">
                <ListItem>
                  Collaborating with the design and development teams to conceptualize, develop, and maintain innovative web applications.
                </ListItem>

                <ListItem>
                  Working closely with designers to ensure pixel-perfect implementation of UI designs.
                </ListItem>

                <ListItem>
                  Enhancing user experience by optimizing performance, accessibility, and responsiveness of web applications.
                </ListItem>
              </UnorderedList>
            </Flex>

            <Flex flexDirection='column'>

              <Text color="#ff4545" fontSize={{'2xl':'35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }}>
                Education:
              </Text>

              <Text mb="2">
                Bachelor's Degree in Electronics and Communication
              </Text>
              <Text mb="2">
                University: Nagpur University
              </Text>
              <Text mb="2">
                Duration: 2017 - 2021
              </Text>
            </Flex>



          </Flex>
        </Flex>
        <Flex w='100%' flexDirection='column' my={{base:'0px', sm:'10px', md:'20px'}}>
          <Flex justifyContent='center'>
            <Text color='#ff4545' fontSize={{ xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }}>
              Skills
            </Text>
            <Flex>
              
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  )
}

export default About_me
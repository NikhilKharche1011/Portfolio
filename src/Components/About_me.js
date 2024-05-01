import React from 'react'
import Navbar from './Navbar'
import pic from '../assets/image.webp'
import { Flex, Text, Image, UnorderedList, ListItem, Grid, GridItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { motion, } from 'framer-motion';
import Reacticon from '../assets/react-js-icon (2).png'
import Chakraui from '../assets/icons8-chakra-ui-480.png'
import Bootstrap from '../assets/bootstrap-5-logo-icon (1).png'
import Html from '../assets/icons8-html-480.png'
import css from '../assets/icons8-css-480.png'
import js from '../assets/icons8-javascript-480.png'
const About_me = () => {
  // const MotionText = motion(Text);
  const MotionFlex = motion(Flex);
  // const MotionButton = motion(Button);

  const pageVariants = {
    exit: {
      // x: -300,
      transform:'scale(0)',
      opacity: 0, 
      background: '#ff454596',
      transition: { duration: 0.1 }, // Adjust duration as needed
    },
    enter: {
      opacity: 1,
      transform:'scale(1)',
      // x: 0,
      background: '#1a1a1a',
      transition: { duration: 1 }, // Adjust duration as needed
    },
  };
  return (
    <MotionFlex
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      w='100%'
      h='100lvh'
      flexDirection='column'
      // bgColor='#8f9494'
      bgColor='#1a1a1a'
      bgPosition='center'
      bgSize='cover'
      overflowY={{ base: 'scroll', sm: 'scroll', md: 'hidden' }}
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
        overflowY={{ base: 'scroll', sm: 'scroll', md: 'hidden' }}
        h='90vh'
        className='scroll'
        px={{ xl: '2%', lg: '4%', md: '3%', sm: '3%', base: '2%' }}

      >
        <Flex
          overflowY={{ base: 'scroll', sm: 'scroll', md: 'hidden' }}
          className='scroll'
          h='90vh' alignItems={{ base: 'center', sm: 'center', md: 'flex-start' }} flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
          <Flex mb={{ base: '20px', sm: '0px' }} w={{ base: '100%', sm: '100%', md: '55%', lg: '49%' }} h={{ base: '100%', sm: '100%', md: '90lvh' }} justifyContent='center' >
            <Image h='100%' src={pic} />
          </Flex>
          <Flex  overflowY={{base:'visible', sm:'visible', md:'scroll'}}  className='scrollcss' w={{ base: '95%', sm: '95%', md: '75%', lg: '49%' }} h='100%' flexDirection='column' alignItems='flex-start' color='#ebebeb'>
            <Text pl='10px' fontSize={{ '2xl': '60px', xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }} color='#ff4545' lineHeight='1' mb='1'>
              About me:
            </Text>
            <Flex pl='10px' flexDirection='column' mb='8'>

              <Text >
                Hey there! 👋 I'm Nikhil Kharche, a passionate frontend developer based in Pune. With a love for building user-centric web applications, I thrive on turning ideas into beautifully crafted digital experiences.
              </Text>


            </Flex>
            <Flex pl='10px' color="#fff" flexDirection="column">
              <Text color="#ff4545" fontSize={{ '2xl': '35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }} >
                Current Work:
              </Text>
              <Text mb="2">
                Knight Motion Media, Pune
              </Text>
              <Text mb="2">
                Position: <Text as='code' color='#ff4545'> React Js Developer</Text>
              </Text>
              <Text mb="2">
                Duration: Oct 2023 - Present
              </Text>
              <Text>
                Responsibilities:
              </Text>
              <UnorderedList pl="1">
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
              <NavLink to='/Projects'>
                <Text my="8" display='flex' color="#ff4545" fontSize={{ '2xl': '35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }}>
                  My Work <Text mx='5px'><ExternalLinkIcon color='#ff4545' fontSize={{ base: '15px', sm: '18px' }} /></Text>
                </Text>
              </NavLink>
            </Flex>

            <Flex pl='10px' flexDirection='column'>

              <Text color="#ff4545" fontSize={{ '2xl': '35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }}>
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


            <Flex  w={{ base: '100%', sm: '100%',  md: '100%', lg: '100%' }} alignItems='center' flexDirection='column' my={{ base: '20px', sm: '20px', md: '40px' }}>
              <Flex justifyContent='center' alignItems='center' flexDirection='column'>
                <Text color='#ff4545' fontSize={{ xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }}>
                  Skills
                </Text>
                <Grid my='15px' placeContent='center' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(2, 1fr)', xl:'repeat(3, 1fr)' }} width='60%' h={{'2xl':'100%', xl:'100%', lg:'100%', md:'100%', sm:'100%', base:'100%'}} gap={4}>
                  <GridItem  display='flex'  flexDirection='column' placeItems='center' maxW='100%'  >
                    <Flex h='100%'  color='#fff' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #fff, 3px 3px 10px #000 ', bgColor: 'rgba(255, 255, 255, 0.2276)' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                       h={{base:'45px', sm:'90px', md:'110px'}}
                        w={{base:'50px', sm:'100px', md:'120px'}}
                         src={Reacticon}
                          />
                      <Flex>
                        <Text my='10px' fontWeight='600'>
                          React js
                        </Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem  display='flex' justifyContent='center' flexDirection='column' placeItems='center' maxW='100%'  >
                    <Flex h='100%' color='#fff' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #fff, 3px 3px 10px #000 ', bgColor: 'rgba(255, 255, 255, 0.2276)' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                       h={{base:'50px', sm:'100px', md:'120px'}}
                        w={{base:'50px', sm:'100px', md:'120px'}}
                         src={Chakraui}
                          />
                      <Flex>
                        <Text my='10px'>
                          Chakra UI
                        </Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem  display='flex' justifyContent='center' flexDirection='column' placeItems='center' maxW='100%'  >
                    <Flex h='100%' color='#fff' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #fff, 3px 3px 10px #000 ', bgColor: 'rgba(255, 255, 255, 0.2276)' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                       h={{base:'45px', sm:'90px', md:'110px'}}
                        w={{base:'50px', sm:'100px', md:'120px'}}
                         src={Bootstrap}
                          />
                      <Flex>
                        <Text my='10px'>
                          Bootstrap
                        </Text>
                      </Flex>
                    </Flex>

                  </GridItem>


                  <GridItem  display='flex' justifyContent='center' flexDirection='column' placeItems='center' maxW='100%' >
                    <Flex h='100%' color='#fff' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #fff, 3px 3px 10px #000 ', bgColor: 'rgba(255, 255, 255, 0.2276)' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                       h={{base:'50px', sm:'100px', md:'120px'}}
                        w={{base:'50px', sm:'100px', md:'120px'}}
                         src={Html} 
                         />
                      <Flex>
                        <Text my='10px' >
                          HTML
                        </Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem  display='flex' justifyContent='center' flexDirection='column' placeItems='center' maxW='100%'  >
                    <Flex h='100%' color='#fff' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #fff, 3px 3px 10px #000 ', bgColor: 'rgba(255, 255, 255, 0.2276)' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                       h={{base:'50px', sm:'100px', md:'120px'}}
                        w={{base:'50px', sm:'100px', md:'120px'}}
                         src={css} 
                         />
                      <Flex>
                        <Text my='10px'>
                          CSS
                        </Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem  display='flex' justifyContent='center' flexDirection='column' placeItems='center' maxW='100%'  >
                    <Flex h='100%' color='#fff' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #fff, 3px 3px 10px #000 ', bgColor: 'rgba(255, 255, 255, 0.2276)' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                       h={{base:'50px', sm:'100px', md:'120px'}}
                        w={{base:'50px', sm:'100px', md:'120px'}}
                         src={js}
                          />
                      <Flex>
                        <Text my='10px'>
                          JavaScript
                        </Text>
                      </Flex>
                    </Flex>

                  </GridItem>


                </Grid>
                <Flex>

                </Flex>
              </Flex>

            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </MotionFlex>
  )
}

export default About_me
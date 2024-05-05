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

  const MotionFlex = motion(Flex);
  const MotionGriditem = motion(GridItem)
  const MotionText = motion(Text)
  const MotionListItem = motion(ListItem)
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
      // bgColor='#8f9494'
      bgColor='#1a1a1a'
      bgPosition='center'
      bgSize='cover'
      overflowY={{ base: 'hidden', sm: 'hidden', md: 'hidden' }}
      className='scroll'
      alignItems='center'
      position='relative'
    >
      <Navbar />
      <Flex
        align="center"
        // justify="center"
        // height="100%"
        flexDirection='column'
        w='100%'
        overflowY={{ base: 'scroll', sm: 'scroll', md: 'hidden' }}
        h='100%'
        className='scroll'
        px={{ xl: '2%', lg: '4%', md: '3%', sm: '3%', base: '2%' }}

      >
        <Flex
          overflowY={{ base: 'scroll', sm: 'scroll', md: 'hidden' }}
          className='scroll'
          h='100%' alignItems={{ base: 'center', sm: 'center', md: 'flex-start' }} flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
          <MotionFlex
            initial={{ y: 100, opacity: 0, transition: { duration: 1, delay:1  } }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay:1 } }}
            exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
            mb={{ base: '20px', sm: '0px' }} w={{ base: '100%', sm: '100%', md: '55%', lg: '49%' }} h={{ base: '100%', sm: '100%', md: '90lvh' }} justifyContent='center' >
            <Image h='100%' src={pic} />
          </MotionFlex>
          <Flex overflowY={{ base: 'visible', sm: 'visible', md: 'scroll' }} className='scrollcss' w={{ base: '95%', sm: '95%', md: '75%', lg: '49%' }} h='100%' flexDirection='column' alignItems='flex-start' color='#ebebeb'>
            <MotionText
              initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
              pl='10px'
              fontSize={{ '2xl': '60px', xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }}
              color='#ff4545'
              lineHeight='1'
              mb='1'
            >
              About me:
            </MotionText>
            <Flex pl='10px' flexDirection='column' mb='8'>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
              >
                Hey there! 👋 I'm Nikhil Kharche, a passionate frontend developer based in Pune. With a love for building user-centric web applications, I thrive on turning ideas into beautifully crafted digital experiences.
              </MotionText>


            </Flex>
            <Flex pl='10px' color="#fff" flexDirection="column">
              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color="#ff4545"
                fontSize={{ '2xl': '35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }}
              >
                Current Work:
              </MotionText>
              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                mb="2"
              >
                Knight Motion Media, Pune
              </MotionText>
              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                mb="2"
              >
                Position: <MotionText as='code' color='#ff4545'> React Js Developer</MotionText>
              </MotionText>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                mb="2"
              >
                Duration: Oct 2023 - Present
              </MotionText>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                color='#a6a6a6'
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
              >
                Responsibilities:
              </MotionText>

              <UnorderedList
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                pl="1"
              >
                <MotionListItem
                  initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                color='#a6a6a6'
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                >
                  Collaborating with the design and development teams to conceptualize, develop, and maintain innovative web applications.
                </MotionListItem>

                <MotionListItem
                  initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                >
                  Working closely with designers to ensure pixel-perfect implementation of UI designs.
                </MotionListItem>

                <MotionListItem
                  initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                >
                  Enhancing user experience by optimizing performance, accessibility, and responsiveness of web applications.
                </MotionListItem>
              </UnorderedList>
              <NavLink to='/Projects' >
                <MotionText
                  initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                  my="8" display='flex' className='navbarfont' position='relative' color="#ff4545" fontSize={{ '2xl': '35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }}>
                  My Work <MotionText mx='5px'><ExternalLinkIcon color='#ff4545' fontSize={{ base: '15px', sm: '18px' }} /></MotionText>
                </MotionText>
              </NavLink>
            </Flex>

            <Flex pl='10px' flexDirection='column'>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color="#ff4545" fontSize={{ '2xl': '35px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '25px' }}>
                Education:
              </MotionText>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                mb="2"
              >
                Bachelor's Degree in Electronics and Communication
              </MotionText>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                mb="2"
              >
                University: Nagpur University
              </MotionText>

              <MotionText
                initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                color='#a6a6a6'
                mb="2"
              >
                Duration: 2017 - 2021
              </MotionText>
            </Flex>


            <Flex h='100%' w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }} alignItems='center' flexDirection='column' my={{ base: '20px', sm: '20px', md: '40px' }}>
              <Flex w='100%' justifyContent='center' alignItems='center' flexDirection='column'>
                <MotionText
                  initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                  whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                  color='#ff4545'
                  fontSize={{ xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }}
                >
                  Skills
                </MotionText>
                <Grid
                  overflow='hidden'
                  py='20px'
                  // className='scrollcss2'
                  // my='15px'
                  placeContent='center'
                  templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
                  width='100%'
                  h='100%'
                  // columnGap={4}
                  gap={6}
                >
                  <MotionGriditem
                    initial={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
                    display='flex'
                    flexDirection='column'
                    placeItems='center'
                    maxW='100%'
                    h='100%'
                  >
                    <Flex h='100%' color='#fff' borderRadius='15px' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #0c0c0c, 3px 3px 10px #0c0c0c ', bgColor: '#313638', color: '#ff4545' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                        h={{ base: '45px', sm: '90px', md: '110px' }}
                        w={{ base: '50px', sm: '100px', md: '120px' }}
                        src={Reacticon}
                      />
                      <Flex>
                
                        <Text color='#a6a6a6' my='10px' fontWeight='600'>
                          React js
                        </Text>
                      </Flex>
                    </Flex>
                  </MotionGriditem>

                  <MotionGriditem
                    initial={{ y: 100, opacity: 1, transition: { duration: 1 } }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: -100, opacity: 1, transition: { duration: 1 } }}
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    placeItems='center'
                    maxW='100%'
                    h='100%'
                  >
                    <Flex h='100%' color='#fff' borderRadius='15px' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #0c0c0c, 3px 3px 10px #0c0c0c ', bgColor: '#313638', color: '#ff4545' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                        h={{ base: '50px', sm: '100px', md: '120px' }}
                        w={{ base: '50px', sm: '100px', md: '120px' }}
                        src={Chakraui}
                      />
                      <Flex>
                        <Text color='#a6a6a6' my='10px'>
                          Chakra UI
                        </Text>
                      </Flex>
                    </Flex>
                  </MotionGriditem>

                  <MotionGriditem
                    initial={{ y: 100, opacity: 1, transition: { duration: 1 } }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: -100, opacity: 1, transition: { duration: 1 } }}
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    placeItems='center'
                    maxW='100%'
                    h='100%'
                  >
                    <Flex h='100%' color='#fff' borderRadius='15px' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #0c0c0c, 3px 3px 10px #0c0c0c ', bgColor: '#313638', color: '#ff4545' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                        h={{ base: '45px', sm: '90px', md: '110px' }}
                        w={{ base: '50px', sm: '100px', md: '120px' }}
                        src={Bootstrap}
                      />
                      <Flex>
                        <Text color='#a6a6a6' my='10px'>
                          Bootstrap
                        </Text>
                      </Flex>
                    </Flex>

                  </MotionGriditem>


                  <MotionGriditem
                    initial={{ y: 100, opacity: 1, transition: { duration: 1 } }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: -100, opacity: 1, transition: { duration: 1 } }}
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    placeItems='center'
                    maxW='100%'
                    h='100%'
                  >
                    <Flex h='100%' color='#fff' borderRadius='15px' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #0c0c0c, 3px 3px 10px #0c0c0c ', bgColor: '#313638', color: '#ff4545' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                        h={{ base: '50px', sm: '100px', md: '120px' }}
                        w={{ base: '50px', sm: '100px', md: '120px' }}
                        src={Html}
                      />
                      <Flex>
                        <Text color='#a6a6a6' my='10px' >
                          HTML
                        </Text>
                      </Flex>
                    </Flex>
                  </MotionGriditem>

                  <MotionGriditem
                    initial={{ y: 100, opacity: 1, transition: { duration: 1 } }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: -100, opacity: 1, transition: { duration: 1 } }}
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    placeItems='center'
                    maxW='100%'
                    h='100%'
                  >
                    <Flex h='100%' color='#fff' borderRadius='15px' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #0c0c0c, 3px 3px 10px #0c0c0c ', bgColor: '#313638', color: '#ff4545' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                        h={{ base: '50px', sm: '100px', md: '120px' }}
                        w={{ base: '50px', sm: '100px', md: '120px' }}
                        src={css}
                      />
                      <Flex>
                        <Text color='#a6a6a6' my='10px'>
                          CSS
                        </Text>
                      </Flex>
                    </Flex>
                  </MotionGriditem>

                  <MotionGriditem
                    initial={{ y: 100, opacity: 1, transition: { duration: 1 } }}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: -100, opacity: 1, transition: { duration: 1 } }}
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    placeItems='center'
                    maxW='100%'
                    h='100%'
                  >
                    <Flex h='100%' color='#fff' borderRadius='15px' boxShadow='0px 0px 1px #000, 3px 3px 4px #000 ' transition='0.5s ease' _hover={{ transform: 'scale(1.05)', boxShadow: '0px 0px 1px #0c0c0c, 3px 3px 10px #0c0c0c ', bgColor: '#313638', color: '#ff4545' }} flexDirection='column' alignItems='center' justifyContent='space-between' py='3%' w='200px' bgColor='rgba(0, 0, 0, 0.1276)'>
                      <Image
                        h={{ base: '50px', sm: '100px', md: '120px' }}
                        w={{ base: '50px', sm: '100px', md: '120px' }}
                        src={js}
                      />
                      <Flex>
                        <Text color='#a6a6a6' my='10px'>
                          JavaScript
                        </Text>
                      </Flex>
                    </Flex>

                  </MotionGriditem>


                </Grid>
                <Flex h={{ base: '5vh', sm: '0vh' }} bgColor='#1a1a1a00' w='100%'>

                </Flex>
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

export default About_me
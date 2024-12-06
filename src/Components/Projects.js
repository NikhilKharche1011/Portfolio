import React from 'react'
import Navbar from './Navbar'
import { Flex, Text, Grid, GridItem, Box, UnorderedList, ListItem, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import foxymatic_4 from '../assets/foxymatic.svg'
import video_4 from '../assets/videofide.svg'
import uttara from '../assets/uttaraimpex.svg'


const Projects = () => {
  // const MotionText = motion(Text);
  const MotionFlex = motion(Flex);
  const MotionListItem = motion(ListItem)
  const MotionGrid = motion(Grid);
  const MotionGridItem = motion(GridItem);

  const pageVariants = {
    initial: {
      transform: 'scale(0)',
      opacity: 0,
      background: '#ff454596',
      transition: { duration: 0.8 }, // Adjust duration as needed
    },
    exit: {
      transform: 'scale(2)',
      opacity: 0,
      background: '#ff454596',
      transition: { duration: 0.2 }, // Adjust duration as needed
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
      <LazyMotion features={domAnimation}>
        <Flex
          align="center"
          // justify="center"
          // height="100%"
          flexDirection='column'
          w='100%'
          overflowY='scroll'
          overflowX='hidden'
          className='scrollcss'
          // my='30px'
          h='100%'
          px={{ xl: '7%', lg: '4%', md: '5%', sm: '3%', base: '0%' }}
        // w='100%'
        >

          <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} my='3%' mt={{ xl: '40px', lg: '40px', md: '36px', sm: '0%', base: '0%' }} alignItems='center' >
            <Grid h='100%' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
              <GridItem h='100%' order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '5%' }} w='100%' color='#a6a6a6'    >

                <MotionFlex
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.5, }}
                  fontSize={{ xl: '40px', lg: '40px', md: '36px', sm: '35px', base: '28px' }}
                  alignItems='center'
                  color='#ff4545'
                >
                  Thermax Steam LMS <Text mx='5px' mt='5px'></Text>
                </MotionFlex>

                <Flex>
                  <Box >
                    <MotionFlex
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, }}
                      as="p"
                      textAlign='justify'
                      fontSize={{ xl: '17px', lg: '17px', md: '15px', sm: '17px', base: '15px' }}
                    >
                      Thermax Steam is a streamlined LMS web app featuring dedicated user and admin interfaces, designed for efficient learning management and administration.
                    </MotionFlex>

                    <MotionFlex
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, }}
                      as="h2"
                      mt='20px'
                      color='#ebebeb'
                      fontSize={{ xl: '20px', lg: '20px', md: '18px', sm: '23px', base: '15px' }}
                    >
                      Work Highlights of this project:
                    </MotionFlex>

                    <UnorderedList>
                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Developer responsive Admin and User Dashboard using React JS.
                      </MotionListItem>

                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Integrated Restful API for real time data management.
                      </MotionListItem>

                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Utilized CSS and Chakra UI for mobile Friendly, adaptable layouts
                      </MotionListItem>

                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Delivered a scalable solution with proper optimized performance and enhanced user engagement.
                      </MotionListItem>

                    </UnorderedList>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem h='100%' order={{ base: 1, sm: 1, md: 2 }} w='100%' color='#ebebeb' display='flex' justifyContent='center' alignItems='center'    >
                <Flex
                  maxH={{ xl: '100%', lg: '250px', md: '250px', sm: '100%', base: '100%' }}
                  maxW={{ xl: '100%', lg: '400px', md: '400px', sm: '100%', base: '100%' }}
                  justifyContent='center'
                  alignItems='center'
                  objectFit='contain'
                >

                  <MotionFlex
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1, }}
                    justifyContent='center'
                    alignItems='center'
                    w='100%'
                    h='100%'
                  >
                    <Image w='100%' h='100%' src={foxymatic_4} />
                  </MotionFlex>

                </Flex>
              </GridItem>

            </Grid>
          </Flex>


          <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} my='3%' mt='40px' alignItems='center'>
            <Grid h='100%' placeContent='center' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
              <GridItem h='100%' order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '5%' }} w='100%' color='#a6a6a6'   >
                <MotionFlex
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 1, }}
                  fontSize={{ xl: '40px', lg: '40px', md: '36px', sm: '35px', base: '28px' }}
                  color='#ff4545'
                >
                  Thermax 3D Verse
                </MotionFlex>
                <Flex>
                  <Box>
                    <MotionFlex
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 1, }}
                      as="p"
                      fontSize={{ xl: '17px', lg: '17px', md: '15px', sm: '17px', base: '15px' }}
                    >
                      Thermax 3D Verse is a project designed to visually showcase Thermax plants, providing an immersive representation of their structure and functionality.
                    </MotionFlex>

                    <MotionFlex
                      as="h2" initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 1, }}
                      mt='20px'
                      color='#ebebeb'
                      fontSize={{ xl: '20px', lg: '20px', md: '18px', sm: '23px', base: '15px' }}
                    >
                      Work Highlights of this project:
                    </MotionFlex>

                    <UnorderedList>
                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 1, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Developed a responsive admin dashboard to analyse .exe file usage, providing insights into the most visited plants and specific plant sections for better understanding and decision-making.
                      </MotionListItem>
                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 1, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Integrated Restful API for analytics visualization.
                      </MotionListItem>
                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 1, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Utilized CSS and Chakra UI for a mobile-friendly, adaptable layout, enhancing accessibility on various devices.
                      </MotionListItem>
                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 1, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Delivered a scalable and maintainable solution to support data-driven decision-making and improve user engagement.
                      </MotionListItem>
                    </UnorderedList>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem h='100%' order={{ base: 1, sm: 1, md: 2 }} w='100%' color='#ebebeb' display='flex' justifyContent='center' alignItems='center'    >
                <Flex
                  maxH={{ xl: '350px', lg: '250px', md: '250px', sm: '100%', base: '100%' }}
                  maxW={{ xl: '550px', lg: '400px', md: '400px', sm: '100%', base: '100%' }}
                  justifyContent='center'
                  alignItems='center'
                  objectFit='contain'
                // bgColor='#ff4545'
                >

                  <MotionFlex
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1, }}
                    justifyContent='center'
                    alignItems='center'
                    w='100%'
                    h='100%'
                  >
                    <Image w='100%' h='100%' src={video_4} />
                  </MotionFlex>

                </Flex>
              </GridItem>

            </Grid>
          </Flex>


          <Flex flexDirection='column' w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} my='3%' mt='40px' alignItems='center'>
            <Grid placeItems='center' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
              <GridItem h='100%' order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '5%' }} w='100%' color='#a6a6a6'    >
                <Link to="https://marworx.com" target='_blank' >
                  <MotionFlex
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    fontSize={{ xl: '40px', lg: '40px', md: '36px', sm: '35px', base: '28px' }}
                    color='#ff4545'
                  >
                    Marworx Official Website
                  </MotionFlex>
                </Link>
                <Flex>
                  <Box>
                    <MotionFlex
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      as="p"
                      fontSize={{ xl: '17px', lg: '17px', md: '15px', sm: '17px', base: '15px' }}
                    >
                      Developed the official website for Marworx, focusing on a modern, responsive design to ensure seamless accessibility and user engagement.
                    </MotionFlex>

                    <MotionFlex
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      as="h2"
                      color='#ebebeb'
                      mt='20px'
                      fontSize={{ xl: '20px', lg: '20px', md: '18px', sm: '23px', base: '15px' }}
                    >
                      Work Highlights of this project:
                    </MotionFlex>

                    <UnorderedList>
                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Developed the official Website of my Company with focus on modern and response design.
                      </MotionListItem>

                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >

                        Built using Chakra UI to create a clean consistent look with the whole page.
                      </MotionListItem>

                      <MotionListItem
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, }}
                        fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}
                      >
                        Entrusted mobile responsiveness for seamless accessibility on any device.
                      </MotionListItem>

                    </UnorderedList>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem h='100%' order={{ base: 1, sm: 1, md: 2 }} w='100%' color='#ebebeb' display='flex' justifyContent='center' alignItems='center'    >
                <Flex
                  maxH={{ xl: '350px', lg: '250px', md: '250px', sm: '100%', base: '100%' }}
                  wmaxW={{ xl: '550px', lg: '400px', md: '400px', sm: '100%', base: '100%' }}
                  justifyContent='center'
                  alignItems='center'
                  objectFit='contain'
                // bgColor='#ff4545'
                >

                  <MotionFlex
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.8, }}
                    justifyContent='center'
                    alignItems='center'
                    w='100%'
                    h='100%'
                  >
                    <Image w='100%' h='100%' src={uttara} />
                  </MotionFlex>



                </Flex>
              </GridItem>

            </Grid>
            <Flex h={{ base: '8vh', sm: '0vh' }} bgColor='#1a1a1a00' w='100%'>

            </Flex>
          </Flex>



        </Flex>
      </LazyMotion>
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

export default Projects
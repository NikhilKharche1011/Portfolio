import React from 'react'
import Navbar from './Navbar'
import { Flex, Text, Grid, GridItem, Box, UnorderedList, ListItem, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import foxymatic_4 from '../assets/foxymatic.svg'
import video_4 from '../assets/videofide.svg'
import uttara from '../assets/uttaraimpex.svg'


const Projects = () => {
  // const MotionText = motion(Text);
  const MotionFlex = motion(Flex);
  // const MotionButton = motion(Button);

  const pageVariants = {
    exit: {
      y: 300,
      opacity: 0,
      background: '#ff454596',
      transition: { duration: 0.1 }, // Adjust duration as needed
    },
    enter: {
      opacity: 1,
      y: 0,
      background: '#1a1a1a',
      transition: { duration: 1}, // Adjust duration as needed
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
      bgColor='#1a1a1a'
      bgPosition='center'
      bgSize='cover'
      overflowY='scroll'
      className='scroll'

    >
      <Navbar />

      <Flex
        align="center"
        // justify="center"
        // height="100%"
        flexDirection='column'
        w='100%'
        overflowY='scroll'
        className='scrollcss'
        // my='30px'
        h='100%'
        px={{ xl: '7%', lg: '4%', md: '5%', sm: '3%', base: '0%' }}
      // w='100%'
      >

        <Flex  w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} my='3%' mt={{ xl: '40px', lg: '40px', md: '36px', sm: '0%', base: '0%' }}  alignItems='center' >
          <Grid h='100%' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
            <GridItem h='100%' order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '5%' }} w='100%' color='#ebebeb'    >
              <Link to="https://foxymatic.com" target='_blank' >
                <Flex fontSize={{ xl: '40px', lg: '40px', md: '36px', sm: '35px', base: '28px' }} alignItems='center' color='#ff4545'>
                  Foxymatic.com <Text mx='5px' mt='5px'><ExternalLinkIcon color='#ff4545' fontSize='15px' /></Text>
                </Flex>
              </Link>
              <Flex>
                <Box >
                  <Flex as="p" textAlign='justify' fontSize={{ xl: '17px', lg: '17px', md: '15px', sm: '17px', base: '15px' }} >
                    Foxymatic.com is a Web service Provider website providing all kind of web solutions. In this project, I created a responsive website using React JS and Bootstrap.
                  </Flex>

                  <Flex as="h2" mt='20px' fontSize={{ xl: '20px', lg: '20px', md: '18px', sm: '23px', base: '15px' }} >Work Highlights of this project:</Flex>

                  <UnorderedList>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Created a responsive website using media queries and the column section system of Bootstrap.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Worked on optimizing website performance by using lazy loading for images and choosing efficient formats like WebP instead of JPG, PNG, and GIF.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Libraries Used: lazyloading</ListItem>
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
              >

                <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                  <Image w='100%' h='100%' src={foxymatic_4} />
                </Flex>

              </Flex>
            </GridItem>

          </Grid>
        </Flex>


        <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} my='3%' mt='40px'   alignItems='center'>
          <Grid h='100%' placeContent='center' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
            <GridItem h='100%' order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '5%' }} w='100%' color='#ebebeb'   >
              <Flex fontSize={{ xl: '40px', lg: '40px', md: '36px', sm: '35px', base: '28px' }} color='#ff4545'>
                VideoFide
              </Flex>
              <Flex>
                <Box>
                  <Box as="p" fontSize={{ xl: '17px', lg: '17px', md: '15px', sm: '17px', base: '15px' }}>
                    VideoFide is  a Product based WebApplication. Created userside and adminside including dashboaord on both sides.
                  </Box>

                  <Box as="h2" mt='20px' fontSize={{ xl: '20px', lg: '20px', md: '18px', sm: '23px', base: '15px' }} >Work Highlights of this project:</Box>

                  <UnorderedList>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }} >Create a Responsive Admin dashboard and userdashboard using React js and Chakra Ui.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }} >Integrated APIs into web applications to enable real-time data exchange and enhance functionality with data validation and error handling.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }} >Secured the api using OAuth authentication using JSON Web Tokens (JWT) provided during the login of the User or Admin. </ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }} >Libraries Used – React-hot-toast , React-icons ,  Suspense with lazy. </ListItem>
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

                <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                  <Image w='100%' h='100%' src={video_4} />
                </Flex>

              </Flex>
            </GridItem>

          </Grid>
        </Flex>


        <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} my='3%' mt='40px'   alignItems='center'>
          <Grid placeItems='center' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
            <GridItem h='100%' order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '5%' }} w='100%' color='#ebebeb'    >
              <Flex fontSize={{ xl: '40px', lg: '40px', md: '36px', sm: '35px', base: '28px' }} color='#ff4545'>
                Uttara Impex
              </Flex>
              <Flex>
                <Box>
                  <Box as="p" fontSize={{ xl: '17px', lg: '17px', md: '15px', sm: '17px', base: '15px' }}>
                    Uttara Impex is a Product showcase Website and WebApplication. Created userside and adminside including dashboaord on both sides.
                  </Box>

                  <Box as="h2" mt='20px' fontSize={{ xl: '20px', lg: '20px', md: '18px', sm: '23px', base: '15px' }}>Work Highlights of this project:</Box>

                  <UnorderedList>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Create a Responsive Admin dashboard and userdashboard using React js and Chakra Ui.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Integrated APIs into web applications to enable real-time data exchange and enhance functionality with data validation and error handling.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Secured the api using OAuth authentication using JSON Web Tokens (JWT) provided during the login of the User or Admin.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '13px', sm: '15px', base: '13px' }}>Libraries Used – React-hot-toast , React-icons , Suspense with lazy, React-pageflip.</ListItem>
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

                <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                  <Image w='100%' h='100%' src={uttara} />
                </Flex>



              </Flex>
            </GridItem>

          </Grid>
        </Flex>



        <Flex w='100%' h='100px' bgColor='#1a1a1a00'></Flex>
      </Flex>

    </MotionFlex>
  )
}

export default Projects
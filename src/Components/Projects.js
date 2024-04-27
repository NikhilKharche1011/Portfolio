import React from 'react'
import Navbar from './Navbar'
import { Flex, Text, Button, Heading, Grid, GridItem, Box, UnorderedList, ListItem, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaLink } from "react-icons/fa6";
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { VscLinkExternal } from "react-icons/vsc";
import foxymatic_1 from '../assets/foxymatic/foxymatic_1.webp'
import foxymatic_2 from '../assets/foxymatic/foxymatic_2.webp'
import foxymatic_3 from '../assets/foxymatic/foxymatic_3.webp'

import video_1 from '../assets/Videofide/video_1.webp'
import video_2 from '../assets/Videofide/video_2.webp'
import video_3 from '../assets/Videofide/video_3.webp'


const Projects = () => {
  return (
    <Flex
      w='100%'
      h='100lvh'
      flexDirection='column'
      bgColor='#1a1a1a'
      bgPosition='center'
      bgSize='cover'
     
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
        // my='30px'
        h='90vh'
        px={{ xl: '7%', lg: '4%', md: '5%', sm: '3%', base: '0%' }}
      // w='100%'
      >

        <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} mt={{ xl: '40px', lg: '40px', md: '40px', sm: '0%', base: '0%' }} justifyContent='center' alignItems='center' >
          <Grid w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
            <GridItem order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '2%' }} w='100%' color='#ebebeb'    >
              <Link to="https://foxymatic.com" target='_blank' >
                <Flex fontSize={{ xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }} alignItems='center' color='#ff4545'>
                  Foxymatic.com <Text mx='5px' mt='5px'><ExternalLinkIcon color='#ff4545' fontSize='15px' /></Text>
                </Flex>
              </Link>
              <Flex>
                <Box>
                  <Flex as="p" textAlign='justify' fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '17px', base: '17px' }} >
                    Foxymatic.com is a service-based website providing web solutions. In this project, I created a responsive website using React JS and Bootstrap.
                  </Flex>

                  <Flex as="h2" mt='20px' fontSize={{ xl: '20px', lg: '20px', md: '20px', sm: '23px', base: '23px' }} >Work Highlights of this project:</Flex>

                  <UnorderedList>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Created a responsive website using media queries and the column section system of Bootstrap.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Worked on optimizing website performance by using lazy loading for images and choosing efficient formats like WebP instead of JPG, PNG, and GIF.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Libraries Used: lazyloading</ListItem>
                  </UnorderedList>
                </Box>
              </Flex>
            </GridItem>
            <GridItem order={{ base: 1, sm: 1, md: 2 }} w='100%' color='#ebebeb' display='flex' justifyContent='center' alignItems='center' h='100%'   >
              <Flex
                h={{ xl: '350px', lg: '250px', md: '250px', sm: '350px', base: '200px' }}
                w={{ xl: '550px', lg: '400px', md: '400px', sm: '550px', base: '360px' }}
                justifyContent='center'
                alignItems='center'
              // bgColor='#ff4545'
              >
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}

                >

                  <SwiperSlide>
                    <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                      <Image src={foxymatic_1} />
                    </Flex>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={foxymatic_2} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={foxymatic_3} />
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </GridItem>

          </Grid>
        </Flex>


        <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} mt='40px' h='fit-content' justifyContent='center' alignItems='center'>
          <Grid placeContent='center' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
            <GridItem order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '2%' }} w='100%' color='#ebebeb'   >
              <Flex fontSize={{ xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }} color='#ff4545'>
                VideoFide
              </Flex>
              <Flex>
                <Box>
                  <Box as="p" fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '17px', base: '17px' }}>
                    VideoFide is  a Product based WebApplication. Created userside and adminside including dashboaord on both sides.
                  </Box>

                  <Box as="h2" mt='20px' fontSize={{ xl: '20px', lg: '20px', md: '20px', sm: '23px', base: '23px' }} >Work Highlights of this project:</Box>

                  <UnorderedList>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }} >Create a Responsive Admin dashboard and userdashboard using React js and Chakra Ui.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }} >Integrated APIs into web applications to enable real-time data exchange and enhance functionality with data validation and error handling.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }} >Secured the api using OAuth authentication using JSON Web Tokens (JWT) provided during the login of the User or Admin. </ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }} >Libraries Used – React-hot-toast , React-icons ,  Suspense with lazy. </ListItem>
                  </UnorderedList>
                </Box>
              </Flex>
            </GridItem>
            <GridItem order={{ base: 1, sm: 1, md: 2 }} w='100%' color='#ebebeb' display='flex' justifyContent='center' alignItems='center' h='100%'   >
              <Flex
                h={{ xl: '350px', lg: '250px', md: '250px', sm: '350px', base: '200px' }}
                w={{ xl: '550px', lg: '400px', md: '400px', sm: '550px', base: '360px' }}
                justifyContent='center'
                alignItems='center'
              // bgColor='#ff4545'
              >
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}

                >

                  <SwiperSlide>
                    <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                      <Image src={video_1} />
                    </Flex>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={video_2} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={video_3} />
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </GridItem>

          </Grid>
        </Flex>


        <Flex w={{ xl: '90%', lg: '90%', md: '90%', sm: '95%', base: '100%' }} mt='40px' h='fit-content' justifyContent='center' alignItems='center'>
          <Grid placeItems='center' w='100%' templateColumns={{ xl: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }} gap={{ base: 0, sm: 0, md: 4, lg: 6 }}>
            <GridItem order={{ base: 2, sm: 2, md: 1 }} px={{ xl: '0%', lg: '0%', md: '0%', sm: '0%', base: '2%' }} w='100%' color='#ebebeb'    >
              <Flex fontSize={{ xl: '40px', lg: '40px', md: '40px', sm: '35px', base: '35px' }} color='#ff4545'>
                Uttara Impex
              </Flex>
              <Flex>
                <Box>
                  <Box as="p" fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '17px', base: '17px' }}>
                    Uttara Impex is a Product showcase Website and WebApplication. Created userside and adminside including dashboaord on both sides.
                  </Box>

                  <Box as="h2" mt='20px' fontSize={{ xl: '20px', lg: '20px', md: '20px', sm: '23px', base: '23px' }}>Work Highlights of this project:</Box>

                  <UnorderedList>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Create a Responsive Admin dashboard and userdashboard using React js and Chakra Ui.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Integrated APIs into web applications to enable real-time data exchange and enhance functionality with data validation and error handling.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Secured the api using OAuth authentication using JSON Web Tokens (JWT) provided during the login of the User or Admin.</ListItem>
                    <ListItem fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '15px', base: '15px' }}>Libraries Used – React-hot-toast , React-icons , Suspense with lazy, React-pageflip.</ListItem>
                  </UnorderedList>
                </Box>
              </Flex>
            </GridItem>
            <GridItem order={{ base: 1, sm: 1, md: 2 }} w='100%' color='#ebebeb' display='flex' justifyContent='center' alignItems='center' h='100%'   >
              <Flex
                h={{ xl: '350px', lg: '250px', md: '250px', sm: '350px', base: '200px' }}
                w={{ xl: '550px', lg: '400px', md: '400px', sm: '550px', base: '360px' }}
                justifyContent='center'
                alignItems='center'
              // bgColor='#ff4545'
              >
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}

                >

                  <SwiperSlide>
                    <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                      <Image src={video_1} />
                    </Flex>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={video_2} />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={video_3} />
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </GridItem>

          </Grid>
        </Flex>



        <Flex w='100%' h='100px' bgColor='#1a1a1a00'></Flex>
      </Flex>

    </Flex>
  )
}

export default Projects
import React from 'react'
import '../App.css'
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Flex w='100%' h='10vh' alignItems='center'>
      <Flex py='5px' px={{ xl: '5%', lg: '5%', md: '5%', sm: '5%', base: '3%' }} w='100%' justifyContent='space-between'>
        <Flex color='#fff' className='navbar_header' fontSize='26px' letterSpacing='2px' cursor='pointer'>
          <NavLink to='/'>
            Nikhil
          </NavLink>
        </Flex>
        <Flex w='50%' justifyContent='flex-end'>
          <Flex display={{ base: 'none', sm: 'none', md: 'flex' }} w='100%'>
            <Flex w='100%' flexDirection='row' alignItems='center' justifyContent='space-evenly' h='100%'   >
              <Flex
                position='relative'
               
                letterSpacing='2px'
                color='#fff'

                fontSize={{ '2xl': '20px', xl: '20px', lg: '17px', md: '12px' }}
              >
                <NavLink to='/' className='navbarfont'>
                  Home
                </NavLink>
              </Flex>
              <Flex
                position='relative'
               
                letterSpacing='2px'
                color='#fff'

                fontSize={{ '2xl': '20px', xl: '20px', lg: '17px', md: '12px' }}
              >
                <NavLink to='/Projects'  className='navbarfont'>
                  Projects
                </NavLink>
              </Flex>
              <Flex
                position='relative'
               
                letterSpacing='2px'
                color='#fff'

                fontSize={{ '2xl': '20px', xl: '20px', lg: '17px', md: '12px' }}
              >
                <NavLink to='/About_me' className='navbarfont'>
                  About
                </NavLink>
              </Flex>
              <Flex
                position='relative'
               
                letterSpacing='2px'
                color='#fff'

                fontSize={{ '2xl': '20px', xl: '20px', lg: '17px', md: '12px' }}
              >
                <NavLink to='/Resume' className='navbarfont'>
                  Resume
                </NavLink>
              </Flex>
              <Flex
                position='relative'
               
                letterSpacing='2px'
                color='#fff'

                fontSize={{ '2xl': '20px', xl: '20px', lg: '17px', md: '12px' }}
              >
                <NavLink to='/Contact_me' className='navbarfont'>
                  Contact
                </NavLink>
              </Flex>
            </Flex>
          </Flex>
          <Flex display={{ base: 'flex', sm: 'flex', md: 'none' }} cursor='pointer' justifyContent='flex-end' fontSize='25px'>

            <Flex fontSize='30px' as='button' justifyContent='center' alignItems='center' bgColor='transparent' m='0px' p='0px' _hover={{ bgColor: 'transparent', color: '#ff4545' }} ref={btnRef} onClick={onOpen}>
              <CgMenuRightAlt color='#fff' />
            </Flex>
            <Drawer
              isOpen={isOpen}
              placement='top'
              onClose={onClose}
              finalFocusRef={btnRef}


            >
              <DrawerOverlay />
              <DrawerContent h='100lvh' bgColor='#1a1a1aeb' transition='transform 1s ease-in-out'>
                <Flex py='5px' px={{ xl: '5%', lg: '5%', md: '5%', sm: '5%', base: '3%' }} w='100%' justifyContent='space-between'>
                  <DrawerHeader color='#fff' className='navbar_header' justifyContent='flex-start' p='0px' fontSize='25px' letterSpacing='2px'>
                    <NavLink to='/'>
                      NIKHIL
                    </NavLink>
                  </DrawerHeader>
                  <DrawerCloseButton _active={{ border: 'none', boxShadow: 'none' }} _focusVisible={{ outline: 'none !important' }} _focus={{ outline: 'none !important' }} position='static' color='#fff' m='0px' p='0px' fontSize={{ xl: '20px', lg: '20px', md: '20px', sm: '20px', base: '20px' }} />
                </Flex>
                <DrawerBody className='scrollcss' h='100%'>
                  <Flex w='100%' flexDirection='column' justifyContent='center' h='100%' py='5%' alignItems='flex-start' pl='15%'>
                    <Flex
                      position='relative'
                      my='15px'
                      letterSpacing='2px'
                      color='#fff'

                      fontSize={{ '2xl': '85px', xl: '70px', lg: '70px', md: '70px', sm: '70px', base: '50px' }}
                    >
                      <NavLink to='/' className='navbarfont'>
                        Home
                      </NavLink>
                    </Flex>
                    <Flex
                      position='relative'
                      my='15px'
                      letterSpacing='2px'
                      color='#fff'

                      fontSize={{ '2xl': '85px', xl: '70px', lg: '70px', md: '70px', sm: '70px', base: '50px' }}
                    >
                      <NavLink to='/Projects' className='navbarfont'>
                        Projects
                      </NavLink>
                    </Flex>
                    <Flex
                      position='relative'
                      my='15px'
                      letterSpacing='2px'
                      color='#fff'

                      fontSize={{ '2xl': '85px', xl: '70px', lg: '70px', md: '70px', sm: '70px', base: '50px' }}
                    >
                      <NavLink to='/About_me' className='navbarfont'>
                        About
                      </NavLink>
                    </Flex>
                    <Flex
                      position='relative'
                      my='15px'
                      letterSpacing='2px'
                      color='#fff'

                      fontSize={{ '2xl': '85px', xl: '70px', lg: '70px', md: '70px', sm: '70px', base: '50px' }}
                    >
                      <NavLink to='/Resume' className='navbarfont'>
                        Resume
                      </NavLink>
                    </Flex>
                    <Flex
                      position='relative'
                      my='15px'
                      letterSpacing='2px'
                      color='#fff'

                      fontSize={{ '2xl': '85px', xl: '70px', lg: '70px', md: '70px', sm: '70px', base: '50px' }}
                    >
                      <NavLink to='/Contact_me' className='navbarfont'>
                        Contact
                      </NavLink>
                    </Flex>
                  </Flex>
                </DrawerBody>


              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar

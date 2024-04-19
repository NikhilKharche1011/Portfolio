import React from 'react'
import '../App.css'
import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Flex w='100%' h='100%'>
      <Flex py='5px' px={{xl:'5%', lg:'5%', md:'5%', sm:'5%', base:'3%'}} w='100%' justifyContent='space-between'>
        <Flex color='#fff' className='navbar_header'  fontSize='25px' letterSpacing='2px' cursor='pointer'>Nikhil</Flex>
        <Flex>
          {/* <Flex cursor='pointer' mx='10px' fontSize='25px'>
            <MdOutlineLightMode />
          </Flex> */}
          <Flex cursor='pointer' justifyContent='flex-end'  fontSize='25px'>

            <Flex fontSize='30px' as='button' bgColor='transparent' m='0px' p='0px' _hover={{bgColor:'transparent'}} ref={btnRef} onClick={onOpen}>
              <CgMenuRightAlt color='#fff' />
            </Flex>
            <Drawer
              isOpen={isOpen}
              placement='top'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent h='100vh' bgColor='#1a1a1ad6' transition='0.6s ease-in-out'>
                <DrawerCloseButton color='#fff' m='10px' fontSize='30px' />
                <DrawerHeader color='#fff' className='navbar_header' pl='40px' fontSize='25px' letterSpacing='2px'>NIKHIL</DrawerHeader>
                <DrawerBody>
                  <Flex w='100%' flexDirection='column' h='100%' justifyContent='center' alignItems='flex-start' pl='15%'>
                    <Flex my='10px' letterSpacing='2px' color='#fff'  className='navbarfont' fontSize={{xl:'60px', lg:'60px', md:'60px', sm:'60px', base:'50px'}}>Home</Flex>
                    <Flex my='10px' letterSpacing='2px' color='#fff'  className='navbarfont' fontSize={{xl:'60px', lg:'60px', md:'60px', sm:'60px', base:'50px'}}>Projects</Flex>
                    <Flex my='10px' letterSpacing='2px' color='#fff'  className='navbarfont' fontSize={{xl:'60px', lg:'60px', md:'60px', sm:'60px', base:'50px'}}>About</Flex>
                    <Flex my='10px' letterSpacing='2px' color='#fff'  className='navbarfont' fontSize={{xl:'60px', lg:'60px', md:'60px', sm:'60px', base:'50px'}}>Resume</Flex>
                    <Flex my='10px' letterSpacing='2px' color='#fff'  className='navbarfont' fontSize={{xl:'60px', lg:'60px', md:'60px', sm:'60px', base:'50px'}}>Contact</Flex>
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

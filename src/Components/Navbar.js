import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { MdOutlineLightMode } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <Flex w='100%' h='100%'>
      <Flex py='0.5%' px='10%' w='100%' justifyContent='space-between'>
        <Flex>Nikhil</Flex>
        <Flex>
          <Flex mx='10px' fontSize='25px'>
            <MdOutlineLightMode />
          </Flex>
          <Flex mx='10px' fontSize='25px'>
            <HiMenuAlt3 />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar

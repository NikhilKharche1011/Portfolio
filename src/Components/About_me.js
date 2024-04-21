import React from 'react'
import Navbar from './Navbar'
import { Flex, Text } from '@chakra-ui/react'
const About_me = () => {
  return (
    <Flex w='100%' h='100lvh' flexDirection='column'>
    <Navbar />
    <Flex>

        <Text color='white'>
            About me
        </Text>
    </Flex>
</Flex>
  )
}

export default About_me
import React from 'react'
import Navbar from './Navbar'
import { Flex, Text } from '@chakra-ui/react'
const Resume = () => {
  return (
    <Flex w='100%' h='100lvh' flexDirection='column'>
    <Navbar />
    <Flex>

        <Text color='white'>
            Resume
        </Text>
    </Flex>
</Flex>
  )
}

export default Resume
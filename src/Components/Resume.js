import React from 'react'
import Navbar from './Navbar'
import { Flex, Text } from '@chakra-ui/react'
const Resume = () => {
  return (
    <Flex
    w='100%'
    h='100lvh'
    flexDirection='column'
    bgColor='#1a1a1a'
    bgPosition='center'
    bgSize='cover'
    overflowY='scroll'
    className='scroll'
    alignItems='center'
    >
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
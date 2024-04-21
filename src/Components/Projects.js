import React from 'react'
import Navbar from './Navbar'
import { Flex, Text } from '@chakra-ui/react'

const Projects = () => {
  return (
    <Flex w='100%' h='100lvh' flexDirection='column'>
            <Navbar />
            <Flex>

                <Text color='white'>
               Projects
                </Text>
            </Flex>
        </Flex>
  )
}

export default Projects
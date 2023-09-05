import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

import emblem from '../Images/emblem.png';


const Navbar = () => {
  return (
    <Flex justifyContent={'space-evenly'} bg={'rgb(10,30,89)'} color={'white'} p={'20px 0px'} alignItems={'center'}>
        <Image src={emblem} style={{width:'90px'}}>
        </Image>
        <Heading>
           Goods and Services Tax
        </Heading>
        <Button>Login</Button>
    </Flex>
  )
}

export default Navbar
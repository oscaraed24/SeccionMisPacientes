import React from 'react'
import { Flex,Text,Image } from '@chakra-ui/react'
import isotipo from '../../assets/isotipo.svg'


const Footer = () => {
    return (
        <Flex 
        w='100%' 
        h='80px' 
        bg='#E5E5E5'
        borderTopColor='#C3C3C5'
        borderTopWidth='1px'
        alignItems='center'
        >
        <Image src={isotipo} alt='logo' h='50px' mx='1.5em' ></Image>
        <Text fontSize='16px' fontWeight='400' mr='0.5em' color='#A5A5A8'>
        Copyright © 2021 Clinica San Felipe
      </Text>


        </Flex>
    )
}

export default Footer

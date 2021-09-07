import React from 'react'
import { Flex,Avatar,Box,Text }from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'



const Header = () => {
    return (
    <Flex      
      justifyContent='flex-end'
      h="80px"
      backgroundColor="white"
      boxShadow="0px 3px 8px 0px #A3AAB41A"   
      borderBottomRadius='10px' 
      marginBottom='32px'
    >
        

        
        
       <Flex alignItems="center" mx="1em">
        <Avatar name="M D" mr="1em" bg="#F5F5F5" size="md" color=" #0043A5" src="https://bit.ly/ryan-florence"/>
        <Box>
          <Text fontSize="14px" mr="0.5em">
            Hola,
          </Text>
          <Text fontSize="16px" fontWeight="700" mr="0.5em">
            Miguel Dávila
          </Text>
        </Box>
        <Text fontSize="16px" fontWeight="700" mr="0.5em">
        <ChevronDownIcon cursor="pointer" fontSize="3xl" />
          </Text>
       
      </Flex>


</Flex>
    )
}

export default Header

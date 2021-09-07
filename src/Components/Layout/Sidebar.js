import React from 'react'
import { Stack,Center,Image,Link,HStack,Box,Text } from '@chakra-ui/react'
import home from '../../assets/icons/home.svg'
import logo from '../../assets/logo.svg'
import pacientes from '../../assets/icons/pacientes.svg'

import agenda from '../../assets/icons/agenda.svg'



const Sidebar = () => {
    return (
        <Stack       
        width="256px"
        height='100%'       
        backgroundColor="#0043A5"        
      >
        <Center backgroundColor="white" height='95px'>
          <Image src={logo} alt="logo" w="133px" height="42px" />
        </Center>
        <Stack height="100%" paddingTop="24px" >
          <Link
            color="white"
            fontSize="16px"
            fontWeight="bold"
            py="0.5em"
            w="85%"
            paddingLeft="25px"
            textAlign="center"  
            style={{ textDecoration: "none" }}           
          >
            <HStack spacing="20px">
              <Box ml="1em">
                <Image src={home} alt="logo" />
              </Box>
              <Text>Inicio</Text>
            </HStack>
          </Link>
          <Link
            color="white"
            fontSize="16px"
            fontWeight="bold"
            w="85%"
            py="0.5em"          
            paddingLeft="25px"
            textAlign="center" 
            style={{ textDecoration: "none" }}             
          >
            <HStack spacing="20px">
              <Box ml="1em">
                <Image src={pacientes} alt="logo" />
              </Box>
              <Text>Mis Pacientes</Text>
            </HStack>
          </Link>
          <Link
            color="white"
            fontSize="16px"
            fontWeight="bold"
            w="85%"
            py="0.5em"            
            paddingLeft="25px"
            textAlign="center" 
            style={{ textDecoration: "none" }}   
          >
            
            <HStack spacing="20px">
              <Box ml="1em">
                <Image src={agenda} alt="logo" />
              </Box>
              <Text>Agenda</Text>
            </HStack>
          </Link>
        </Stack>
      </Stack>
  
    )
}

export default Sidebar

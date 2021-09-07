import React from 'react'
import { Heading, Stack,HStack,Text,Link} from "@chakra-ui/react"

const CustomHeader = () => {
    return (
        <Stack spacing="16px" width='100%'>
           <Link style={{ textDecoration: "none" }}>
            <HStack>             
              <Text 
                  color="#4D4D4F"
                  fontSize="14px" 
                  fontWeight="400"
                  fontFamily="PT Sans">
                  Inicio
              </Text> 
              <Text 
                  color="#4D4D4F"
                  fontSize="16px" 
                  fontWeight="400"
                  fontFamily="PT Sans"> 
                  /
              </Text>
          
              <Text 
                  color="#4D4D4F"
                  fontSize="14px" 
                  fontWeight="700"
                  fontFamily="PT Sans">
                  Mis Paciente
              </Text>            
              </HStack> 
            </Link>
        <HStack mt="1em">
            
          <Heading
            fontSize="48px"
            color="#0043A5"
            fontWeight="400"
            lineHeight="110%"
            fontFamily="PT Sans"
          >
            Mis Pacientes
          </Heading>
        </HStack>
        <Text 
        color="#4D4D4F"
        fontSize="16px" 
        fontWeight="400"
        fontFamily="PT Sans">
          Tu lista de pacientes agendados para el dia de hoy
        </Text>
      </Stack>
  
    )
}

export default CustomHeader

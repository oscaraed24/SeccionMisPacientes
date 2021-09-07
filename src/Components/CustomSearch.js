import React from 'react'
import {  Image,       
        Input,InputGroup,
          Link,InputLeftElement, InputRightElement,} from "@chakra-ui/react"
import search from "../assets/icons/search.svg"
import greensearch from "../assets/icons/button_search_green.svg"



const CustomSearch = () => {
    return (
        <InputGroup w="50%" mt='26px' mb='32px'>
        <InputLeftElement h="50px" w="60px">
        <Image src={search}></Image>
      </InputLeftElement>

        <Input
        bg="white"
        placeholder="Busca por DNI, Nombre, Apellido"
        fontSize="14px"
        fontWeight="400"
        h="50px"
        pl="3.5em"
        borderRadius="30px"
      />

        <InputRightElement h="50px">
          <Link>
          <Image src={greensearch}
          /></Link>
        </InputRightElement>

      </InputGroup>

        
    )
}

export default CustomSearch

import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,  
  Tr,
  Th,
  Td  
} from "@chakra-ui/react"

const Sedes = () => {
    return (
        <Tabs isFitted variant="enclosed" >
        <TabList h='44px' mb='16px' mt='16px' >
          <Tab color='#4D4D4F' borderTopRadius='10px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>SEDE CAMACHO</Tab>
          <Tab color='#4D4D4F' borderTopRadius='10px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>SEDE JESUS MARIA TORRE I</Tab>
          <Tab color='#4D4D4F' borderTopRadius='10px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>SEDE JESUS MARIA TORRE II</Tab>
          <Tab color='#4D4D4F' borderTopRadius='10px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>TODAS LAS SEDES</Tab>
        </TabList>
        <TabList h='66px'>
          <Tab color='#4D4D4F' borderTopRadius='4px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>Todos</Tab>
          <Tab color='#4D4D4F' borderTopRadius='4px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>Reservados</Tab>
          <Tab color='#4D4D4F' borderTopRadius='4px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>En espera</Tab>
          <Tab color='#4D4D4F' borderTopRadius='4px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>En atención</Tab>
          <Tab color='#4D4D4F' borderTopRadius='4px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>Atendidos</Tab>
          <Tab color='#4D4D4F' borderTopRadius='4px' fontSize='16px' fontFamily='PT Sans' fontWeight='700' bg='#E0E6EE' _selected={{ color: "white", bg: "#0043A5" }}>No llegó</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
          <Table size="sm" bg='white' borderRadius='4px'>
  <Thead>
    <Tr>
      <Th>Nro. Atención</Th>
      <Th>DNI/CE</Th>
      <Th>Nombres</Th>
      <Th>Apellidos</Th>
      <Th>Edad</Th>
      <Th>Fecha de Cita</Th>
      <Th>Hora de Cita</Th>
      <Th>Tipo de Atención</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
  </Tbody>
  <Tbody>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
  </Tbody>
  <Tbody>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
  </Tbody>
  <Tbody>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
  </Tbody>
  <Tbody>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
  </Tbody>
  <Tbody>
    <Tr>
    <Td>087999</Td>
      <Td>41258741</Td>
      <Td>Juan</Td>
      <Td>Perez Pino</Td>
      <Td>47</Td>
      <Td>10 Julio 2020</Td>
      <Td>10:00 AM</Td>
      <Td>Presencial</Td>
    </Tr>
  </Tbody>
</Table>
          </TabPanel>
          <TabPanel>
            <p>JESUS MARIA I</p>
          </TabPanel>
          <TabPanel>
            <p>JESUS MARIA II</p>
          </TabPanel>
          <TabPanel>
            <p>TODAS LAS SEDES</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    )

}

export default Sedes

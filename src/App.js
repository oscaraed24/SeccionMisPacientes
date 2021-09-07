import React from 'react'
import CustomHeader from './Components/CustomHeader';
import CustomSearch from './Components/CustomSearch';
import Sedes from './Components/Sedes';
import './App.css';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import { Flex,Box } from '@chakra-ui/react';



function App() {
  return (
    
    <>
    <Box bg='#E5E5E5'>
      <Flex>
        <Box>    
          <Sidebar/>
        </Box>
       
        <Box width='100%'>
            <Box  marginLeft='32px' marginRight='32px'>                          
              <Header/>              
              <CustomHeader/>
              <CustomSearch/>   
              <Sedes/>
            </Box>         
            <Box mt='44px'>
              <Footer/>
            </Box> 
                                      
        </Box>
        
       
      </Flex>
    </Box>
    
    
    </>
  
  );
    
}

export default App;

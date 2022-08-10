import { Box } from '@chakra-ui/react'
import React from 'react';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';

function Navbar() {
  return (
  <Box w='100%' p={5} style={{ paddingLeft:"50px",paddingRight:"50px" ,display:'flex', flexDirection:'row', justifyContent:"right", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", backgroundColor:"rgba(255, 255, 255, 0.444)"}}>
    <Box style={{display:'flex', flexDirection:'row', justifyContent:"space-around", gap:"30px"}}>
        <Login />
        <Signup />
    </Box>
  </Box>
  )
}

export default Navbar
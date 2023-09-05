import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Services = () => {
    const navigate=useNavigate();

    

    let getdata=async()=>{
    const clientSecret = '66612446-408a-4fde-b72b-379efde8f0ce';
    const clientId = 'a537cdd4-a81b-4ec0-852d-25da8cb0bfb7';
        try{
         const headers = {
             'Content-Type': 'application/json',
             'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
           };
           const requestOptions = {
             method: 'GET',
             headers: headers,
           };
         let res=await fetch(`https://api.mastergst.com/public/search?email=akashkaliyaganj5@gmail.com&gstin=33AAGCC7144L6ZE`,requestOptions);
         let jdata=await res.json();
         console.log(jdata);}
         catch(err){
             console.log(err.message);
         }
     }

  return (
    <>
        <Navbar/>
    <Box  m={'18px 18px'} p={'20px 0px'}>
        <Heading size={'lg'} p={'12px'}>Search Taxpayer</Heading>
        <Text size={'md'} p={'10px'}>GSTIN/UIN of the Taxpayer</Text>
        <Input placeholder='Enter GST Number' p={'10px'}/>
        <Button mt={'20px'} colorScheme='blue' onClick={()=>{
            navigate('/details');
        }}>Submit</Button>
    </Box>
    </>
  )
}

export default Services
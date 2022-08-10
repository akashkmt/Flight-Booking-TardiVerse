import React from 'react';
import Offers from '../../Offers/Offers';
import { Box, Select, Input, Heading, Button } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

const allCites = [
  'New Delhi',
  'Jaipur',
  'Chennai',
  'Bengaluru',
  'Mumbai',
  'Kolkata',
  'Hyderabad',
  'Ahmedabad',
  'Pune',
];

function Booking() {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [dDate, setDDate] = React.useState('');
  const [aDate, setADate] = React.useState('');
  const [offer, setOffer] = React.useState('');
  const [dPrice, setDPrice] = React.useState('');
  const [price,setPrice] = React.useState('');

  React.useEffect(()=>{
    getOffer();
    getPrice();
  },[offer, setOffer, dDate, aDate, setPrice, from, to, setFrom, setTo]);


  const handleDDate = (date) => {
    // console.log(date);
    if(!date){
      setADate('');
      return;
    }
    // setDDate(date);
    let d = new Date(date);
    let curDate = new Date();
    // console.log(date,d, curDate);
    // console.log(curDate, curDate.getDate(), curDate.getMonth(), curDate.getFullYear());
    // console.log(new Date(curDate.setHours(curDate.getHours() + 2)));
    if (d.getDate() >= curDate.getDate() && d.getMonth() >= curDate.getMonth() && d.getFullYear() >= curDate.getFullYear() && d.getHours() >= curDate.getHours()) {
      setDDate(date);
      let aD = new Date(d.setHours(d.getHours() + 3));
      // let aD = new Date(d);
      let hour;
      let month;
      let day;
      let minute;
      if(aD.getHours() < 10){
        hour = '0'+aD.getHours();
      }else{
        hour = aD.getHours();
      }
      if(aD.getMinutes() < 10){
        minute = '0'+aD.getMinutes();
      }else{
        minute = aD.getMinutes();
      }
      if(aD.getMonth() < 10){
        month = '0'+(aD.getMonth()+1);
      }else{
        month = (aD.getMonth()+1);
      }
      if(aD.getDate() < 10){
        day = '0'+aD.getDate();
      }else{
        day = aD.getDate();
      }

      aD = aD.getFullYear() + '-' +month+ '-' +day+"T"+hour+":"+ minute;
      // console.log(aD)
      // let aD = date.setHours(date.getHours() + 3);
      setADate(aD);
      // getPrice();
    }
    else{
      setDDate('');
    }
     
  }
  const getPrice = () => {
    // console.log('called getPrice');
    let a = allCites.indexOf(from);
    let b = allCites.indexOf(to);
    let d = new Date(dDate);
    let currDate = new Date();
    let month = Math.abs(d.getMonth() - currDate.getMonth());
    if(month === 0){
    let price = (a+b)*1000;
    setPrice(price);
    }
    else{
      let price = (a+b)*1000 - Math.round(((a+b)*1000)*(month*0.5)/100);
    setPrice(price);
    }
  }

  const getOffer = () => {
// console.log('called get offer' , offer)
    if(offer === 'ff10'){
      setDPrice(Math.round((price*90)/100));
    }else if(offer === 'f2f08'){
      setDPrice(Math.round((price*92)/100));
    }else if(offer === 'f3f06'){
      setDPrice(Math.round((price*94)/100));
    }
  }

  return (
    <div>
      <Box>
        <Box
          bg={'rgba(255, 255, 255, 0.744)'}
          style={{
            width: '800px',
            margin: 'auto',
            padding: '20px',
            marginTop: '100px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              justifyContent: 'space-around',
            }}
          >
            <Box
              width={337}
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <Heading as="h5" size="sm">
                From
              </Heading>
              <Select icon={<ArrowDownIcon />} placeholder="Select City" value={from} onChange={(e)=>{e.target.value === to ? setFrom("") : setFrom(e.target.value)}}>
                {allCites.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Select>
              <Input
              value={dDate}
              onChange={(e)=>{handleDDate(e.target.value)}}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </Box>

            <Box
              width={337}
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <Heading as="h5" size="sm">
                To
              </Heading>
              <Select icon={<ArrowDownIcon />} placeholder="Select City" value={to} onChange={(e)=>{e.target.value === from ? setTo("") : setTo(e.target.value)}}>
                {allCites.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Select>
              <Input value={aDate}
              onChange={()=>{handleDDate(dDate)}}
                disabled={(dDate && to && from) ? true : false}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </Box>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Offers setOffer={setOffer} getOffer={getOffer}/>
            <Input placeholder="Enter Coupon Code" value={offer} width={430} onChange={(e)=>{setOffer(e.target.value);}}/>
          </Box>
          <Box style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft:"20px",
              paddingRight:"20px",
            }}>
            <Box opacity={(dDate && aDate && to && from) ? 100 : 0} style={{ width:"300px", display:"flex", flexDirection:"row", gap:"20px", justifyContent:"center"}}>
            <span style={{margin:"auto", marginLeft:"0", marginRight:"0"}}>Payable price</span>
            {
            price ? <span style={{margin:"auto", marginLeft:"0", marginRight:"0"}}>{price}</span> : null
            }
            {
              dPrice ? <span style={{margin:"auto", marginLeft:"0", marginRight:"0"}}>{dPrice}</span> : null
            }
            </Box>
            <Button width={250} colorScheme="teal">
              Book Ticket
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Booking;

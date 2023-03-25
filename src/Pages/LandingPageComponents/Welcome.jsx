import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Highlight, Image, Text } from "@chakra-ui/react";

const headingStyle = {
    fontWeight:600,
    fontSize:{base:'40px', lg:'16px'},
    color:'#111822',
    lineHeight:{base:'48px',lg:'19px'},
    letterSpacing:'-0.02em',
    opacity:'0.5'
}

const headingStyle2 = {
    fontWeight:600,
    fontSize:{base:'86px',lg:'56px'},
    color:'#111822',
    lineHeight:{base:'103px',lg:'67px'},
    letterSpacing:'-0.02em',
    margin:'3px auto',
    width:'824px'
}

const bodyStyle = {
    fontWeight:500,
    fontSize:'22px',
    color:'#111822',
    lineHeight:'26px',
    letterSpacing:'-0.02em',
    opacity:'0.5',
    width:'509px',
    margin:'17px auto',
    textAlign:'center'
}

export default function Welcome() {
    return (
        <Box m='auto'>
            <Text style={headingStyle} textAlign={'center'}>WELCOME TO CREATIVE PROXIES</Text>
            <Heading style={headingStyle2}>We are the <Highlight query='Fastest' styles={{color:'#077BFF'}}>Fastest</Highlight> and the <Highlight query='Most' styles={{color:'#16D113'}}>Most</Highlight> <Highlight query='Reliable' styles={{color:'#16D113'}}>Reliable</Highlight> Proxy Service since 2020</Heading>
            <Image src={'blueStar.svg'} pos={'absolute'} top='206px' left='800px' />
            <Image src={'greenStar.svg'} pos={'absolute'} top='281px' left='525px' />
            <Text style={bodyStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Button 
                w='222px' 
                h='47px' 
                p='10px' 
                borderRadius={'10px'} 
                bgColor={'#077BFF'} 
                color='white'
            >
                Get Started 
                <ArrowForwardIcon />
            </Button>
        </Box>
    )
};

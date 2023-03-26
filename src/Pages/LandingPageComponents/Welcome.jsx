import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom';

const headingStyle = {
    fontWeight:600,
    color:'#111822',
    letterSpacing:'-0.02em',
    opacity:'0.5'
}

const headingStyle2 = {
    fontWeight:600,
    color:'#111822',
    letterSpacing:'-0.02em',
    margin:'3px auto',
}

const bodyStyle = {
    fontWeight:500,
    color:'#111822',
    letterSpacing:'-0.02em',
    opacity:'0.5',
    margin:'17px auto',
    textAlign:'center'
}

export default function Welcome() {
    return (
        <Box m='auto'>
            <Text style={headingStyle} fontSize={{base:'7px',xl:'16px'}} lineHeight={{base:'8.5px',xl:'19px'}} textAlign={'center'}>WELCOME TO CREATIVE PROXIES</Text>
            <Heading style={headingStyle2} fontSize={{base:'28px',xl:'56px'}} lineHeight={{base:'30px',xl:'67px'}} width={{base:'315px',xl:'824px'}}>We are the <Highlight query='Fastest' styles={{color:'#077BFF'}}>Fastest</Highlight> and the <Highlight query='Most' styles={{color:'#16D113'}}>Most</Highlight> <Highlight query='Reliable' styles={{color:'#16D113'}}>Reliable</Highlight> Proxy Service since 2020</Heading>
            
            <Image src={'blueStar.svg'} pos={'absolute'} top={{base:'95px', xl:'193px'}} left={{base:'266px', xl:'800px'}} w={{base:'12px', xl:'30px'}} />
            <Image src={'greenStar.svg'} pos={'absolute'} top={{base:'124px', xl:'267px'}} left={{base:'88px', xl:'525px'}} w={{base:'11.5px', xl:'30px'}} transform={{base:'matrix(-1, 0, 0, 1, 0, 0)', xl:'matrix(1, 0, 0, 1, 0, 0)'}} />
            
            <Text style={bodyStyle} fontSize={{base:'10px',xl:'22px'}} lineHeight={{base:'12px',xl:'26px'}} width={{base:'226.5px',xl:'509px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            
            <Link to='/proxyLocation'>
                <Button 
                    w={{base:'157px',xl:'223px'}} 
                    h={{base:'27px',xl:'39px'}} 
                    p={{base:'7px',xl:'10px'}} 
                    borderRadius={'10px'} 
                    bgColor={'#077BFF'} 
                    color='white'
                    fontSize={{base:'11px', xl:'16px'}}
                    mb={{base:'9px'}}
                    >
                    Get Started 
                    <ArrowForwardIcon />
                </Button>
            </Link>
        </Box>
    )
};

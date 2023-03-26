import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import {ChevronDownIcon, HamburgerIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const headingStyle = {
    fontWeight:600,
    color:'#111822',
    lineHeight:'31px',
    letterSpacing:'-0.02em'
}

const bodyStyle = {
    fontWeight:500,
    fontSize:'16px',
    color:'#111822',
    lineHeight:'19px',
    letterSpacing:'-0.02em'
}

export default function Navbar() {
    return (
        <Box 
            p={{base:'10px 0px',xl:'14px 10px'}} 
            borderBottom={'3px solid lightgray'} 
            w={{base:'315px',xl:'1152px'}} 
            pos={'sticky'} 
            top={0} 
            zIndex={100} 
            bgColor={'white'}
            m='0 auto'
        >
            <HStack justifyContent={'start'}>
                <Link to='/'>
                    <HStack mr={{base:'44px',xl:'31px'}}>
                        <Image src={'creativeproxies.png'} alt='logo' />
                        <Heading style={headingStyle} fontSize={{base:'18px',xl:'26px'}}>CreativeProxies</Heading>
                    </HStack>
                </Link>
                <HStack display={{base:'none', lg:'flex'}} alignItems={'center'} gap='24px'>
                    <Text style={bodyStyle}>Pricing</Text>
                    <Text style={bodyStyle}>Exploring Tools <ChevronDownIcon /></Text>
                    <Text style={bodyStyle}>Resources <ChevronDownIcon /></Text>
                    <Text style={bodyStyle}>FAQs</Text>
                    <Text style={bodyStyle}>Blogs</Text>
                </HStack>
                <HStack display={{base:'none', lg:'flex'}} pl='60px' pr='28px'>
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={{bodyStyle, color:'#5865F2'}}>Join Discord</Text>
                    <Box w='0px' h='31.5px' border={'1px solid #D9D8D6'}></Box>
                    <Text style={bodyStyle}>Log in</Text>
                </HStack>
                <Link to='/proxyLocation'>
                    <Button 
                        p={{base:'8px',xl:'10px 22px'}} 
                        w={{base:'81px', lg:'127px'}} 
                        h={{base:'25px', xl:'39px'}} 
                        borderRadius={'5px'} 
                        bgColor={'#077BFF'} 
                        color='white'
                        fontSize={{base:'10px', xl:'16px'}}
                        >
                        Get Started
                    </Button>
                </Link>
                <Box 
                    display={{base:'flex', xl:'none'}} 
                    w='25px' 
                    h='25px' 
                    background='rgba(7, 123, 255, 0.25)'
                    borderRadius={'5px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <HamburgerIcon color={'#077BFF'} />
                </Box>
            </HStack>
        </Box>
    )
};

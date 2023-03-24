import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'

const headingStyle = {
    fontWeight:600,
    fontSize:'26px',
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
            p={'14px 10px'} 
            borderBottom={'3px solid lightgray'} 
            w={'1118px'} 
            pos={'sticky'} 
            top={0} 
            zIndex={100} 
            bgColor={'white'}
            m='0 192px'
        >
            <HStack justifyContent={'start'}>
                <HStack mr='31px'>
                    <Image src={'creativeproxies.png'} alt='logo' />
                    <Heading style={headingStyle}>CreativeProxies</Heading>
                </HStack>
                <HStack alignItems={'center'} gap='24px'>
                    <Text style={bodyStyle}>Pricing</Text>
                    <Text style={bodyStyle}>Exploring Tools <ChevronDownIcon /></Text>
                    <Text style={bodyStyle}>Resources <ChevronDownIcon /></Text>
                    <Text style={bodyStyle}>FAQs</Text>
                    <Text style={bodyStyle}>Blogs</Text>
                </HStack>
                <HStack pl='50px' pr='28px'>
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={{bodyStyle, color:'#5865F2'}}>Join Discord</Text>
                    <Box w='0px' h='31.5px' border={'1px solid #D9D8D6'}></Box>
                    <Text style={bodyStyle}>Log in</Text>
                </HStack>
                <Button ml='50px' p='10px 22px' borderRadius={'5px'} bgColor={'#077BFF'} color='white'>Get Started</Button>
            </HStack>
        </Box>
    )
};

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
        <Box py={'14px'} borderBottom={'3px solid lightgray'} w={'full'}>
            <HStack justifyContent={'space-between'} px={'10px'}>
                <HStack>
                    <Image src={'creativeproxies.png'} alt='logo' />
                    <Heading style={headingStyle}>CreativeProxies</Heading>
                </HStack>
                <HStack alignItems={'center'} gap='30px'>
                    <Text style={bodyStyle}>Pricing</Text>
                    <Text style={bodyStyle}>Exploring Tools <ChevronDownIcon /></Text>
                    <Text style={bodyStyle}>Resources <ChevronDownIcon /></Text>
                    <Text style={bodyStyle}>FAQs</Text>
                    <Text style={bodyStyle}>Blogs</Text>
                </HStack>
                <HStack>
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={{bodyStyle, color:'#5865F2'}}>Join Discord</Text>
                    <Box w='0px' h='31.5px' border={'1px solid #D9D8D6'}></Box>
                    <Text style={bodyStyle}>Log in</Text>
                </HStack>
                <Button p='10px 22px' borderRadius={'5px'} bgColor={'#077BFF'} color='white'>Get Started</Button>
            </HStack>
        </Box>
    )
};

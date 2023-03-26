import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

const headingStyle = {
    fontWeight:600,
    fontSize:{base:'44px',lg:'26px'},
    color:'#111822',
    lineHeight:{base:'53px',lg:'31px'},
    letterSpacing:'-0.02em'
}

const subHeadingStyle = {
    fontWeight:400,
    fontSize:{base:'24px',lg:'14px'},
    color:'#111822',
    lineHeight:{base:'29px',lg:'17px'},
    letterSpacing:'-0.02em',
    opacity:0.5
}

const bodyStyle = {
    fontWeight:500,
    fontSize:{base:'27px',lg:'16px'},
    color:'#111822',
    lineHeight:{base:'33px',lg:'19px'},
    letterSpacing:'-0.02em'
}

export default function Footer() {
    return (
        <HStack p='34px 10px' borderTop={'1px solid #D9D8D6'} w='1148px' h='224px' mb='14px' mx={{base:'90px',lg:'192px'}}>
            <VStack justifyContent={'center'} alignItems={'flex-start'} mr='240px'>
                <HStack>
                    <Image src={'creativeproxies.png'} alt='logo' />
                    <Heading style={headingStyle}>CreativeProxies</Heading>
                </HStack>
                <Text style={subHeadingStyle} pl='11px' w='225px'>Copyright © 2023 Creative Proxies.
                    All rights reserved.
                </Text>
                <Button
                    border='1px solid #5865F2'
                    w={{base:'376px',lg:'221px'}}
                    h={{base:'75px',lg:'44px'}}
                    boxSizing="border-box"
                    background={'rgba(88,101,242,0.1)'}
                    borderRadius={{base:'17px',lg:'10px'}}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={{base:'17px',lg:'10px'}}
                    p={{base:'17px',lg:'10px'}}
                >
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={{bodyStyle, color:'#5865F2'}}>Join Our Discord</Text>
                </Button>
            </VStack>

            {/* 2nd Box */}
            <HStack justifyContent={'space-evenly'} gap='70px' alignItems={"flex-start"} pt='34px'>
                <VStack alignItems={'flex-start'} gap='10px' w='165px'>
                    <Text style={subHeadingStyle}>Explore</Text>
                    <Text style={bodyStyle}>Proxy Location Checker</Text>
                    <Text style={bodyStyle}>IPv6 Compatibility</Text>
                    <Text style={bodyStyle}>Blogs</Text>
                </VStack>
                <VStack alignItems={'flex-start'} gap='10px' w='165px'>
                    <Text style={subHeadingStyle}>Resources</Text>
                    <Text style={bodyStyle}>FAQs</Text>
                    <Text style={bodyStyle}>Branding</Text>
                    <Text style={bodyStyle}>Network Information</Text>
                    <Text style={bodyStyle}>Imprint</Text>
                </VStack>
                <VStack alignItems={'flex-start'} gap='10px' w='165px'>
                    <Text style={subHeadingStyle}>Support</Text>
                    <Text style={bodyStyle}>Status</Text>
                    <Text style={bodyStyle}>Terms of Service</Text>
                    <Text style={bodyStyle}>Privacy Policy</Text>
                </VStack>
            </HStack>
        </HStack>
    )
};

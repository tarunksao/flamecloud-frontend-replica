import { Button, Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

const headingStyle = {
    fontWeight:600,
    color:'#111822',
    letterSpacing:'-0.02em'
}

const subHeadingStyle = {
    fontWeight:400,
    
    color:'#111822',
    lineHeight:{base:'29px',lg:'17px'},
    letterSpacing:'-0.02em',
    opacity:0.5
}

const bodyStyle = {
    fontWeight:500,
    color:'#111822',
    letterSpacing:'-0.02em'
}

export default function Footer() {
    return (
        <Flex 
            flexDir={{base:'column', xl:'row'}} 
            p={{base:'24px 0px',xl:'34px 10px'}} 
            borderTop={'1px solid #D9D8D6'} 
            w={{base:'315px',xl:'1148px'}} 
            h={{base:'198px',xl:'224px'}} 
            mb={'14px'} 
            mx={'auto'}
        >
            <Flex flexDir={{base:'row', xl:'column'}} gap={{base:'10px'}} justifyContent={'center'} alignItems={'flex-start'} mr={{base:'0px', xl:'240px'}}>
                <VStack mr={{base:'54px'}}>
                    <HStack>
                        <Image src={'creativeproxies.png'} alt='logo' />
                        <Heading style={headingStyle} fontSize={{base:'15.5px',lg:'26px'}} lineHeight={{base:'18.5px',lg:'31px'}}>CreativeProxies</Heading>
                    </HStack>
                    <Text style={subHeadingStyle} fontSize={{base:'8.5px',lg:'14px'}} pl='11px' w={{base:'126px',xl:'225px'}}>Copyright © 2023 Creative Proxies.
                        All rights reserved.
                    </Text>
                </VStack>
                <Button
                    border='1px solid #5865F2'
                    w={{base:'131px',xl:'221px'}}
                    h={{base:'26px',xl:'44px'}}
                    boxSizing="border-box"
                    background={'rgba(88,101,242,0.1)'}
                    borderRadius={{base:'6px',lg:'10px'}}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={{base:'6px',lg:'10px'}}
                    p={{base:'6px',lg:'10px'}}
                >
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={bodyStyle} color='#5865F2' fontSize={{base:'8px',lg:'16px'}}>Join Our Discord</Text>
                </Button>
            </Flex>

            {/* 2nd Box */}
            <HStack justifyContent={'space-evenly'} gap={{base:'30px',xl:'70px'}} alignItems={"flex-start"} pt={{base:'21px',xl:'0px'}} pb={{base:'24px'}}>
                
                <VStack alignItems={'flex-start'} gap={{base:'5px',xl:'10px'}} w={{base:'98px',xl:'165px'}}>
                    <Text style={subHeadingStyle} fontSize={{base:'8.5px',lg:'14px'}}>Explore</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Proxy Location Checker</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>IPv6 Compatibility</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Blogs</Text>
                </VStack>

                <VStack alignItems={'flex-start'} gap={{base:'5px',xl:'10px'}} w={{base:'98px',xl:'165px'}}>
                    <Text style={subHeadingStyle} fontSize={{base:'8.5px',lg:'14px'}}>Resources</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>FAQs</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Branding</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Network Information</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Imprint</Text>
                </VStack>
                
                <VStack alignItems={'flex-start'} gap={{base:'5px',xl:'10px'}} w={{base:'98px',xl:'165px'}}>
                    <Text style={subHeadingStyle} fontSize={{base:'8.5px',lg:'14px'}}>Support</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Status</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Terms of Service</Text>
                    <Text style={bodyStyle} fontSize={{base:'8.5px',lg:'16px'}} lineHeight={{base:'11.5PX',lg:'19px'}}>Privacy Policy</Text>
                </VStack>
            </HStack>
        </Flex>
    )
};

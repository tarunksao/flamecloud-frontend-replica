import { Box, Button, Flex, HStack, Highlight, Image, Text, VStack } from "@chakra-ui/react";
import v4 from '../../Images/v4.svg';
import v6 from '../../Images/v6.svg';
import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";

const headingStyle = {
    fontSize:'20px',
    fontWeight:'600',
    lineHeight:'24px',
    letterSpacing:'-0.02em',
    color:'#111822'
}

const subHeadingStyle = {
    fontSize:'16px',
    lineHeight:'19px',
    letterSpacing:'-0.02em',
    opacity:0.5,
    color:'#111822'
}

export default function PricingList() {
    return (
        <>
            <Flex w='708px' m='auto' gap='20px' mb='21px'>
                    
                    {/* IPv4 Price Box */}
                    <VStack 
                        w='344px'
                        h='525px'
                        background= 'rgba(30, 30, 30, 0.01)'
                        border= '1px solid rgba(30, 30, 30, 0.1)'
                        border-radius= '5px'
                        p='26px 28px'
                        gap='10px'
                    >
                        <HStack w='full' gap='60px'>
                            <VStack alignItems={'flex-start'}>
                                <Box 
                                    background={'linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)'} 
                                    w='40px' 
                                    h='40px' 
                                    borderRadius={'8px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Image src={v4} alt='IPv4' />
                                </Box>
                                <Text style={headingStyle}>
                                    IPv4 Proxies
                                </Text>
                                <Text style={subHeadingStyle}>
                                    Static/Rotating
                                </Text>
                            </VStack>
                            <VStack w='full' alignItems={'flex-start'} justifyContent={'start'} gap='-5px'>
                                <Text mb='-10px'>FROM</Text>
                                <Text mb='-10px'>
                                    <Highlight query={'$4.75'} styles={{color:'#077BFF',fontSize:'20px', lineHeight:'24px', fontWeight:600}}>$4.75/day</Highlight>
                                </Text>
                                <Text my='-10px'>OR</Text>
                                <Text mb='-10px'>
                                    <Highlight query={'$116.75'} styles={{color:'#077BFF',fontSize:'20px', lineHeight:'24px', fontWeight:600}}>$116.75/mo</Highlight>
                                </Text>
                            </VStack>
                        </HStack>
                        <Box w='full' border='1px solid #d9d8d6' my='14px'></Box>
                        
                        <VStack alignItems={'flex-start'} w='full' pb='21px'>
                            <Text style={subHeadingStyle}>
                                Plan Incudes:
                            </Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />100 Threads</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Dedicated IP Pool</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Residential Proxy</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Unlimited Bandwidth</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Worldwide Locations</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />40 GBps</Text>
                        </VStack>
                        <Box w='full' border='1px solid #d9d8d6'></Box>
                        <Button 
                            w='full' 
                            h='47px' 
                            p='10px' 
                            borderRadius={'5px'} 
                            bgColor={'#077BFF'} 
                            color='white'
                        >
                            View Pricing 
                            <ArrowForwardIcon />
                        </Button>
                    </VStack>


                    {/* IPv6 Price Box */}
                    <VStack 
                        w='344px' 
                        h='580px'
                        background= 'rgba(22, 209, 19, 0.1)'
                        border= '1px solid #16D113'
                        border-radius= '5px'
                        p='26px 28px'
                        gap='10px'
                    >
                        <HStack w='full' gap='60px'>
                            <VStack alignItems={'flex-start'}>
                                <Box 
                                    background={'linear-gradient(135deg, #25CD08 0%, #09B32B 100%)'} 
                                    w='40px' 
                                    h='40px' 
                                    borderRadius={'8px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Image src={v6} alt='IPv4' />
                                </Box>
                                <Text style={headingStyle}>
                                    IPv6 Proxies
                                </Text>
                                <Text style={subHeadingStyle}>
                                    Static/Rotating
                                </Text>
                            </VStack>
                            <VStack w='full' alignItems={'flex-start'}>
                                <Text mb='-10px'>FROM</Text>
                                <Text mb='-10px'>
                                    <Highlight query={'$4.75'} styles={{color:'#16D113',fontSize:'20px', lineHeight:'24px', fontWeight:600}}>$4.75/day</Highlight>
                                </Text>
                                <Text my='-10px'>OR</Text>
                                <Text>
                                    <Highlight query={'$116.75'} styles={{color:'#16D113',fontSize:'20px', lineHeight:'24px', fontWeight:600}}>$116.75/mo</Highlight>
                                </Text>
                            </VStack>
                        </HStack>
                        <Box w='full' border='1px solid #d9d8d6'></Box>
                        
                        <VStack alignItems={'flex-start'} w='full' pb='5px'>
                            <Text style={subHeadingStyle}>
                                Plan Incudes:
                            </Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />100 Threads</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Dedicated IP Pool</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Residential Proxy</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Unlimited Bandwidth</Text>
                            <Text><CheckIcon color='#077BFF' mr='8px' />Worldwide Locations</Text>
                            <Text><CheckIcon color='#16D113' mr='8px' />Dedicated Subnets</Text>
                            <Text><CheckIcon color='#16D113' mr='8px' />1 Octillion IPS</Text>
                            <Text><CheckIcon color='#16D113' mr='8px' />Septiltion per Location</Text>
                        </VStack>
                        <Box w='full' border='1px solid #d9d8d6' ></Box>
                        <Button 
                            w='full' 
                            h='47px' 
                            p='10px' 
                            borderRadius={'5px'} 
                            bgColor={'#16D113'} 
                            color='white'
                        >
                            View Pricing 
                            <ArrowForwardIcon />
                        </Button>
                    </VStack>
            </Flex>
        </>
    )
};

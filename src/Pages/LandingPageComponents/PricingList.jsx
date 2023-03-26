import { Box, Button, Flex, HStack, Highlight, Image, Text, VStack } from "@chakra-ui/react";
import v4 from '../../Images/v4.svg';
import v6 from '../../Images/v6.svg';
import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";

const headingStyle = {
    fontWeight:'600',
    letterSpacing:'-0.02em',
    color:'#111822'
}

const subHeadingStyle = {
    letterSpacing:'-0.02em',
    opacity:0.5,
    color:'#111822'
}

export default function PricingList() {
    return (
        <>
            <Flex flexDir={{base:'column', xl:'row'}} w={{base:'206px', xl:'708px'}} m='auto' gap={'20px'} mb='21px'>
                    
                    {/* IPv4 Price Box */}
                    <VStack 
                        w={{base:'206px', xl:'344px'}}
                        h={{base:'370px' ,xl:'525px'}}
                        background= 'rgba(30, 30, 30, 0.01)'
                        border= '1px solid rgba(30, 30, 30, 0.1)'
                        border-radius= '5px'
                        p={{base:'15.5px 16.75px', xl:'26px 28px'}}
                        gap={{base:'5px',xl:'10px'}}
                    >
                        <HStack w='full' gap={{base:'40px', xl:'60px'}}>
                            <VStack alignItems={'flex-start'}>
                                <Box 
                                    background={'linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)'} 
                                    w={{base:'21.4px', xl:'40px'}} 
                                    h={{base:'21.4px', xl:'40px'}} 
                                    borderRadius={'8px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    p={{base:'4.3px', xl:'8px'}} 
                                >
                                    <Image src={v4} alt='IPv4' w={{base:'12.85px', xl:'24px'}} h={{base:'12.85px', xl:'24px'}} />
                                </Box>
                                <Text style={headingStyle} fontSize={{base:'12px', xl:'20px'}} lineHeight={{base:'14.3px', xl:'24px'}}>
                                    IPv4 Proxies
                                </Text>
                                <Text style={subHeadingStyle} fontSize={{base:'9.5px', xl:'16px'}} lineHeight={{base:'11.5px', xl:'19px'}}>
                                    Static/Rotating
                                </Text>
                            </VStack>
                            <VStack w='full' alignItems={'flex-start'} justifyContent={'start'} gap='-5px'>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>FROM</Text>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>
                                    <Highlight query={'$4.75'} styles={{color:'#077BFF', fontSize:{base:'12px', xl:'20px'}, lineHeight:'24px', fontWeight:600}}>$4.75/day</Highlight>
                                </Text>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>OR</Text>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>
                                    <Highlight query={'$116.75'} styles={{color:'#077BFF', fontSize:{base:'12px', xl:'20px'}, lineHeight:'24px', fontWeight:600}}>$116.75/mo</Highlight>
                                </Text>
                            </VStack>
                        </HStack>
                        <Box w='full' border='1px solid #d9d8d6' my='14px'></Box>
                        
                        <VStack alignItems={'flex-start'} w='full' pb='21px'>
                            <Text style={subHeadingStyle} fontSize={{base:'9.5px', xl:'16px'}}>
                                Plan Incudes:
                            </Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />100 Threads</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Dedicated IP Pool</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Residential Proxy</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Unlimited Bandwidth</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Worldwide Locations</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />40 GBps</Text>
                        </VStack>
                        <Box w='full' border='1px solid #d9d8d6'></Box>
                        <Button 
                            w='full' 
                            h={{base:'28px', xl:'47px'}} 
                            p='10px' 
                            borderRadius={'5px'} 
                            bgColor={'#077BFF'} 
                            color='white'
                            fontSize={{base:'10.7px', xl:'18px'}}
                        >
                            View Pricing 
                            <ArrowForwardIcon />
                        </Button>
                    </VStack>


                    {/* IPv6 Price Box */}
                    <VStack 
                        w={{base:'206px', xl:'344px'}}
                        h={{base:'400px' ,xl:'585px'}}
                        background= 'rgba(22, 209, 19, 0.1)'
                        border= '1px solid #16D113'
                        border-radius= '5px'
                        p={{base:'0px 16.75px', xl:'0px 28px'}}
                        gap={{base:'5px',xl:'10px'}}
                        alignItems={'flex-start'}
                    >
                        <Box
                            w={{base:'54.5px', xl:'91px'}}
                            h={{base:'14.35px', xl:'24px'}}
                            background='#16D113'
                            borderRadius='2px'
                            p={{base:'2.8px 6px', xl:'6px 10px'}}
                            gap={{base:'6px', xl:'10px'}}
                            fontSize={{base:'7px', xl:'12px'}}
                            lineHeight={{base:'8.75px', xl:'14px'}}
                            fontWeight={600}
                            letterSpacing={'-0.02em'}
                            color='white'
                            pos={'relative'}
                            top={{base:'-7px', xl:'-12px'}}
                            mb={{base:'-12px', xl:'-16px'}}
                        >
                            BEST SELLER
                        </Box>
                        <HStack w='full' gap={{base:'40px', xl:'60px'}}>
                            <VStack alignItems={'flex-start'}>
                                <Box 
                                    background={'linear-gradient(135deg, #25CD08 0%, #09B32B 100%)'} 
                                    w={{base:'21.4px', xl:'40px'}} 
                                    h={{base:'21.4px', xl:'40px'}} 
                                    borderRadius={'8px'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    p={{base:'4.3px', xl:'8px'}} 
                                >
                                    <Image src={v6} alt='IPv6' w={{base:'12.85px', xl:'24px'}} h={{base:'12.85px', xl:'24px'}} />
                                </Box>
                                <Text style={headingStyle} fontSize={{base:'12px', xl:'20px'}} lineHeight={{base:'14.3px', xl:'24px'}}>
                                    IPv6 Proxies
                                </Text>
                                <Text style={subHeadingStyle} fontSize={{base:'9.5px', xl:'16px'}} lineHeight={{base:'11.5px', xl:'19px'}}>
                                    Static/Rotating
                                </Text>
                            </VStack>
                            <VStack w='full' alignItems={'flex-start'}>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>FROM</Text>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>
                                    <Highlight query={'$4.75'} styles={{color:'#16D113', fontSize:{base:'12px', xl:'20px'}, lineHeight:'24px', fontWeight:600}}>$4.75/day</Highlight>
                                </Text>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>OR</Text>
                                <Text fontSize={{base:'7px', xl:'12px'}} lineHeight={{base:'1px', xl:'3px'}}>
                                    <Highlight query={'$116.75'} styles={{color:'#16D113', fontSize:{base:'12px', xl:'20px'}, lineHeight:'24px', fontWeight:600}}>$116.75/mo</Highlight>
                                </Text>
                            </VStack>
                        </HStack>
                        <Box w='full' border='1px solid #d9d8d6'></Box>
                        
                        <VStack alignItems={'flex-start'} w='full' pb='5px'>
                            <Text style={subHeadingStyle}  fontSize={{base:'9.5px', xl:'16px'}}>
                                Plan Incudes:
                            </Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />100 Threads</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Dedicated IP Pool</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Residential Proxy</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Unlimited Bandwidth</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#077BFF' mr='8px' />Worldwide Locations</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#16D113' mr='8px' />Dedicated Subnets</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#16D113' mr='8px' />1 Octillion IPS</Text>
                            <Text fontSize={{base:'9.5px', xl:'16px'}}><CheckIcon color='#16D113' mr='8px' />Septiltion per Location</Text>
                        </VStack>
                        <Box w='full' border='1px solid #d9d8d6' ></Box>
                        <Button 
                            w='full' 
                            h={{base:'28px', xl:'47px'}} 
                            p='10px' 
                            borderRadius={'5px'} 
                            bgColor={'#16D113'} 
                            color='white'
                            fontSize={{base:'10.7px', xl:'18px'}}
                        >
                            View Pricing 
                            <ArrowForwardIcon />
                        </Button>
                    </VStack>
            </Flex>
        </>
    )
};

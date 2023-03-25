import { Box, Flex, HStack, Highlight, Image, Text, VStack } from "@chakra-ui/react";
import v4 from '../../Images/v4.svg';

export default function PricingList() {
    return (
        <>
            <Flex mx='606px'>
                    <VStack 
                        w='344px' 
                        background= 'rgba(30, 30, 30, 0.01)'
                        border= '1px solid rgba(30, 30, 30, 0.1)'
                        border-radius= '5px'
                        transform= 'matrix(1, 0, 0, 1, 0, 0)'
                        p='26px 28px'
                    >
                        <HStack justifyContent={'space-between'} w='full' gap='60px'>
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
                                <Text
                                    fontSize={'20px'}
                                >IPv4 Proxies</Text>
                                <Text>Static/Rotating</Text>
                            </VStack>
                            <VStack w='full' alignItems={'flex-start'}>
                                <Text>FROM</Text>
                                <Text>
                                    <Highlight query={'$4.75'} styles={{color:'#077BFF',fontSize:'20px', lineHeight:'24px', fontWeight:600}}>$4.75/day</Highlight>
                                </Text>
                                <Text>OR</Text>
                                <Text>
                                    <Highlight query={'$116.75'} styles={{color:'#077BFF',fontSize:'20px', lineHeight:'24px', fontWeight:600}}>$116.750/mo</Highlight>
                                </Text>
                            </VStack>
                        </HStack>
                        <Box w='full' border='1px solid #d9d8d6' my='14px'></Box>
                    </VStack>
                    <Box></Box>
            </Flex>
        </>
    )
};

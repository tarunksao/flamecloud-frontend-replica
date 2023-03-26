import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import crown from '../../Images/crown.svg';
import { CheckIcon } from "@chakra-ui/icons";

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

export default function Resell() {
    return (
        <>
            <Box
                m='auto'
                mb='180px'
                w={{base:'206px', xl:'708px'}} 
                boxSizing= 'border-box' 
                background= 'rgba(30, 30, 30, 0.01)'
                border= '1px solid rgba(30, 30, 30, 0.1)'
                borderRadius= '5px'
            >
                <HStack p='21.5px 28px' gap='34px' alignItems={'flex-start'}>
                    <VStack alignItems={'flex-start'} gap='8px'>
                        <Box
                            w='40px'
                            h='40px'
                            background= 'linear-gradient(135deg, #FFDE2E 0%, #E38B08 100%)'
                            borderRadius={'8px'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Image src={crown} alt='crown.svg' w='24px' h='24px' />
                        </Box>
                        <Text style={headingStyle}>Become a Reseller</Text>
                        <Text style={subHeadingStyle}>200+ Happy Resellers</Text>
                    </VStack>
                    <VStack alignItems={'flex-start'}>
                        <Text style={subHeadingStyle}>Plan Includes:</Text>
                        <HStack alignItems={'flex-start'} gap='53px'>
                            <VStack alignItems={'flex-start'} justifyContent={'start'}>
                                <Text><CheckIcon color='#077BFF' mr='8px' />Whitelabel IP Pool</Text>
                                <Text><CheckIcon color='#077BFF' mr='8px' />Whitelabel Subnets</Text>
                                <Text><CheckIcon color='#077BFF' mr='8px' />Residential Proxy</Text>
                            </VStack>
                            <VStack alignItems={'flex-start'} justifyContent={'start'}>
                                <Text><CheckIcon color='#077BFF' mr='8px' />Custom Bandwidth</Text>
                                <Text><CheckIcon color='#077BFF' mr='8px' />Proxy Support</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </HStack>
            </Box>
        </>
    )
};

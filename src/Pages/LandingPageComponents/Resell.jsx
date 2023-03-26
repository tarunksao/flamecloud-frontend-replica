import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import crown from '../../Images/crown.svg';
import { CheckIcon } from "@chakra-ui/icons";

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

export default function Resell() {
    return (
        <>
            <Box
                m='auto'
                mb={{base:'70.5px', xl:'180px'}}
                w={{base:'315px', xl:'708px'}} 
                boxSizing= 'border-box' 
                background= 'rgba(30, 30, 30, 0.01)'
                border= '1px solid rgba(30, 30, 30, 0.1)'
                borderRadius= '5px'
            >
                <HStack justifyContent={'start'} p={{base:'8px 12px', xl:'21.5px 28px'}} gap={{base:'17px', xl:'34px'}} alignItems={'flex-start'}>
                    <VStack alignItems={'flex-start'} justifyContent={'start'} gap={{base:'0px', xl:'8px'}}>
                        <Box
                            w={{base:'21.4px', xl:'40px'}} 
                            h={{base:'21.4px', xl:'40px'}}
                            background= 'linear-gradient(135deg, #FFDE2E 0%, #E38B08 100%)'
                            borderRadius={'8px'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            p={{base:'4.3px', xl:'8px'}} 
                        >
                            <Image src={crown} alt='crown.svg' w={{base:'12.85px', xl:'24px'}} h={{base:'12.85px', xl:'24px'}} />
                        </Box>
                        <Text style={headingStyle} fontSize={{base:'10px', xl:'20px'}} lineHeight={{base:'12px', xl:'24px'}}>Become a Reseller</Text>
                        <Text style={subHeadingStyle} fontSize={{base:'7px', xl:'16px'}} lineHeight={{base:'10px', xl:'19px'}}>200+ Happy Resellers</Text>
                    </VStack>
                    <VStack alignItems={'flex-start'} justifyContent={'start'}>
                        <Text style={subHeadingStyle} fontSize={{base:'7px', xl:'16px'}}>Plan Includes:</Text>
                        <HStack alignItems={'flex-start'} justifyContent={'start'} gap={{base:'20px', xl:'53px'}}>
                            <VStack alignItems={'flex-start'} justifyContent={'start'}>
                                <Text fontSize={{base:'7px', xl:'16px'}} lineHeight={{base:'10px', xl:'19px'}}><CheckIcon color='#077BFF' mr='8px' />Whitelabel IP Pool</Text>
                                <Text fontSize={{base:'7px', xl:'16px'}} lineHeight={{base:'10px', xl:'19px'}}><CheckIcon color='#077BFF' mr='8px' />Whitelabel Subnets</Text>
                                <Text fontSize={{base:'7px', xl:'16px'}} lineHeight={{base:'10px', xl:'19px'}}><CheckIcon color='#077BFF' mr='8px' />Residential Proxy</Text>
                            </VStack>
                            <VStack alignItems={'flex-start'} justifyContent={'start'}>
                                <Text fontSize={{base:'7px', xl:'16px'}} lineHeight={{base:'10px', xl:'19px'}}><CheckIcon color='#077BFF' mr='8px' />Custom Bandwidth</Text>
                                <Text fontSize={{base:'7px', xl:'16px'}} lineHeight={{base:'10px', xl:'19px'}}><CheckIcon color='#077BFF' mr='8px' />Proxy Support</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </HStack>
            </Box>
        </>
    )
};

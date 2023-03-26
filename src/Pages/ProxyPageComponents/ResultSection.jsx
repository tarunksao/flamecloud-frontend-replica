import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const bodyStyle = {
    fontWeight:500,
    letterSpacing:'-0.02em'
}

const textStyle = {
    fontWeight:500,
    letterSpacing:'-0.02em'
}

export default function ResultSection() {
    return (
        <Box m={{base:'12px auto',xl:'44px auto 99px auto'}} w={{base:'315px',xl:'708px'}}>
            <Text style={bodyStyle} color='#077BFF' fontSize={{base:'14px',xl:'20px'}} lineHeight={{base:'16.8px',xl:' 24px'}}>Your Results</Text>
            <Box
                background= 'rgba(217, 216, 214, 0.05)'
                border= '1px solid rgba(0, 0, 0, 0.25)'
                borderRadius= '5px'
                mt='17px'
                mb='40px'
            >
                <VStack w={{base:'315px',xl:'708px'}}>
                    <HStack
                        background= 'rgba(0, 0, 0, 0.1)'
                        border= '1px solid rgba(0, 0, 0, 0.25)'
                        fontSize={{base:'10px',xl:'14px'}}
                        lineHeight={{base:'12px',xl:'17px'}}
                        opacity={0.6}
                        letterSpacing={'-0.02em'}
                        fontWeight={600}
                        color='#111822'
                        p={{base:'8.5px 13px', xl:'12px 19px' }}
                        w='full'
                        gap={{base:'10px', xl:'70px'}}
                    >
                        <Text w={{base:'60px',xl:'100px'}}>IP</Text>
                        <Text w={{base:'60px',xl:'100px'}}>PROXY</Text>
                        <Text w={{base:'60px',xl:'100px'}}>CITY</Text>
                        <Text w={{base:'60px',xl:'100px'}}>COUNTRY</Text>
                    </HStack>
                    <HStack
                        fontSize={{base:'10px',xl:'14px'}}
                        lineHeight={{base:'12px',xl:'17px'}}
                        letterSpacing={'-0.02em'}
                        fontWeight={500}
                        color='#111822'
                        p={{base:'8.5px 13px', xl:'12px 19px'}}
                        w='full'
                        gap={{base:'10px', xl:'70px'}}
                    >
                            <Text w={{base:'60px',xl:'100px'}}>8.8.8.8</Text>
                            <Text w={{base:'60px',xl:'100px'}}>192.168.0.0</Text>
                            <Text w={{base:'60px',xl:'100px'}}>New York</Text>
                            <Text w={{base:'60px',xl:'100px'}}>US</Text>
                    </HStack>
                    <HStack
                        fontSize={{base:'10px',xl:'14px'}}
                        lineHeight={{base:'12px',xl:'17px'}}
                        letterSpacing={'-0.02em'}
                        fontWeight={500}
                        color='#111822'
                        p={{base:'8.5px 13px', xl:'12px 19px'}}
                        w='full'
                        gap={{base:'10px', xl:'70px'}}
                    >
                            <Text w={{base:'60px',xl:'100px'}}>1.1.1.1</Text>
                            <Text w={{base:'60px',xl:'100px'}}>192.168.0.0</Text>
                            <Text w={{base:'60px',xl:'100px'}}>Los Angeles</Text>
                            <Text w={{base:'60px',xl:'100px'}}>US</Text>
                    </HStack>
                    <HStack
                        fontSize={{base:'10px',xl:'14px'}}
                        lineHeight={{base:'12px',xl:'17px'}}
                        letterSpacing={'-0.02em'}
                        fontWeight={500}
                        color='#111822'
                        p={{base:'8.5px 13px', xl:'12px 19px'}}
                        w='full'
                        gap={{base:'10px', xl:'70px'}}
                    >
                            <Text w={{base:'60px',xl:'100px'}}>192.168.1.1</Text>
                            <Text w={{base:'60px',xl:'100px'}}>192.168.0.0</Text>
                            <Text w={{base:'60px',xl:'100px'}}>San Diego</Text>
                            <Text w={{base:'60px',xl:'100px'}}>US</Text>
                    </HStack>
                </VStack>
            </Box>
            <HStack justifyContent={'center'} gap={{base:'10.5px',xl:'15px'}}>
                <Text style={textStyle} fontSize={{base:'12.5px',xl:'18px'}} lineHeight={{base:'15px',xl:' 22px'}} color='#111822'>Checkout our IPv6 Compatibility Checker</Text>
                <Text style={textStyle} fontSize={{base:'12.5px',xl:'18px'}} lineHeight={{base:'15px',xl:' 22px'}} color='#077BFF'>View Tool <ArrowForwardIcon w='15px' mb='5px' /></Text>
            </HStack>
        </Box>
    )
};

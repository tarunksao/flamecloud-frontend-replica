import { Box, HStack, Image, Text } from "@chakra-ui/react";

const headingStyle = {
    fontWeight:600,
    
    color:'#111822',
    lineHeight:{base:'48px',lg:'19px'},
    letterSpacing:'-0.02em',
}

export default function TrustPilotRating() {
    return (
        <>
            <Box 
                background= 'rgba(0, 182, 122, 0.1)' 
                borderRadius={{base:'7px', xl:'10px'}} 
                w={{base:'161px', xl:'222px'}} 
                h={{base:'65px', xl:'90px'}} 
                py={{base:'11.5px', xl:'16px'}} 
                m={{base:'16px auto', xl:'22px auto'}}
            >
                <HStack mx='35.5px'>
                    <Box bgColor={'#00B67A'} w={{base:'20.5px', xl:'28.31px'}} h={{base:'15px', xl:'28.31px'}} p={{base:'3.5px 1.5px', xl:'4.78px 4.25px'}}>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w={{base:'20.5px', xl:'28.31px'}} h={{base:'15px', xl:'28.31px'}}  p={{base:'3.5px 1.5px', xl:'4.78px 4.25px'}}>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w={{base:'20.5px', xl:'28.31px'}} h={{base:'15px', xl:'28.31px'}}  p={{base:'3.5px 1.5px', xl:'4.78px 4.25px'}}>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w={{base:'20.5px', xl:'28.31px'}} h={{base:'15px', xl:'28.31px'}}  p={{base:'3.5px 1.5px', xl:'4.78px 4.25px'}}>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w={{base:'20.5px', xl:'28.31px'}} h={{base:'15px', xl:'28.31px'}}  p={{base:'3.5px 1.5px', xl:'4.78px 4.25px'}}>
                        <Image src={'Star.svg'} alt="star" zIndex={10} pos={'relative'} />
                        <Box w={{base:'5px', xl:'12px'}} h={{base:'15px', xl:'28.31px'}} bgColor={'#dcdce6'} pos='relative' top={{base:'-11.6px', xl:'-19.4px'}} left={{base:'4.9px', xl:'8px'}}></Box>
                    </Box>
                </HStack>
                <HStack mx={{base:'9px', xl:'16px'}} gap='0' mt='9px'>
                    <Text style={headingStyle} fontSize={{base:'11.5px', lg:'16px'}}>
                        Rated 4.5 on 
                    </Text>
                    <Image src={'greenRatingStar.svg'} alt="star" w={{base:'16.8px', xl:'23.23px'}} />
                    <Text style={headingStyle} fontSize={{base:'11.5px', lg:'16px'}} pt={{base:'1px', xl:'5px'}}>
                        Trustpilot
                    </Text>
                </HStack>
                <Image src={'greenStarMark.svg'} alt='mark on green star' zIndex={2} pos='relative' top={{base:'-9.01px', xl:'-12.1px'}} left={{base:'85.5px', xl:'116.8px'}} />
            </Box>
            <Box w={{base:'315px', xl:'588px'}} border={'1px solid #d9d8d6'} m='36.36px auto'></Box>

        </>
    )
};

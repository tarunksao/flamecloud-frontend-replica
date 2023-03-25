import { Box, HStack, Image, Text } from "@chakra-ui/react";

const headingStyle = {
    fontWeight:600,
    fontSize:{base:'40px', lg:'16px'},
    color:'#111822',
    lineHeight:{base:'48px',lg:'19px'},
    letterSpacing:'-0.02em',
    opacity:'0.5'
}

export default function TrustPilotRating() {
    return (
        <>
            <Box background= 'rgba(0, 182, 122, 0.1)' borderRadius='10px' w='222px' h='90px' py='16px' m='22px auto'>
                <HStack mx='35.5px'>
                    <Box bgColor={'#00B67A'} w='28.31px' h='28.31px' px='4.25px' py='4.78px'>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w='28.31px' h='28.31px' px='4.25px' py='4.78px'>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w='28.31px' h='28.31px' px='4.25px' py='4.78px'>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w='28.31px' h='28.31px' px='4.25px' py='4.78px'>
                        <Image src={'Star.svg'} alt="star" />
                    </Box>
                    <Box bgColor={'#00B67A'} w='28.31px' h='28.31px' px='4.25px' py='4.78px'>
                        <Image src={'Star.svg'} alt="star" zIndex={10} pos={'relative'} />
                        <Box w='12px' h='28.31px' bgColor={'#dcdce6'} pos='relative' top='-19.4px' left='8px'></Box>
                    </Box>
                </HStack>
                <HStack mx='16px' gap='0' mt='9px'>
                    <Text style={{headingStyle, opacity:1, fontSize:'14.5px'}}>
                        Rated 4.5 on 
                    </Text>
                    <Image src={'greenRatingStar.svg'} alt="star" w='23.23px' />
                    <Text style={{headingStyle, opacity:1, fontSize:'14.5px', paddingTop:'5px'}}>
                        Trustpilot
                    </Text>
                </HStack>
                <Image src={'greenStarMark.svg'} alt='mark on green star' zIndex={2} pos='relative' top='-12.1px' left='116.8px' />
            </Box>
            <Box w='588px' border={'1px solid #d9d8d6'} m='36.36px auto'></Box>

        </>
    )
};

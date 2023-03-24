import { Box, Button, HStack, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';

const headingStyle = {
    fontWeight:600,
    fontSize:'16px',
    color:'#111822',
    lineHeight:'19px',
    letterSpacing:'-0.02em',
    opacity:'0.5'
}

const headingStyle2 = {
    fontWeight:600,
    fontSize:'56px',
    color:'#111822',
    lineHeight:'67px',
    letterSpacing:'-0.02em',
    margin:'3px auto',
    width:'824px'
}

const bodyStyle = {
    fontWeight:500,
    fontSize:'22px',
    color:'#111822',
    lineHeight:'26px',
    letterSpacing:'-0.02em',
    opacity:'0.5',
    width:'509px',
    margin:'17px auto',
    textAlign:'center'
}

export default function LandingPage() {
    return (
        <Box pt={'95px'} textAlign={'center'}>
            <Text style={headingStyle} textAlign={'center'}>WELCOME TO CREATIVE PROXIES</Text>
            <Heading style={headingStyle2}>We are the <Highlight query='Fastest' styles={{color:'#077BFF'}}>Fastest</Highlight> and the <Highlight query='Most' styles={{color:'#16D113'}}>Most</Highlight> <Highlight query='Reliable' styles={{color:'#16D113'}}>Reliable</Highlight> Proxy Service since 2020</Heading>
            <Image src={'blueStar.svg'} pos={'absolute'} top='192px' left='800px' />
            <Image src={'greenStar.svg'} pos={'absolute'} top='265px' left='523px' />
            <Text style={bodyStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Button 
                w='222px' 
                h='47px' 
                p='10px' 
                borderRadius={'10px'} 
                bgColor={'#077BFF'} 
                color='white'
            >
                Get Started 
                <ArrowForwardIcon />
            </Button>
            
            {/* Trustpilot Rating Box */}
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
                        <Box w='12px' h='28.31px' bgColor={'#dcdce6'} pos='relative' top='-19px' left='8px'></Box>
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

        </Box>
    )
};

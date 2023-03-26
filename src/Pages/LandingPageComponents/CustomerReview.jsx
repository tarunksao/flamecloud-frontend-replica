import { Box, Flex, HStack, Highlight, Image, Text, VStack } from "@chakra-ui/react";
import Star1 from '../../Images/Star1.svg'
import Ellipse1 from '../../Images/Ellipse1.svg'

const bodyStyle = {
    fontWeight:500,
    color:'#111822',
    letterSpacing:'-0.02em',
    opacity:'0.5',
}

export default function CustomerReview() {
    return (
        <>
            <Text fontSize={{base:'19.5px',xl:'36px'}} fontWeight={600} lineHeight={{base:'25px',xl:'43px'}} textAlign={'center'}>
                <Highlight query={'Love'} styles={{color:'#16D113'}}>Customers Love our Proxies</Highlight>
            </Text>
            <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}} w={{base:'260px', xl:'465px'}} m='10px auto 34px auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Flex direction={{base:'column', xl:'row'}} gap={{base:'10px',xl:'20px'}} mx={{base:'77.5px', xl:'auto'}} mb={{base:'82px', xl:'250px'}} w={{base:'315px', xl:'1152px'}}>
                <VStack 
                    w={{base:'222.6px', xl:'386px'}} 
                    alignItems={'flex-start'} 
                    p={{base:'16.7px 14.4px', xl:'29px 25px'}} 
                    background= 'rgba(30, 30, 30, 0.01)'
                    border= '1px solid rgba(22, 209, 19, 0.5)'
                    borderRadius= "5px"
                >
                    <HStack>
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                    </HStack>
                    <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}} textAlign='left'>
                        “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                    </Text>
                    <HStack justifyContent={'start'}>
                        <Box>
                            <Image src={Ellipse1} alt='Ellipse1.svg' w={{base:'27.6px', xl:'48px'}} h={{base:'27.6px', xl:'48px'}} />
                        </Box>
                        <Box>
                            <Text fontSize={{base:'10.3px', xl:'18px'}} fontWeight={600} lineHeight={{base:'12.6px', xl:'30px'}} textAlign='left'>ECHO DZNS</Text>
                            <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}}>Web Designer, CreativeProxies</Text>
                        </Box>
                    </HStack>
                </VStack>
                <VStack 
                    w={{base:'222.6px', xl:'386px'}} 
                    alignItems={'flex-start'} 
                    p={{base:'16.7px 14.4px', xl:'29px 25px'}} 
                    background= 'rgba(30, 30, 30, 0.01)'
                    border= '1px solid rgba(22, 209, 19, 0.5)'
                    borderRadius= "5px"
                >
                    <HStack>
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                    </HStack>
                    <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}} textAlign='left'>
                        “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                    </Text>
                    <HStack justifyContent={'start'}>
                        <Box>
                            <Image src={Ellipse1} alt='Ellipse1.svg' w={{base:'27.6px', xl:'48px'}} h={{base:'27.6px', xl:'48px'}} />
                        </Box>
                        <Box>
                            <Text fontSize={{base:'10.3px', xl:'18px'}} fontWeight={600} lineHeight={{base:'12.6px', xl:'30px'}} textAlign='left'>John Doe</Text>
                            <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}}>Random Text, ABC</Text>
                        </Box>
                    </HStack>
                </VStack>
                <VStack 
                    w={{base:'222.6px', xl:'386px'}} 
                    alignItems={'flex-start'} 
                    p={{base:'16.7px 14.4px', xl:'29px 25px'}} 
                    background= 'rgba(30, 30, 30, 0.01)'
                    border= '1px solid rgba(22, 209, 19, 0.5)'
                    borderRadius= "5px"
                >
                    <HStack>
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                        <Image src={Star1} alt='Star1.svg' />
                    </HStack>
                    <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}} textAlign='left'>
                        “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                    </Text>
                    <HStack justifyContent={'start'}>
                        <Box>
                            <Image src={Ellipse1} alt='Ellipse1.svg' w={{base:'27.6px', xl:'48px'}} h={{base:'27.6px', xl:'48px'}} />
                        </Box>
                        <Box>
                            <Text fontSize={{base:'10.3px', xl:'18px'}} fontWeight={600} lineHeight={{base:'12.6px', xl:'30px'}} textAlign='left'>John Doe</Text>
                            <Text style={bodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'12.4px', xl:'22px'}}>Random Text, ABC</Text>
                        </Box>
                    </HStack>
                </VStack>
            </Flex>
        </>
    )
};

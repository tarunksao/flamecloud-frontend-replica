import { Box, Flex, HStack, Highlight, Image, Text, VStack } from "@chakra-ui/react";
import Star1 from '../../Images/Star1.svg'
import Ellipse1 from '../../Images/Ellipse1.svg'

const bodyStyle = {
    fontWeight:500,
    fontSize:'16px',
    color:'#111822',
    lineHeight:'12px',
    letterSpacing:'-0.02em',
    opacity:'0.5',
    textAlign:'center'
}

export default function CustomerReview() {
    return (
        <>
            <Text fontSize={'36px'} fontWeight={600} lineHeight={'43px'} textAlign={'center'}>
                <Highlight query={'Love'} styles={{color:'#16D113'}}>Customers Love our Proxies</Highlight>
            </Text>
            <Text style={{bodyStyle, lineHeight:'22px',opacity:0.5}} w='465px' m='10px auto 34px auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Flex gap='14px' m='auto' mx='192px' mb='250px'>
                <VStack w='364px' alignItems={'flex-start'} p='29px 25px' 
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
                    <Text style={{bodyStyle, lineHeight:'22px'}} textAlign='left'>
                        “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                    </Text>
                    <HStack justifyContent={'start'}>
                        <Box>
                            <Image src={Ellipse1} alt='Ellipse1.svg' />
                        </Box>
                        <Box>
                            <Text fontSize={'18px'} fontWeight={600} lineHeight={'30px'} textAlign='left'>ECHO DZNS</Text>
                            <Text style={bodyStyle}>Web Designer, CreativeProxies</Text>
                        </Box>
                    </HStack>
                </VStack>
                <VStack w='364px' alignItems={'flex-start'} p='29px 25px' 
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
                    <Text style={{bodyStyle, lineHeight:'22px'}} textAlign='left'>
                        “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                    </Text>
                    <HStack justifyContent={'start'}>
                        <Box>
                            <Image src={Ellipse1} alt='Ellipse1.svg' />
                        </Box>
                        <Box>
                            <Text fontSize={'18px'} fontWeight={600} lineHeight={'30px'} textAlign='left'>John Doe</Text>
                            <Text style={bodyStyle}>Random Text, ABC</Text>
                        </Box>
                    </HStack>
                </VStack>
                <VStack w='364px' alignItems={'flex-start'} p='29px 25px' 
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
                    <Text style={{bodyStyle, lineHeight:'22px'}} textAlign='left'>
                        “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                    </Text>
                    <HStack justifyContent={'start'}>
                        <Box>
                            <Image src={Ellipse1} alt='Ellipse1.svg' />
                        </Box>
                        <Box>
                            <Text fontSize={'18px'} fontWeight={600} lineHeight={'30px'} textAlign='left'>John Doe</Text>
                            <Text style={bodyStyle}>Random Text, ABC</Text>
                        </Box>
                    </HStack>
                </VStack>
            </Flex>
        </>
    )
};

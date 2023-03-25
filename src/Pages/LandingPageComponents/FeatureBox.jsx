import { Box, Heading, Highlight, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { featureBox } from "../../Data/data";

const featureHead = {
    fontWeight:600,
    letterSpacing:'-0.02em',
}

const featureText = {
    fontWeight:400,
    fontSize:{base:'21px',lg:'14px'},
    lineHeight:{base:'26px',lg:'17px'},
    letterSpacing:'-0.02em',
    opacity:0.5
}

export default function FeatureBox() {
    return (
        <>
            <Box w='full' bgColor={'#0566D4'} p={{base:'166px 90px',lg:'115px 192px'}} mb="177px">
                <Heading style={{featureHead,fontSize:{base:'55px',lg:'36px'}}} color='#ffffff'>
                    Why we are the Best Proxy Providers
                </Heading>
                <Text style={{featureText, fontSize:{base:'27.5px',lg:'18px'}, opacity:0.5}} color='#ffffff' m='10px auto 30px auto' w='465px'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
                </Text>
                <SimpleGrid columns={{base:2, lg:4}} rowGap={'27px'} columnGap={'16px'} w='1148px'>
                    {
                        featureBox?.map((el, i)=> (
                            <VStack 
                                border={'1px solid rgba(255, 255, 255, 0.25)'} 
                                p='22px 14px' 
                                borderRadius={'5px'}
                                w='245px'
                                h='160px'
                                alignItems={'flex-start'}
                            >
                                <Box w='24px' h='24px'>
                                    <Image src={el.image} alt={el.image} />
                                </Box>
                                <Heading style={{featureHead,fontSize:{base:'30px',xl:'20px'}}} color='#ffffff'>{el.heading}</Heading>
                                <Text style={featureText} textAlign={'left'} color='#ffffff'>{el.text}</Text>
                            </VStack>
                        ))
                    }
                </SimpleGrid>
            </Box>
            <Text fontSize={'36px'} fontWeight={600}>
                <Highlight query={'Deliver!'} styles={{color:'#077BFF'}}>You choose, we Deliver!</Highlight>
            </Text>
            <Text style={{featureText, fontSize:'18px', opacity:0.5}} color='#111822' w='465px' m='auto' mb='99px' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
            </Text>

        </>
    )
};

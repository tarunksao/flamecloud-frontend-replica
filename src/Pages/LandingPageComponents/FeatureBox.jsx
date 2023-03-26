import { Box, Heading, Highlight, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { featureBox } from "../../Data/data";

const featureHead = {
    fontWeight:600,
    letterSpacing:'-0.02em',
}

const featureText = {
    fontWeight:400,
    letterSpacing:'-0.02em',
    opacity:0.5
}

export default function FeatureBox() {
    return (
        <>
            <Box w={'full'} bgColor={'#0566D4'} p={{base:'58px 31.5px', xl:'115px 192px'}} mb={{base:'70px', xl:"177px"}} >
                <Heading style={featureHead} fontSize={{base:'19.5px',xl:'36px'}} color='#ffffff'>
                    Why we are the Best Proxy Providers
                </Heading>
                <Text style={{featureText, opacity:0.5}} fontSize={{base:'9.6px',xl:'18px'}} color='#ffffff' m='10px auto 30px auto' w={{base:'260px', xl:'465px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
                </Text>
                <SimpleGrid columns={{base:2, lg:4}} rowGap={{base:'16.5px', xl:'27px'}} columnGap={{base:'8.5px', xl:'16px'}} w={{base:'315px', xl:'1148px'}}>
                    {
                        featureBox?.map((el, i)=> (
                            <VStack 
                                border={'1px solid rgba(255, 255, 255, 0.25)'} 
                                p={{base:'12.3px 13.4px', xl:'22px 14px'}} 
                                borderRadius={'5px'}
                                w={{base:'153px', xl:'275px'}}
                                h={{base:'85.7px', xl:'160px'}}
                                alignItems={'flex-start'}
                            >
                                <Box w={{base:'12.8px', xl:'24px'}} h={{base:'12.8px', xl:'24px'}}>
                                    <Image src={el.image} alt={el.image} />
                                </Box>
                                <Heading style={featureHead} fontSize={{base:'10.5px',xl:'20px'}} color='#ffffff'>{el.heading}</Heading>
                                <Text style={featureText} fontSize={{base:'7.5px', xl:'14px'}} lineHeight={{base:'9px', xl:'17px'}} textAlign={'left'} color='#ffffff'>{el.text}</Text>
                            </VStack>
                        ))
                    }
                </SimpleGrid>
            </Box>
            <Text fontSize={{base:'23.3px', xl:'36px'}} fontWeight={600}>
                <Highlight query={'Deliver!'} styles={{color:'#077BFF'}}>You choose, we Deliver!</Highlight>
            </Text>
            <Text style={featureText} fontSize={{base:'9.6px',xl:'18px'}} color='#111822' w={{base:'260px', xl:'465px'}} m='auto' mb={{base:'23.4px', xl:'99px'}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
            </Text>

        </>
    )
};

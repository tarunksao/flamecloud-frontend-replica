import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { servicesBox } from "../../Data/data";

export default function ServiceBox() {
    return (
        <>
            <SimpleGrid w={{base:'315px'}} columns={{base:2, lg:4}} gap={{base:'8.5px', xl:'16px'}} mb='139px' mx={'auto'} px={{base:'0px', xl:'10px'}}>
                {
                    servicesBox?.map((el, i) => (
                        <HStack 
                            key={i} 
                            box-sizing= 'border-box'
                            width={{base:'153px', xl:'272px'}}
                            height= {{base:'51px', xl:'95px'}}
                            borderRadius= '5px'
                            bgColor={el.bgColor}
                            border={el.border}
                            p={{base:'14.5px 18.7px', xl:'26px 32px'}}
                        >
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} background={el.background} p={{base:'4.3px', xl:'8px'}} w={{base:'21.4px', xl:'40px'}} h={{base:'21.4px', xl:'40px'}} borderRadius={'8px'}>
                                <Image src={el.image} alt={el.image} w={{base:'12.85px', xl:'24px'}} h={{base:'12.85px', xl:'24px'}} />
                            </Box>
                            <Text textAlign={'left'} w={{base:'79.5px', xl:'137px'}} fontSize={{base:'9px', xl:'18px'}}>
                                {el.text}
                            </Text>
                        </HStack>
                    ) )
                }
            </SimpleGrid>
        </>
    )
};

import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { servicesBox } from "../../Data/data";

export default function ServiceBox() {
    return (
        <>
            <SimpleGrid columns={{base:2, lg:4}} gap='16px' mb='139px' mx={{base:'90px',lg:'192px'}}>
                {
                    servicesBox?.map((el, i) => (
                        <HStack 
                            key={i} 
                            box-sizing= 'border-box'
                            width='254px'
                            height= '95px'
                            borderRadius= '5px'
                            bgColor={el.bgColor}
                            border={el.border}
                            p='26px 32px'
                        >
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} background={el.background} p='8px' w='40px' h='40px' borderRadius={'8px'}>
                                <Image src={el.image} alt={el.image} w='24px' h='24px' />
                            </Box>
                            <Text textAlign={'left'} w='137px'>
                                {el.text}
                            </Text>
                        </HStack>
                    ) )
                }
            </SimpleGrid>
        </>
    )
};

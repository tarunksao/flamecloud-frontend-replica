import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Highlight, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { blogBox } from "../../Data/data";

const bodyStyle = {
    fontWeight:500,
    fontSize:'18px',
    lineHeight:'22px',
    letterSpacing:'-0.02em',
    textAlign:'center'
}

const blogHeadingStyle = {
    fontWeight:500,
    fontSize:'20px',
    lineHeight:'24px',
    letterSpacing:'-0.02em',
}

const blogBodyStyle = {
    fontWeight:400,
    fontSize:'16px',
    lineHeight:'22px',
    letterSpacing:'-0.02em',
    opacity:0.5
}

export default function Blogs() {
    return (
        <Box
            w='1148px'
            background= 'linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)'
            border= '1px solid rgba(30, 30, 30, 0.1)'
            borderRadius= '5px'
            mb='120px'
            mx='auto'
            pt='65px'
        >
            <Text fontSize={'36px'} fontWeight={600} lineHeight={'43px'} textAlign={'center'}>
                <Highlight query={'Exclusive'} styles={{color:'#077BFF'}}>Read our Exclusive Blog</Highlight>
            </Text>
            <Text style={bodyStyle} color='#111822' opacity={0.5} w='465px' m='10px auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Text style={bodyStyle} color='#077BFF'>Read All Blogs <ArrowForwardIcon w='15px' /></Text>
            <SimpleGrid columns={{base:2, xl:3}} p='40px' columnGap='25px' rowGap={'38px'}>
                {
                    blogBox?.map((el, i) => (
                        <VStack key={i} alignItems={'flex-start'}>
                            <Box
                                w='340px'
                                h='221px'
                                background='rgba(7, 123, 255, 0.1)'
                                border='1px solid rgba(7, 123, 255, 0.5)'
                                borderRadius='5px'
                                ></Box>
                            <Text style={blogHeadingStyle}>{el.title}</Text>
                            <Text style={blogBodyStyle}>{el.content}</Text>
                        </VStack>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
};

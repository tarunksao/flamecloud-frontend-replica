import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Highlight, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { blogBox } from "../../Data/data";

const bodyStyle = {
    fontWeight:500,
    letterSpacing:'-0.02em',
    textAlign:'center'
}

const blogHeadingStyle = {
    fontWeight:500,
    letterSpacing:'-0.02em',
}

const blogBodyStyle = {
    fontWeight:400,
    letterSpacing:'-0.02em',
    opacity:0.5
}

export default function Blogs() {
    return (
        <Box
            w={{base:'full', xl:'1152px'}}
            background= 'linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)'
            border= '1px solid rgba(30, 30, 30, 0.1)'
            borderRadius= '5px'
            mb={{base:'50.4px', xl:'120px'}}
            mx='auto'
            pt={{base:'22.75px', xl:'65px'}}
        >
            <Text fontSize={{base:'19.5px',xl:'36px'}} fontWeight={600} lineHeight={{base:'25px',xl:'43px'}} textAlign={'center'}>
                <Highlight query={'Exclusive'} styles={{color:'#077BFF'}}>Read our Exclusive Blog</Highlight>
            </Text>
            <Text style={bodyStyle} fontSize={{base:'9.6px',xl:'18px'}} lineHeight={{base:'12.4px', xl:'22px'}} color='#111822' opacity={0.5} w={{base:'238px', xl:'465px'}} m='10px auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Text style={bodyStyle} fontSize={{base:'9.6px',xl:'18px'}} lineHeight={{base:'12.4px', xl:'22px'}} color='#077BFF'>Read All Blogs <ArrowForwardIcon w='15px' /></Text>
            <SimpleGrid columns={{base:2, xl:3}} p={{base:'16.73px 31.5px', xl:'40px'}} columnGap={{base:'6.7px', xl:'25px'}} rowGap={{base:'15.2px', xl:'38px'}}>
                {
                    blogBox?.map((el, i) => (
                        <VStack key={i} alignItems={'flex-start'}>
                            <Box
                                w={{base:'150px',xl:'340px'}}
                                h={{base:'95px', xl:'221px'}}
                                background='rgba(7, 123, 255, 0.1)'
                                border='1px solid rgba(7, 123, 255, 0.5)'
                                borderRadius='5px'
                                ></Box>
                            <Text style={blogHeadingStyle} fontSize={{base:'12px', xl:'20px'}} lineHeight={{base:'5px', xl:'20px'}}>{el.title}</Text>
                            <Text style={blogBodyStyle} fontSize={{base:'10px', xl:'16px'}} lineHeight={{base:'5px', xl:'5px'}}>{el.content}</Text>
                        </VStack>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
};

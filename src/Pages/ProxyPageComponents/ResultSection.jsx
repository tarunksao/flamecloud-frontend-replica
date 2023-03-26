import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, HStack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

const bodyStyle = {
    fontWeight:500,
    fontSize:'20px',
    lineHeight:'24px',
    letterSpacing:'-0.02em'
}

const textStyle = {
    fontWeight:500,
    fontSize:'18px',
    lineHeight:'22px',
    letterSpacing:'-0.02em'
}

export default function ResultSection() {
    return (
        <Box m='44px auto 99px auto' w='708px'>
            <Text style={bodyStyle} color='#077BFF'>Your Results</Text>
            <Box
                background= 'rgba(217, 216, 214, 0.05)'
                border= '1px solid rgba(0, 0, 0, 0.25)'
                borderRadius= '5px'
                mt='17px'
                mb='40px'
            >
                <Table>
                    <Thead
                        background= 'rgba(0, 0, 0, 0.1)'
                        border= '1px solid rgba(0, 0, 0, 0.25)'
                        fontSize={'14px'}
                        lineHeight={'17px'}
                        opacity={0.6}
                        letterSpacing={'-0.02em'}
                        fontWeight={600}
                        color='#111822'
                    >
                        <Tr>
                            <Th>IP</Th>
                            <Th>PROXY</Th>
                            <Th>CITY</Th>
                            <Th>COUNTRY</Th>
                        </Tr>
                    </Thead>
                    <Tbody
                        fontSize={'14px'}
                        lineHeight={'17px'}
                        letterSpacing={'-0.02em'}
                        fontWeight={500}
                        color='#111822'
                    >
                        <Tr>
                            <Td>8.8.8.8</Td>
                            <Td>192.168.0.0</Td>
                            <Td>New York</Td>
                            <Td>US</Td>
                        </Tr>
                        <Tr>
                            <Td>1.1.1.1</Td>
                            <Td>192.168.0.0</Td>
                            <Td>Los Angeles</Td>
                            <Td>US</Td>
                        </Tr>
                        <Tr>
                            <Td>192.168.1.1</Td>
                            <Td>192.168.0.0</Td>
                            <Td>San Diego</Td>
                            <Td>US</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <HStack justifyContent={'center'} gap='15px'>
                <Text style={textStyle} color='#111822'>Checkout our IPv6 Compatibility Checker</Text>
                <Text style={textStyle} color='#077BFF'>View Tool <ArrowForwardIcon w='15px' mb='5px' /></Text>
            </HStack>
        </Box>
    )
};

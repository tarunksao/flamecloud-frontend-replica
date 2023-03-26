import { Box, Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";

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

const IpStyle = {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight:' 22px',
    letterSpacing:' -0.02em',
}

const termsStyle = {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight:' 17px',
    letterSpacing:' -0.02em',
    opacity:0.5
}   

export default function ProxyTop() {
    return (
        <Box textAlign={'center'}>
            <Text style={headingStyle} textAlign={'center'}>PROXY LOCATION CHECKER</Text>
            <Heading style={headingStyle2}>Check Loactions of all your Proxies <Highlight query='Free' styles={{color:'#077BFF'}}>Free</Highlight> of Cost</Heading>
            <Text style={bodyStyle}>To Check location, enter the address or proxies you want to check (1 IP Per line)</Text>

            <Box
                width= '708px'
                height= '169px'
                background= 'rgba(217, 216, 214, 0.25)'
                border= '1px solid rgba(0, 0, 0, 0.25)'
                borderRadius= '5px'
                m='auto'
                textAlign={'left'}
                p='19px'
            >
                <Text style={IpStyle}>8.8.8.8</Text>
                <Text style={IpStyle}>1.1.1.1</Text>
                <Text style={IpStyle}>192.168.1.1</Text>
            </Box>
            <Flex justifyContent={'space-between'} alignItems={'center'} w='708px' m='21px auto'>
                <Button
                    w='223px' 
                    h='39px' 
                    p='10px' 
                    borderRadius={'5px'} 
                    bgColor={'#077BFF'} 
                    color='white'
                    fontWeight={400}
                >Check Location</Button>
                <Text style={termsStyle} w='212px' textAlign={'left'}>
                    <Highlight query={['Terms of Service', 'Privacy Policy']} styles={{textDecoration:'underline'}}>
                        By using our tool, you agree our Terms of Service and Privacy Policy
                    </Highlight>
                </Text>
            </Flex>
        </Box>
    )
};

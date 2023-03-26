import { Box, Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";

const headingStyle = {
    fontWeight:600,
    color:'#111822',
    letterSpacing:'-0.02em',
    opacity:'0.5'
}

const headingStyle2 = {
    fontWeight:600,
    color:'#111822',
    letterSpacing:'-0.02em',
    margin:'3px auto',
}

const bodyStyle = {
    fontWeight:500,
    color:'#111822',
    letterSpacing:'-0.02em',
    opacity:'0.5',
    margin:'17px auto',
    textAlign:'center'
}

const IpStyle = {
    fontWeight: 500,
    letterSpacing:' -0.02em',
}

const termsStyle = {
    fontWeight: 400,
    letterSpacing:' -0.02em',
    opacity:0.5
}   

export default function ProxyTop() {
    return (
        <Box textAlign={'center'} w={{base:'315px',xl:'1148px'}} m='auto' pt={{base:'27px',xl:'95px'}}>
            <Text style={headingStyle} fontSize={{base:'7px',xl:'16px'}} lineHeight={{base:'8.5px',xl:'19px'}} textAlign={'center'}>PROXY LOCATION CHECKER</Text>
            <Heading style={headingStyle2} fontSize={{base:'25px',xl:'56px'}} lineHeight={{base:'30px',xl:'67px'}} width={{base:'294px',xl:'824px'}}>Check Loactions of all your Proxies <Highlight query='Free' styles={{color:'#077BFF'}}>Free</Highlight> of Cost</Heading>
            <Text style={bodyStyle} fontSize={{base:'10px',xl:'22px'}} lineHeight={{base:'12px',xl:'26px'}} width={{base:'226.5px',xl:'509px'}}>To Check location, enter the address or proxies you want to check (1 IP Per line)</Text>

            <Box
                width= {{base:'315px',xl:'708px'}}
                height= {{base:'119px',xl:'169px'}}
                background= 'rgba(217, 216, 214, 0.25)'
                border= '1px solid rgba(0, 0, 0, 0.25)'
                borderRadius= '5px'
                m='auto'
                textAlign={'left'}
                p={{base:'13px',xl:'19px'}}
            >
                <Text style={IpStyle}  fontSize={{base:'12.5px',xl:'18px'}} lineHeight={{base:'15px',xl:' 22px'}}>8.8.8.8</Text>
                <Text style={IpStyle}  fontSize={{base:'12.5px',xl:'18px'}} lineHeight={{base:'15px',xl:' 22px'}}>1.1.1.1</Text>
                <Text style={IpStyle}  fontSize={{base:'12.5px',xl:'18px'}} lineHeight={{base:'15px',xl:' 22px'}}>192.168.1.1</Text>
            </Box>
            <Flex flexDir={{base:'column', xl:'row'}} justifyContent={'space-between'} alignItems={{base:'flex-start',xl:'center'}} width= {{base:'315px',xl:'708px'}} m='21px auto'>
                <Button
                    w={{base:'157px',xl:'223px'}} 
                    h={{base:'27px',xl:'39px'}} 
                    p={{base:'7px',xl:'10px'}} 
                    borderRadius={'5px'} 
                    bgColor={'#077BFF'} 
                    color='white'
                    fontWeight={400}
                    fontSize={{base:'11px', xl:'16px'}}
                    mb={{base:'9px'}}
                >Check Location</Button>
                <Text style={termsStyle} fontSize={{base:'10px',xl:'14px'}} lineHeight={{base:'12px',xl:'17px'}} w={{base:'full',xl:'212px'}} textAlign={'left'}>
                    <Highlight query={['Terms of Service', 'Privacy Policy']} styles={{textDecoration:'underline'}}>
                        By using our tool, you agree our Terms of Service and Privacy Policy
                    </Highlight>
                </Text>
            </Flex>
        </Box>
    )
};

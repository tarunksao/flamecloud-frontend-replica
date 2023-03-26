import { Box } from "@chakra-ui/react";
import ProxyTop from "./ProxyPageComponents/ProxyTop";
import ResultSection from "./ProxyPageComponents/ResultSection";

export default function ProxyLocationChecker() {
    return (
        <Box>
            {/* Proxy Top */}
            <ProxyTop />

            {/* Result Section */}
            <ResultSection />
            
        </Box>
    )
};

import { Box } from "@chakra-ui/react";
import Welcome from "./LandingPageComponents/Welcome";
import TrustPilotRating from "./LandingPageComponents/TrustPilotRating";
import ServiceBox from "./LandingPageComponents/ServiceBox";
import FeatureBox from "./LandingPageComponents/FeatureBox";
import PricingList from "./LandingPageComponents/PricingList";
import Resell from "./LandingPageComponents/Resell";

export default function LandingPage() {
    return (
        <Box pt={'95px'} textAlign={'center'}>
            
            <Welcome />

            {/* Trustpilot Rating Box */}
            <TrustPilotRating />

            {/* Services Box */}
            <ServiceBox />


            {/* Features Box */}
            <FeatureBox />

            {/* Price List */}
            <PricingList />

            {/* Resell */}
            <Resell />
            
        </Box>
    )
};

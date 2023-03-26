import { Box } from "@chakra-ui/react";
import Welcome from "./LandingPageComponents/Welcome";
import TrustPilotRating from "./LandingPageComponents/TrustPilotRating";
import ServiceBox from "./LandingPageComponents/ServiceBox";
import FeatureBox from "./LandingPageComponents/FeatureBox";
import PricingList from "./LandingPageComponents/PricingList";
import Resell from "./LandingPageComponents/Resell";
import CustomerReview from "./LandingPageComponents/CustomerReview";
import Blogs from "./LandingPageComponents/Blogs";

export default function LandingPage() {
    return (
        <Box textAlign={'center'} w={{base:'378px',xl:'1148px'}} m='auto' pt={{base:'27px',xl:'95px'}}>
            
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

            {/* CustomerReview */}
            <CustomerReview />

            {/* Bolgs Box */}
            <Blogs />

        </Box>
    )
};

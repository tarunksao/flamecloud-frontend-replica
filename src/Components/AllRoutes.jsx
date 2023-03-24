import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import ProxyLocationChecker from "../Pages/ProxyLocationChecker";

export default function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/proxyLocation" element={<ProxyLocationChecker />}></Route>
        </Routes>
    )
};

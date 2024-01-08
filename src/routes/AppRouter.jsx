
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

//components
import PageNotFound from "../components/pages/pageNotFound/pageNotFound";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../components/pages/home/Home";



function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" element={<PrivateRoutes redirectPath={"/home"} ><Home /></PrivateRoutes>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRouter;
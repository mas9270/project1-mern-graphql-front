import { Outlet } from "react-router-dom";
// import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ redirectPath = '/', children, ...props }) {

    // const [cookie] = useCookies(['rasmas']);


    if (true) {

        if (true) {
            return children ? children : <Outlet />;
        }
        else {
            return <Navigate to="/home" replace={true} />;
        }
    }


};





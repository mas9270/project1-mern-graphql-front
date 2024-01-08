import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../../../api/queries/clientsQueries";
import Spinner from "../Spinner/Spinner";
import AddClients from "./AddClients";
import ShowClients from "./ShowClients";


export default function Clients(): any {

    const { loading, error, data } = useQuery(GET_CLIENTS)

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div>somthing wrong</div>
    }

    if (data) {
        let clientInfo = data.clients

        return (
            <div className="w-100">
                <AddClients />
                <ShowClients clientInfo={clientInfo} />
            </div>
        )
    }
}


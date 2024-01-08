import React from 'react'
import { FaTrash } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../../api/mutations/clientsMutation";
import { GET_CLIENTS } from '../../../api/queries/clientsQueries';


interface ClientType {
    id: string,
    name: string,
    email: string,
    phone: string
}

interface clientsRowType {
    client: ClientType,
    index: number
}


export default function ClientsRow({ client, index }: clientsRowType) {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: "" },
        refetchQueries: [{ query: GET_CLIENTS }]
    })

    function deleteClientFu(e:any,id:string) {
        deleteClient({
            variables : {
                id
            }
        }).then((aa) => console.log(aa))
    }

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td><FaTrash style={{ color: "red", cursor: "pointer" }} onClick={(e:any) => deleteClientFu(e,client.id)} /></td>
        </tr>
    )
}

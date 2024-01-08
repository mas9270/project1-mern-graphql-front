import React from 'react'
import ClientsRow from './ClientsRow'


interface ClientType {
    id: string,
    name: string,
    email: string,
    phone: string
}

interface ShowClientsType{
    clientInfo :[]
}



export default function ShowClients({clientInfo}:ShowClientsType):any {

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr className='table-dark'>
                        <th>سطر</th>
                        <th>نام</th>
                        <th>ایمیل</th>
                        <th>شماره تماس</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientInfo.length === 0
                            ? <tr><td colSpan={5} className="text-center">کاربری برای نمایش وجود ندارد</td></tr>
                            : clientInfo.map((client: ClientType, index: number) => <ClientsRow key={index} client={client} index={index} />)
                    }
                </tbody>
            </table>
        </>
    )
}

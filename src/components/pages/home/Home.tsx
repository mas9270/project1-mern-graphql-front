
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./Home.css"
import Clients from "../../custom/Clients/Clients";


const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
})


export default function Home() {
    return (
        <>
            <ApolloProvider client={client}>
                <div className='home'>
                    <Clients />
                </div>
            </ApolloProvider>
        </>
    );
}









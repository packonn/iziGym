import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
	uri: process.env.BACKEND_URL + "graphql",
	cache: new InMemoryCache(),
})

export default apolloClient

import { Client, cacheExchange, fetchExchange } from "urql"

const client = new Client({
  url: `${process.env.GATSBY_WPGRAPHQL_URL}`,
  exchanges: [cacheExchange, fetchExchange],
})

export default client

import {ApolloServer} from "@apollo/server" ;
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { typeDefs } from "./gql/schema.ts";
import { Character } from "./resolvers/character.ts";
import { Episode } from "./resolvers/episode.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode,
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 8000 } });
console.info(`Server ready at ${url}`);
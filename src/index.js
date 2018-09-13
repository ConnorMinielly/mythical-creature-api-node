import { GraphQLServer } from 'graphql-yoga';
import resolvers from './server/resolvers';
import typeDefs from './server/mythics.graphql';
import db from './database/mongo';
import Mythics from './database/mythics';

const options = {
  port: 3003,
  endpoint: '/mythics',
  playground: '/mythics_playground',
};

const context = {
  db,
  Mythics,
};

const server = new GraphQLServer({ typeDefs, resolvers, context });

server.start(options, ({ port }) =>
  console.log(`Server is fired 🔥 up on localhost:${port}`),
);

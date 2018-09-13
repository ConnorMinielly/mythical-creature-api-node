import { GraphQLServer } from 'graphql-yoga';
import resolvers from './server/resolvers';
import typeDefs from './server/mythics.js';
import db from './database/mongo';
import Mythics from './database/mythics';

const options = {
  port: 3003,
  endpoint: '/mythics',
  playground: '/play',
};

const context = {
  db,
  Mythics,
};

const server = new GraphQLServer({ typeDefs, resolvers, context });

server.start(options, ({ port }) =>
  console.log(
    `
    Server is fired 🔥 up on http://localhost:${port}
    Play 🎮  at http://localhost:${port}/play
    Try Running:
    query {
      mythics {
        name
        description
      }
    }
    `,
  ),
);

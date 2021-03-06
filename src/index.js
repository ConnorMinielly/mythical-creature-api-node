import { ApolloServer } from 'apollo-server';
import resolvers from './server/resolvers';
import typeDefs from './server/mythics_schema';
import db from './database/mongo';
import Mythics from './database/mythics_model';

const options = {
  port: 3003,
  endpoint: '/mythics',
  playground: '/play',
};

const context = {
  db,
  Mythics,
};

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen(options).then(({ port, url }) =>
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

import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import db from './db';
import schema from './graphql/schema';
import ContactModel from './db/models/contact';

const server = express();

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

server.listen(4000, () => {
  console.log('listening on port 4000');
});

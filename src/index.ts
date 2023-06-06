import 'reflect-metadata';

import bodyParser from 'body-parser';
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { Client } from 'pg';
import * as typeGraphQL from 'type-graphql';
import { Container } from 'typedi';

import { PeopleResolver } from './resolvers/PeopleResolver';
import { PingResolver } from './resolvers/PingResolver';

(async () => {
  const app = express();
  app.use(bodyParser.json({ limit: '10MB' }));

  const schema = await typeGraphQL.buildSchema({
    resolvers: [PingResolver, PeopleResolver],
    container: Container,
  });

  const client = new Client({
    host: 'localhost',
    port: 55432,
    database: 'pgtest',
    user: 'postgres',
    password: 'password',
  });
  await client.connect();

  app.use(
    '/api/graphql',
    createHandler({
      schema,
      context: async () => ({
        db: client,
      }),
    }),
  );

  app.listen(1337, () => console.log('listening at http://localhost:1337'));
})();

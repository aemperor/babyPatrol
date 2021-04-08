import App from './app';
import { container } from 'tsyringe';
import { buildSchema } from 'type-graphql';
import { SignUpResolver } from './resolver/signup.resolver';
import { GraphQLSchema } from 'graphql';
import { HealthCheckResolver } from './resolver/healthcheck.resolver';
import { ConfigurationObject } from './object/configuration.obj';
import { HeaderObject } from './object/header.obj';
import { LoggerService } from './service/logger.service';

const DEFAULT_PORT = 3400;
const DEFAULT_TIMEOUT = 5; // in seconds

require('dotenv').config( { path : process.env.BABY_PATROL_DOTENV_PATH } );

// register custom injections
container.register<ConfigurationObject>('Configuration', { useValue: new ConfigurationObject(process.env) });

const port = process.env.EXPRESS_HTTP_PORT ? Number(process.env.EXPRESS_HTTP_PORT) : DEFAULT_PORT;
const timeout = process.env.EXPRESS_TIMEOUT ? Number(process.env.EXPRESS_TIMEOUT) : DEFAULT_TIMEOUT;


async function getSchema() : Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [
      HealthCheckResolver,
      SignUpResolver,
    ],
    container: { get: someClass => container.resolve(someClass as any) },
    emitSchemaFile: true,
  }).catch((ex) => {
    throw ex;
  });

  return schema;
}

let app;
getSchema().then((schema) => {
  app = new App(
    schema,
    port,
    timeout
  );

  if (app) {
    app.createServer();
  } else {
    console.error('There was an error creating the server!');
  }
}).catch((ex) => {
  throw ex;
});






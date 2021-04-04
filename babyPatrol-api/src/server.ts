import App from './app';
import { config } from 'dotenv';
import { buildSchema } from 'type-graphql';
import SignUpResolver from './resolvers/signup.resolver';
import { GraphQLSchema } from 'graphql';
// import { ConfigurationObject } from './object/configuration.obj';
// import HealthCheckController from './controller/healthcheck.controller';
// import { HealthCheckService } from './service/healthcheck.service';
// import { LoggerService } from './service/logger.service';

const DEFAULT_PORT = 3000;
const DEFAULT_TIMEOUT = 5; // in seconds

if (!process.env.DOTENV_PATH) {
    process.env.DOTENV_PATH = `./env/${process.env.ENVIRONMENT}.env`;
}
config( { path : process.env.DOTENV_PATH } );

// const configurationDto : ConfigurationObject = new ConfigurationObject(process.env);

const port = process.env.EXPRESS_HTTP_PORT ? Number(process.env.EXPRESS_HTTP_PORT) : DEFAULT_PORT;
const timeout = process.env.EXPRESS_TIMEOUT ? Number(process.env.EXPRESS_TIMEOUT) : DEFAULT_TIMEOUT;

// const loggerService : LoggerService = new LoggerService(configurationDto);

async function getSchema() : Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [SignUpResolver],
    emitSchemaFile: true,
  }).catch((ex) => {
    throw ex;
  });
  console.log('schema', schema);

  return schema;
}

let app;
getSchema().then((schema) => {
  app = new App(
    schema,
    port,
    timeout
  );

  console.log('app is', app);
}).catch((ex) => {
  throw ex;
});

if (app) {
  app.createServer();
} else {
  console.error('we have a problem');
}




import 'reflect-metadata'; // preserve this import prior to type-graphql
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as expressRequestId from 'express-request-id';
import * as http from 'http';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { TokenValidationMiddleware } from './middleware/token-validation.middleware';

class App {
  public app: express.Application;
  public port: number;
  public timeout: number;
  public schema: GraphQLSchema;

  private readonly validationMiddleware : TokenValidationMiddleware = new TokenValidationMiddleware();

  private readonly TEMP_API_TOKENS : string = 'token, hello, baby';

  private readonly METHOD_NOT_ALLOWED : string = 'Method not allowed';
  private readonly SOMETHING_WENT_WRONG : string = 'Something went wrong!';

  constructor(schema: GraphQLSchema, port: number, timeout: number) {
    this.app = express();
    this.schema = schema;
    this.port = port;
    this.timeout = timeout;

    // Initialize Middlewares here
    // NOTE: Middleware ordering is important and must be maintained!
    this.initializePreRouteMiddlewares();

    new Promise((resolve, reject) => {
      this.initializeRouteMiddlewares().then(resolve);
    });

    this.initializeHeaders();
  }

  private initializePreRouteMiddlewares() : void {
    this.app.use(bodyParser.json());

    this.app.use(expressRequestId({
        setHeader: true,
        headerName: 'x-baby-patrol-request-id',
        attributeName: 'babyPatrolRequestId'
    }));

    const options = {
        // apiTokens : process.env.API_TOKENS ? process.env.API_TOKENS.split(',') : [],
        apiTokens: this.TEMP_API_TOKENS.split(','),
        excludePaths : ['/graphql']
    };

    this.app.use(this.validationMiddleware.validateToken(options));
  }


  private async initializeRouteMiddlewares() : Promise<void> {
    this.app.use('/graphql', graphqlHTTP({
      schema: this.schema,
      graphiql: true,
    }));
  }

  private initializeHeaders() : void {
    this.app.use( cors ({
        credentials: true,
        allowedHeaders: ['Content-Type', 'x-api-token']
    }));
  }

  public createServer() {
    http.createServer(this.app).listen(this.port);
    console.log(`App listening on port ${this.port}`);
  }

}

export default App;
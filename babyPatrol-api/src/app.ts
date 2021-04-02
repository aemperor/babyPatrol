import * as express from 'express';
import * as http from 'http';

class App {
  public app: express.Application;
  public port: number;
  public timeout: number;

  private readonly METHOD_NOT_ALLOWED : string = 'Method not allowed';
  private readonly SOMETHING_WENT_WRONG : string = 'Something went wrong!';

  constructor(port: number, timeout: number) {
    this.app = express();
    this.port = port;
    this.timeout = timeout;

    // Initialize Middlewares here
    // NOTE: Middleware ordering is important and must be maintained!
  }

  public createServer() {
    http.createServer(this.app).listen(this.port);

    console.log(`App listening on port ${this.port}`);
  }

}

export default App;
import { injectable } from 'tsyringe';

@injectable()
export class ConfigurationObject {
  buildNumber: number;

  expressHttpPort: number;
  environment: string;

  logLevel: string;

  jwtSecret: string;

  constructor( processEnv?: NodeJS.ProcessEnv) {
    this.buildNumber = processEnv.BUILD_NUMBER ? Number(processEnv.BUILD_NUMBER) : 0;

    this.expressHttpPort = Number(processEnv.EXPRESS_HTTP_PORT);
    this.environment = processEnv.ENVIRONMENT;

    this.logLevel = processEnv.LOG_LEVEL;

    this.jwtSecret = processEnv.JWT_SECRET;
  }
}

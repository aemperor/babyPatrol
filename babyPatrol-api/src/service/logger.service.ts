import { inject, injectable, singleton } from 'tsyringe';
import { ConfigurationObject } from '../object/configuration.obj';

@injectable()
@singleton()
export class LoggerService {
  private environment : string;
  private logger : any;

  constructor(@inject('Configuration') config? : ConfigurationObject) {
    this.environment = config.environment;
    this.logger = console.log;
  }

  logInfo(message) {
      console.info(message);
  }

  logError(message) {
      console.error(message);
  }

  logWarn(message) {
      console.warn(message);
  }

  formatLogMessage(message, level, type, methodName, serviceName, error) {
      if (typeof level === 'undefined') {
          level = 'Information';
      }

      if (typeof type === 'undefined') {
          type = 'Application';
      }

      const logMessage = {
          environment: this.environment,
          level,
          type,
          message,
          methodName: methodName ? methodName : undefined,
          serviceName: serviceName ? serviceName : undefined,
          error: error ? error : undefined
      };

      return JSON.stringify(logMessage);
  }
}

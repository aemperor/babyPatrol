import { container, inject, singleton } from 'tsyringe';
import { LoginData, LoginResultData } from '../data/login.data';
import { ConfigurationObject } from '../object/configuration.obj';
import { DynamoDBService } from './dynamodb.service';
import { LoggerService } from './logger.service';
import { GetItemInput, Key } from 'aws-sdk/clients/dynamodb';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { PasswordService } from './password.service';

@singleton()
export class LoginService {
  private dynamoDBService : DynamoDBService;
  private loggerService : LoggerService;
  private passwordService : PasswordService;

  constructor(@inject('Configuration') private readonly config: ConfigurationObject) {
    this.dynamoDBService = container.resolve(DynamoDBService);
    this.loggerService = container.resolve(LoggerService);
    this.passwordService = new PasswordService();
  }

  /**
   * Logs a user in
   * @param loginData The login data
   * @return The username and JWT
   * @throws If something goes wrong
   */
  public async login(loginData: LoginData) : Promise<LoginResultData> {
    const key : Key = {
      username: {
        S: loginData.username
      }
    };

    const getRequest : GetItemInput = {
      TableName: 'baby_patrol_users',
      Key: key
    };

    const item = await this.dynamoDBService.getItem(getRequest).catch((ex) => {
      this.loggerService.logError(ex);
      throw ex;
    });

    const storedPassword = item.Item.password.S;
    const email = item.Item.email.S;

    const comparePasswords = await this.passwordService.comparePasswords(loginData.password, storedPassword);
    let jwt : string = 'failed';
    if (comparePasswords) { 
      jwt = sign(
        { username: loginData.username, email, authenticated: true },
        this.config.jwtSecret,
        { expiresIn: '1y' }
      );
    }

    return {
      username: loginData.username,
      jwt
    };
  }
}

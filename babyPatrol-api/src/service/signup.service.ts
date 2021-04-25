import { container, inject, singleton } from 'tsyringe';
import { SignUpData, SignUpResultData } from '../data/signup.data';
import { ConfigurationObject } from '../object/configuration.obj';
import { DynamoDBService } from './dynamodb.service';
import { v4 } from 'uuid';
import { LoggerService } from './logger.service';
import { GetItemInput, PutItemInput, PutItemInputAttributeMap, Key } from 'aws-sdk/clients/dynamodb';
import { sign } from 'jsonwebtoken';
import { PasswordService } from './password.service';

@singleton()
export class SignUpService {
  private dynamoDBService : DynamoDBService;
  private loggerService : LoggerService;
  private passwordService : PasswordService;

  constructor(@inject('Configuration') private readonly config: ConfigurationObject) {
    this.dynamoDBService = container.resolve(DynamoDBService);
    this.loggerService = container.resolve(LoggerService);
    this.passwordService = new PasswordService();
  }

  /**
   * Sign a user up
   * @param signUpData The sign up data
   * @return The username and JWT
   * @throws If the username is already taken, or something goes wrong
   */
  public async signUp(signUpData: SignUpData) : Promise<SignUpResultData> {
    const usernameExists = await this.checkIfUsernameExists(signUpData.username);
    if (usernameExists) {
      // TODO: make custom exception
      throw new Error(`Username is taken ${signUpData.username}`);
    }

    const encryptedPassword = await this.passwordService.encryptPassword(signUpData.password);
    const userId = v4();

    const putItem : PutItemInputAttributeMap = {
      'id': {
        S: userId
      }, 
      username: {
        S: signUpData.username
      },
      firstname: {
        S: signUpData.firstname
      },
      lastname: {
        S: signUpData.lastname
      },
      email: {
        S: signUpData.email
      },
      password: {
        S: encryptedPassword
      }
    };

    const putRequest : PutItemInput = {
      TableName: 'baby_patrol_users',
      Item: putItem,
    }
     
    await this.dynamoDBService.putItem(putRequest).catch((ex) => {
      this.loggerService.logError(ex);
      throw ex;
    });

    const jwt = sign(
      { username: signUpData.username, email: signUpData.email, authenticated: true },
      this.config.jwtSecret,
      { expiresIn: '1y' }
    );

    return {
      username: signUpData.username,
      jwt
    };
  }

  /**
   * Check if the username exists
   * @param username The username to check against
   * @return True if the username exists, false otherwise
   */
  private async checkIfUsernameExists(username: string) : Promise<boolean> {
    const key : Key = {
      username: {
        S: username
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

    return item.Item && item.Item.username ? true : false;
  }
}

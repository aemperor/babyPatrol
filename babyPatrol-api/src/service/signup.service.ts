import { container, inject, singleton } from 'tsyringe';
import { SignUpData, SignUpResultData } from '../data/signup.data';
import { ConfigurationObject } from '../object/configuration.obj';
// import { HeaderObject } from '../object/header.obj';
import { DynamoDBService } from './dynamodb.service';
import { v4 } from 'uuid';
import { LoggerService } from './logger.service';
import { PutItemInput, PutItemInputAttributeMap, TableName } from 'aws-sdk/clients/dynamodb';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SignUpInput } from '../schema/signup.schema';

@singleton()
export class SignUpService {
  private dynamoDBService : DynamoDBService;
  private loggerService : LoggerService;

  constructor(@inject('Configuration') private readonly config: ConfigurationObject) {
    this.dynamoDBService = container.resolve(DynamoDBService);
    this.loggerService = container.resolve(LoggerService);
  }

  public async signUp(signUpData: SignUpInput) : Promise<SignUpResultData> {
    // TODO: HEAVY LIFTING FOR SIGN UP
    const encryptedPassword = await this.encryptPassword(signUpData.password);
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
      { id: userId, email: signUpData.email, authenticated: true },
      this.config.jwtSecret,
      { expiresIn: '1y' }
    );

    return {
      username: signUpData.username,
      jwt
    };
  }

  private async encryptPassword(password: string) : Promise<string> {
    return await hash(password, 10);
  }

}
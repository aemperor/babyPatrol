import { container, inject, singleton } from 'tsyringe';
import { SignUpData } from '../data/signup.data';
import { ConfigurationObject } from '../object/configuration.obj';
// import { HeaderObject } from '../object/header.obj';
import { DynamoDBService } from './dynamodb.service';
import { v4 } from 'uuid';
import { LoggerService } from './logger.service';
import { PutItemInput, PutItemInputAttributeMap, TableName } from 'aws-sdk/clients/dynamodb';

@singleton()
export class SignUpService {
  private dynamoDBService : DynamoDBService;
  private loggerService : LoggerService;

  constructor(@inject('Configuration') private readonly config: ConfigurationObject) {
    this.dynamoDBService = container.resolve(DynamoDBService);
    this.loggerService = container.resolve(LoggerService);
  }

  public async signUp(signUpData: SignUpData) {
    // TODO: HEAVY LIFTING FOR SIGN UP
    const putItem : PutItemInputAttributeMap = {
      'id': {
        S: v4()
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
        S: signUpData.password
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
  }

}
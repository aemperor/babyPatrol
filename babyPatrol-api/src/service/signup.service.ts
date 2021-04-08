import { container, inject, singleton } from 'tsyringe';
import { SignUpData } from '../data/signup.data';
import { ConfigurationObject } from '../object/configuration.obj';
// import { HeaderObject } from '../object/header.obj';
import { DynamoDBService } from './dynamodb.service';

@singleton()
export class SignUpService {
  private dynamoDBService : DynamoDBService;

  constructor(@inject('Configuration') private readonly config: ConfigurationObject) {
    this.dynamoDBService = container.resolve(DynamoDBService);
  }

  public async signUp(signUpData: SignUpData) {
    // TODO: HEAVY LIFTING FOR SIGN UP
    
    console.log(`BUILD NUMBER: ${this.config.buildNumber}`);
    console.log('cool');
  }

}
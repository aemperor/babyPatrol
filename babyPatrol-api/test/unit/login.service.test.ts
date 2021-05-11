jest.mock('../../src/service/dynamodb.service');

import { container, injectable } from 'tsyringe';
import { LoginData } from '../../src/data/login.data';
import { ConfigurationObject } from '../../src/object/configuration.obj';
import { DynamoDBService } from '../../src/service/dynamodb.service';
import { LoginService } from '../../src/service/login.service';

describe('LoginService Unit Tests', () => {
  const config = new ConfigurationObject(process.env);
  const loginService = new LoginService(config);
  beforeAll(() => {
    jest.resetAllMocks();

  })

  describe('login unit test', () => {
    test('should be able to login', async() => {
      const loginData : LoginData = {
        username: 'myUser',
        password: 'superSafePassword'
      }

      await loginService.login(loginData).catch((ex) => {
        console.error(ex);
      });
    });
  });



}); 
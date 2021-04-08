import { DynamoDB } from 'aws-sdk';
import { container, injectable, singleton } from 'tsyringe';
import { LoggerService } from './logger.service';

const LOG_LEVEL = require('../enum/logger.enum').LOG_LEVEL;
const LOG_TYPE = require('../enum/logger.enum').LOG_TYPE;

// Doc Reference: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
@injectable()
@singleton()
export class DynamoDBService {
  private dynamodb : DynamoDB;
  private loggerService : LoggerService;
  private readonly SERVICE_NAME = 'DynamoDBService';

  constructor() {
      this.dynamodb = new DynamoDB();
      this.loggerService = container.resolve(LoggerService);
  }

  /**
   * Send batches of max 100 to dynamo to get items that are already in the table
   * @param {String} tableName - The name of the table to read from
   * @param {Array} keys - The keys to send 
   * @returns {Array} responseData that has batches of 100 or less in each index
   */
  async sendBatchGets(tableName, keys) {
      let oneHundredKeys = [];
      const responseData = [];

      // send in batches of 100
      // 100 is the max item count that can be sent to batchItemGet
      let items : any = {};
      items.RequestItems = {};
      items.RequestItems[tableName] = {};
      if (keys.length > 99) {
          for (const key of keys) {
              oneHundredKeys.push(key);

              if (oneHundredKeys.length === 100) {
                  items.RequestItems[tableName] = {
                      Keys: oneHundredKeys
                  };

                  const dynamoData = await this.batchGetItems(items);
                  responseData.push(dynamoData);
                  oneHundredKeys = [];
              }
          }
      
          // process any leftovers that didn't get a batch of 100
          if (oneHundredKeys.length !== 0) {
              items.RequestItems[tableName] = {
                  Keys: oneHundredKeys
              };

              const dynamoData = await this.batchGetItems(items);
              responseData.push(dynamoData);
          }
      } else {
          items.RequestItems[tableName] = {
              Keys: keys
          };

          const dynamoData = await this.batchGetItems(items);
          responseData.push(dynamoData);
      }

      return responseData;
  }

  /**
   * Batch Get from Dynamo
   * @param {Object} items - Object of items
   * @returns Array of items from dynamo
   */
  async batchGetItems(items) {
      try {
          const response = await this.dynamodb.batchGetItem(items).promise();
          return response.Responses;
      } catch (ex) {
          const methodName = 'batchGetItem';
          const message = this.getErrorMessage(methodName, ex);
          this.loggerService.logError(message);

          // TODO: make real exception
          throw ex;
      }
  }

  /**
   * Send write batches of max 25 to dynamo
   * @param {String} tableName - the table name to write to
   * @param {Array} keys - items to write
   */
  async sendBatchWrites(tableName, keys) {
      let twentyFiveKeys = [];

      let items : any = {};
      items.RequestItems = {};
      items.RequestItems[tableName] = {};

      try {
          if (keys.length > 24) {
              for (const key of keys) {
                  twentyFiveKeys.push(key);

                  if (twentyFiveKeys.length === 25) {
                      items.RequestItems[tableName] = twentyFiveKeys;
                      await this.batchWriteItems(items);
                      twentyFiveKeys = [];
                  }
              }

              // process any leftovers that didn't get a batch of 25
              if (twentyFiveKeys.length !== 0) {
                  items.RequestItems[tableName] = twentyFiveKeys;
                  await this.batchWriteItems(items);
              }
          } else {
              items.RequestItems[tableName] = keys;
              await this.batchWriteItems(items);
          }
      } catch (ex) {
          // TODO: make real exception here
          throw ex;
      }
  }

  /**
   * Write items to dynamo
   * @param {Object} items - Object of items
   */
  async batchWriteItems(items) {
      try {
          return await this.dynamodb.batchWriteItem(items).promise();
      } catch (ex) {
          const methodName = 'batchWriteItem';
          const message = this.getErrorMessage(methodName, ex);
          this.loggerService.logError(message);

          // TODO: make real exception
          throw ex;
      }
  }

  /**
   * Get single item from dynamo
   * @param {Object} item - Item to get
   * @returns The data from dynamo
   */
  async getItem(item) {
      try {
          return await this.dynamodb.getItem(item).promise();
      } catch (ex) {
          const methodName = 'getItem';
          const message = this.getErrorMessage(methodName, ex);
          this.loggerService.logError(message);

          // TODO: make real exception
          throw ex;
      }
  }

  /**
   * Creates or overwrites a single item in dynamo
   * @param {Object} item - Item to write
   */
  async putItem(item) {
      try {
          return await this.dynamodb.putItem(item).promise();
      } catch (ex) {
          const methodName = 'putItem';
          const message = this.getErrorMessage(methodName, ex);
          this.loggerService.logError(message);

          // TODO: make real exception
          throw ex;
      }
  }

  /**
   * Updates a single item
   * @param {Object} item - The item to update
   * @returns The updated item
   */
  async updateItem(item) {
      try {
          return await this.dynamodb.updateItem(item).promise();
      } catch (ex) {
          const methodName = 'updateItem';
          const message = this.getErrorMessage(methodName, ex);
          this.loggerService.logError(message);

          // TODO: make real exception
          throw ex;
      }
  }

  async queryItem(item) {
      try {
          return await this.dynamodb.query(item).promise();
      } catch (ex) {
          const methodName = "queryItem";
          const message = this.getErrorMessage(methodName, ex);
          this.loggerService.logError(message);

          // TODO: make real exception
          throw ex;
      }
  }

  /**
   * Get the formatted error message
   * @param {String} methodName - The name of the method
   * @param {Object} ex - The exception
   */
  getErrorMessage(methodName, ex) {
      return this.loggerService.formatLogMessage(
          `Error with ${methodName}`,
          LOG_LEVEL.ERROR,
          LOG_TYPE.SERVICE,
          methodName,
          this.SERVICE_NAME,
          ex
      );
  }
}

import { Service } from 'typedi'
import { Query, Resolver } from 'type-graphql';
import { HealthCheckData } from '../data/healthcheck.data';
import HealthCheck from '../schemas/healthcheck.schema';


@Service()
@Resolver()
export class HealthCheckResolver {
  @Query(returns => HealthCheck)
  HealthCheck() : HealthCheckData {
    const healthCheckData : HealthCheckData = {
      status: 'good',
    };

    return healthCheckData;
  }
}
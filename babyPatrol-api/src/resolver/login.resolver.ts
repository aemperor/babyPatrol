import { container, singleton } from 'tsyringe';

import { Arg, Mutation, Resolver } from "type-graphql";
import { LoginData, LoginResultData } from "../data/login.data";
import { LoginInput, LoginPayload } from '../schema/login.schema';
import { LoginService } from "../service/login.service";

@singleton()
@Resolver(of => LoginInput)
export class LoginResolver {
  private loginService : LoginService;

  constructor() {
    this.loginService = container.resolve(LoginService);
  }

  @Mutation(returns => LoginPayload, { nullable: false })
  async Login(
    @Arg('username') username: string,
    @Arg('password') password: string
  ) : Promise<LoginResultData> {
    const input : LoginInput = {
      username,
      password
    };

    return await this.loginService.login(input);
  }

}

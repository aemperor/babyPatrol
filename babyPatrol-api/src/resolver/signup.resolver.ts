import { container, singleton } from 'tsyringe';

import { Arg, Mutation, Resolver } from "type-graphql";
import { SignUpData, SignUpResultData } from "../data/signup.data";
import { SignUpInput, SignUpPayload } from '../schema/signup.schema';
import { SignUpService } from "../service/signup.service";
@singleton()
@Resolver(of => SignUpInput)
export class SignUpResolver {
  private signUpService : SignUpService;

  constructor() {
    this.signUpService = container.resolve(SignUpService);
  }

  @Mutation(returns => SignUpPayload, { nullable: false })
  async SignUp(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Arg('firstname') firstname: string,
    @Arg('lastname') lastname: string,
    @Arg('email') email: string,
  ) : Promise<SignUpResultData> {

    const input : SignUpInput = {
      username,
      password,
      firstname,
      lastname,
      email
    };
    return await this.signUpService.signUp(input);
  }
}
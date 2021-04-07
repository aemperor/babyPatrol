import { container, singleton } from 'tsyringe';

import { Arg, Mutation, Resolver } from "type-graphql";
import { SignUpData } from "../data/signup.data";
import SignUp from '../schemas/signup.schema';
import { SignUpService } from "../service/signup.service";
@singleton()
@Resolver(of => SignUp)
export class SignUpResolver {
  private signUpService : SignUpService;

  constructor() {
    this.signUpService = container.resolve(SignUpService);
  }

  @Mutation(returns => SignUp, { nullable: false })
  async SignUp(
    @Arg('username') username: string,
    @Arg('firstname') firstname: string,
    @Arg('lastname') lastname: string,
    @Arg('password') password: string,
    @Arg('email') email: string
  ) : Promise<SignUpData> {
    const signUpData : SignUpData = {
      username,
      firstname,
      lastname,
      password,
      email,
    }

    await this.signUpService.signUp(signUpData);
    
    return signUpData;
  }
}
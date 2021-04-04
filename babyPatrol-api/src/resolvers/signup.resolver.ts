import { Arg, Mutation, Resolver } from "type-graphql";
import { SignUpData } from "../data/signup.data";
import SignUp from '../schemas/signup.schema';

@Resolver(of => SignUp)
export default class {
  @Mutation(returns => SignUp, { nullable: false })
  SignUp(
    @Arg('username') username: string,
    @Arg('firstname') firstname: string,
    @Arg('lastname') lastname: string,
    @Arg('password') password: string,
    @Arg('email') email: string
  ) : SignUpData {
    const signUpData : SignUpData = {
      username,
      firstname,
      lastname,
      password,
      email,
    }
    
    return signUpData;
  }
}
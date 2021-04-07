import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class SignUp {
  @Field()
  username: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginPayload {
  @Field()
  username: string;

  @Field()
  jwt: string;
}
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SignUpInput {
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


@ObjectType()
export class SignUpPayload {
  @Field()
  username: string;

  @Field()
  jwt: string;
}
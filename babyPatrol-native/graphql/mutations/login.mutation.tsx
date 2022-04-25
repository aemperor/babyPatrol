import { gql } from '@apollo/client';

export const LOGIN : any = gql `
  mutation Login(
    $username: String!,
    $password: String!
  ) {
    Login(
      username: $username,
      password: $password
    ) {
      username, jwt
    }
  }
`
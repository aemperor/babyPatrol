import { gql } from '@apollo/client';


export const SIGN_UP : any = gql `
  mutation SignUp(
    $email: String!,
    $firstname: String!,
    $lastname: String!,
    $username: String!,
    $password: String!
  ) {
      SignUp(
        email: $email, 
        firstname: $firstname,
        lastname: $lastname,
        username: $username,
        password: $password
    ){
      username,
      jwt
    }
  }
`
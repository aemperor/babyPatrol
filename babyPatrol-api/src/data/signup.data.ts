export interface SignUpData {
  username: string,
  firstname: string,
  lastname: string,
  password: string,
  email: string
};


export interface SignUpResultData {
  username: string,
  jwt: string,
}
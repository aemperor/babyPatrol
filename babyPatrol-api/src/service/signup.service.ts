import { Inject, Service } from 'typedi';

import { SignUpData } from "../data/signup.data";
import { ConfigurationObject } from "../object/configuration.obj";
import { HeaderObject } from "../object/header.obj";

@Service()
export class SignUpService {

  constructor() {
  // constructor(@Inject() config: ConfigurationObject, @Inject() private readonly headers: HeaderObject) {

  }

  public async signUp(signUpData: SignUpData) {
    console.log('cool');
  }

}
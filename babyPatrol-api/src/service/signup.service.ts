import { inject, singleton } from 'tsyringe';
import { SignUpData } from "../data/signup.data";
import { ConfigurationObject } from "../object/configuration.obj";
import { HeaderObject } from "../object/header.obj";

@singleton()
export class SignUpService {

  constructor(@inject('Configuration') private readonly config: ConfigurationObject) {

  }

  public async signUp(signUpData: SignUpData) {
    // TODO: HEAVY LIFTING FOR SIGN UP
    console.log(`BUILD NUMBER: ${this.config.buildNumber}`);
    console.log('cool');
  }

}
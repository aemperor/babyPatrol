import React from 'react';
import { Headline, Subheading, TextInput, Button, Avatar } from 'react-native-paper';

import { View } from './Themed';

import { styles } from '../styles/BaseStyle';


export default function LoginScreenInfo() {
  let username, email, password;
  const signUpInfo : any = {
    username: '',
    email: '',
    password: ''
  };

  return (
    <View style={styles.container}>
      <Headline style={styles.headlineStyle}>Login</Headline>
      <TextInput style={styles.textInput}
        label='Username'
        mode='outlined'
        value={username}
        onChangeText={username => signUpInfo.username = username}
      />
      <TextInput style={styles.textInput}
        label='Password'
        mode='outlined'
        secureTextEntry={true}
        value={password}
        onChangeText={password => signUpInfo.password = password}
      />
      <Button
        icon='account'
        mode='contained' 
        accessibilityLabel='sign up'
        onPress={() => signUp(signUpInfo)}
        compact={true}
        style={styles.button}
      >
        Sign Up
      </Button>
    </View>
  );
}

const signUp = (signUpInfo : object) => {
  console.log(signUpInfo);
}

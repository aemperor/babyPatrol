import React from 'react';
import { Headline, Subheading, TextInput, Button, Avatar } from 'react-native-paper';

import { View } from './Themed';

import { styles } from '../styles/BaseStyle';


export default function SignUpScreenInfo() {
  let username, email, password;
  const signUpInfo : any = {
    username: '',
    email: '',
    password: ''
  };

  return (
    <View style={styles.container}>
      <Avatar.Image style={styles.signUpImage} size={150} source={require('../assets/images/babyPatrolLogo/babyPatrolLogo.002.png')} />
      <Headline style={styles.headlineStyle}>Welcome to Baby Patrol!</Headline>
      <Subheading style={styles.subHeadingStyle}>Let's get started...</Subheading>
      <TextInput style={styles.textInput}
        label='Username'
        mode='outlined'
        value={username}
        onChangeText={username => signUpInfo.username = username}
      />
      <TextInput style={styles.textInput}
        label='E-mail'
        mode='outlined'
        value={email}
        onChangeText={email => signUpInfo.email = email}
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

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Headline, Subheading, TextInput, Button, Avatar } from 'react-native-paper';
import { useMutation } from '@apollo/client';
import { ScrollView } from './Themed';
import { SIGN_UP } from '../graphql/mutations/signup.mutation';
import { styles } from '../styles/BaseStyle';

export default function SignUpScreenInfo() {
  const navigation = useNavigation();

  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [firstname, setFirstname] = useState('');
  let [lastname, setLastname] = useState('');

  const [SignUp, { data }] = useMutation(SIGN_UP);

  const submitSignUp = (signUpInfo : any) => {
    console.log(signUpInfo);

    SignUp({ variables: {
      email: signUpInfo.email,
      firstname: signUpInfo.firstname,
      lastname: signUpInfo.lastname,
      username: signUpInfo.username,
      password: signUpInfo.password
    }})
    .then((response) => {
      const jwt = response.data.SignUp.jwt;
      const username = response.data.SignUp.username;
      // TODO: store these in REDUX and persist JWT in local storage
      console.log(`Response JWT : ${jwt}`);
      console.log(`Response Username : ${username}`);
      if (jwt && username) {
        navigation.navigate('Root', {
          screen: 'HomeScreen',
          params: { username }
        });
      }

    }).catch((ex) => {
      // TODO: figure out how to extract a usable error message
      console.error('error', ex);
      console.log(ex.message);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Avatar.Image style={styles.signUpImage} size={150} source={require('../assets/images/babyPatrolLogo/babyPatrolLogo.002.png')} />
      <Headline style={styles.headlineStyle}>Welcome to Baby Patrol!</Headline>
      <Subheading style={styles.subHeadingStyle}>Let's get started...</Subheading>
      <TextInput style={styles.textInput}
        label='First Name'
        mode='outlined'
        value={firstname}
        onChangeText={firstname => setFirstname(firstname)}
      />
      <TextInput style={styles.textInput}
        label='Last Name'
        mode='outlined'
        value={lastname}
        onChangeText={lastname => setLastname(lastname)}
      />
      <TextInput style={styles.textInput}
        label='Username'
        mode='outlined'
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <TextInput style={styles.textInput}
        label='E-mail'
        mode='outlined'
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput style={styles.textInput}
        label='Password'
        mode='outlined'
        secureTextEntry={true}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Button
        icon='account'
        mode='contained' 
        accessibilityLabel='sign up'
        onPress={() => {
          const signUpInfo : any = {
            firstname,
            lastname,
            username,
            email,
            password
          };
          submitSignUp(signUpInfo);
        }}
        compact={true}
        style={styles.button}
      >
        Sign Up
      </Button>
    </ScrollView>
  );
}

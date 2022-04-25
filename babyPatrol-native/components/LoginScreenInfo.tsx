import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { Headline, TextInput, Button, Checkbox, Text} from 'react-native-paper';
import { View } from './Themed';
import { styles } from '../styles/BaseStyle';
import { LOGIN } from '../graphql/mutations/login.mutation';
import { loginStyle } from '../styles/LoginStyle'

export default function LoginScreenInfo() {
    const navigation = useNavigation();

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [willSaveUser, setWillSaveUser] = useState(false);

    const [Login, { data }] = useMutation(LOGIN);

    const submitLogin = (loginInfo : any) => {
      Login({ variables: {
        username: loginInfo.username,
        password: loginInfo.password
      }}).then((response) => {
        const jwt = response.data.Login.jwt;
        const username = response.data.Login.username;
        // TODO: store these in REDUX and persist JWT in local storage
        console.log(`Response JWT : ${jwt}`);
        console.log(`Response Username : ${username}`);
        if (jwt && username) {
          navigation.navigate('Home', {
              username
          }); 
        } else {
          // TODO: do we prompt again?
          throw new Error('You done goofed');
        }
      }).catch((ex) => {
        // TODO: figure out how to extract a usable error message
        console.error('error', ex);
        console.log(ex.message);
      });
    }


    return (
        <View style={[styles.container,{alignItems: 'center'}]}>
            <Headline style={styles.headlineStyle}>Login</Headline>
            <TextInput style={loginStyle.textInput}
                label='Username'
                mode='outlined'
                autoCorrect={false}
                autoCapitalize='none'
                value={username}
                onChangeText={username => setUsername(username)}
            />
            <TextInput style={loginStyle.textInput}
            label='Password'
            mode='outlined'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password)}
            />
            <View style={loginStyle.buttonCheckboxArea}>
                <View style={[loginStyle.color,loginStyle.sideBySide,loginStyle.checkboxView]}>
                    <Checkbox
                        disabled={false}
                        status={willSaveUser ? "checked" : "unchecked"}
                        onPress={() => setWillSaveUser(!willSaveUser)}
                    />
                    <Text style={loginStyle.checkboxText}>Remember Me</Text>
                </View>

                <View style={[loginStyle.color,loginStyle.buttonView ]}>
                    <Button
                        icon='account'
                        mode='contained' 
                        accessibilityLabel='Login'
                        onPress={() => {
                          const loginInfo : any = {
                            username,
                            password,
                            willSaveUser
                          }
                          submitLogin(loginInfo);
                        }}
                        compact={true}
                        style={[loginStyle.button]}
                    >
                        Login
                    </Button>
                </View>
            </View>
            <Button style={loginStyle.googleButton}
                color="#FFFFFF"
                onPress={() => googleLogin()}
            >
                Login with Google
            </Button>
        </View>
  );
}

const googleLogin = () => {
    console.log('Google button has been pushed.');
}


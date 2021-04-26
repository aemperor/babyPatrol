import React, { useState } from 'react';
import {Text} from "react-native"
import { Headline, TextInput, Button, Checkbox} from 'react-native-paper';

import { View } from './Themed';

import { styles } from '../styles/BaseStyle';
import {loginStyle} from '../styles/LoginStyle'



export default function LoginScreenInfo() {
    
    const [willSaveUser,toggleWillSaveUser] = useState(false);

    let username, password;
    const loginInfo : any = {
        username: '',
        password: ''
    };

    return (
        <View style={[styles.container,{alignItems: 'center'}]}>
            <Headline style={styles.headlineStyle}>Login</Headline>
            <TextInput style={loginStyle.textInput}
                label='Username'
                mode='outlined'
                value={username}
                onChangeText={username => loginInfo.username = username}
            />
            <TextInput style={loginStyle.textInput}
            label='Password'
            mode='outlined'
            secureTextEntry={true}
            value={password}
            onChangeText={password => loginInfo.password = password}
            />
            <View style={loginStyle.buttonCheckboxArea}>
                <View style={[loginStyle.color,loginStyle.sideBySide,loginStyle.checkboxView]}>
                    <Checkbox
                        disabled={false}
                        status={willSaveUser ? "checked" : "unchecked"}
                        onPress={() => toggleWillSaveUser(!willSaveUser)}
                    />
                    <Text style={loginStyle.checkboxText}>Remember Me</Text>
                </View>

                <View style={[loginStyle.color,loginStyle.buttonView ]}>
                    <Button
                        icon='account'
                        mode='contained' 
                        accessibilityLabel='Login'
                        onPress={() => login(loginInfo,willSaveUser)}
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

const login = (loginInfo : object, checkbox : boolean) => {
    const data =  {
        loginInfo,
        checkbox: checkbox,
    };
    console.log(data);
}


const googleLogin = () => {
    console.log('Google button has been pushed.');
}


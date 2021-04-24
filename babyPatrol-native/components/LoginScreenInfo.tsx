import React, { useState } from 'react';
import {Text,StyleSheet,Dimensions} from "react-native"
import CheckBox from '@react-native-community/checkbox';
import { Headline, Subheading, TextInput, Button, Avatar } from 'react-native-paper';

import { View } from './Themed';

import { styles } from '../styles/BaseStyle';




export default function LoginScreenInfo() {
    const [willSaveUser,toggleWillSaveUser] = useState(false);

    let username, password;
    const loginInfo : any = {
        username: '',
        password: ''
    };


  return (
    <View style={[styles.container,{alignItems:'center'}]}>
      <Headline style={styles.headlineStyle}>Login</Headline>
      
      <TextInput style={LoginStyle.textInput}
        label='Username'
        mode='outlined'
        value={username}
        onChangeText={username => loginInfo.username = username}
      />
      <TextInput style={LoginStyle.textInput}
        label='Password'
        mode='outlined'
        secureTextEntry={true}
        value={password}
        onChangeText={password => loginInfo.password = password}
        />
        <View style={[LoginStyle.sideBySide,LoginStyle.color]}>
            <View style={[LoginStyle.color,LoginStyle.sideBySide,LoginStyle.checkboxView]}>
                <CheckBox
                    disabled={false}
                    value={willSaveUser}
                    onValueChange={(newValue) => toggleWillSaveUser(newValue)}
                    style={{alignContent:"flex-start"}}
                />
                <Text style={[LoginStyle.checkboxText,{alignContent:"flex-end"}]}>Remember Me</Text>
            </View>
            <View style={[LoginStyle.color,LoginStyle.buttonView ]}>
                <Button
                    icon='account'
                    mode='contained' 
                    accessibilityLabel='Login'
                    onPress={() => login(loginInfo,willSaveUser)}
                    compact={true}
                    style={[LoginStyle.button]}
                >
                    Login
                </Button>
            </View>
        </View>
            <Button style={[LoginStyle.googleButton]}
            color="#FFFFFF"
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
        windowWidth: .05 * windowWidth,
    };
    console.log(data);
}


const googleLogin = () => {
    console.log('Google button has been pushed.');
}


const windowWidth = Dimensions.get('window').width;
let margin = .10 * windowWidth
const LoginStyle = StyleSheet.create({  
    color: {
        backgroundColor: '#FFFFFF',
    },
    button: {
        marginTop: "16%",
        width: '90%',
        marginRight: "auto",
        marginBottom: '10%',
    },
    sideBySide: {
        flexDirection:'row',
    },
    checkboxView: {
        marginLeft: '3%',
        marginTop: '8%',
        flex:1,
    },
    checkboxText: {
        marginTop:5,
    },
    buttonView: {
        flex:1,
        alignContent:"flex-end"
    },
    googleButton: {
        backgroundColor: '#4285F4',
        width: '60%',
        color: '#FFFFFF',
    },
    textInput: {
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        width: '90%',
        justifyContent: 'flex-start',
        marginTop: 20,
    }
});
import React, { useState } from 'react';
import {Text,StyleSheet,Dimensions} from "react-native"
// import CheckBox from '@react-native-community/checkbox';
import { Headline, Subheading, TextInput, Button, Avatar } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';

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
        <View style={[LoginStyle.sideBySide,LoginStyle.color, {marginTop:20}]}>
            <View style={[LoginStyle.color,LoginStyle.sideBySide,LoginStyle.checkboxView]}>
                <Checkbox
                    disabled={false}
                    status={willSaveUser ? "checked" : "unchecked"}
                    onPress={() => toggleWillSaveUser(!willSaveUser)}
                    // style={{alignContent:"flex-start"}}
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
    };
    console.log(data);
}


const googleLogin = () => {
    console.log('Google button has been pushed.');
}



const LoginStyle = StyleSheet.create({  
    color: {
        backgroundColor: '#FFFFFF',
    },
    button: {
        width: '90%',
        marginBottom: '10%',
    },
    sideBySide: {
        flexDirection:'row',
    },
    checkboxView: {
        alignItems:'baseline',
        justifyContent:"center",
        flex:1,    
    },
    checkboxText: {
        textAlign: "center",
        alignSelf:'center'
    },
    buttonView: {
        flex:1,
        justifyContent:"center",
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
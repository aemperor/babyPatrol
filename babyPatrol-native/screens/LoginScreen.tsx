import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import LoginScreenInfo from '../components/LoginScreenInfo';
import { View } from '../components/Themed';
import { styles } from '../styles/BaseStyle';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Login() {

    const appliedStyles = [ 
        styles.container,
        {flex:1}
    ];
    
    return(
        <View style={appliedStyles}>
            <Appbar.Header>
                <Appbar.Content title="Login"/>
            </Appbar.Header>
            <LoginScreenInfo />
        </View>
    );

}


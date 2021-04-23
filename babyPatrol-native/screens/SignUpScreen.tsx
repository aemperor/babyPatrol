import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import SignUpScreenInfo from '../components/SignUpScreenInfo';
import { View } from '../components/Themed';
import { styles } from '../styles/BaseStyle';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function SignUp() {
 return(
  <View style={styles.container}>
    <Appbar.Header>
      <Appbar.Content title="Sign Up"/>
    </Appbar.Header>
    <SignUpScreenInfo />
  </View>
 );

}

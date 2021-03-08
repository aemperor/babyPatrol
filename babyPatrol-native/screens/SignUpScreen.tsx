import * as React from 'react';

import SignUpScreenInfo from '../components/SignUpScreenInfo';
import { Text, View } from '../components/Themed';

import { styles } from '../styles/BaseStyle';

export default function SignUp({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Let's get you signed up!</Text>
      <View style={styles.separator}></View>
      <SignUpScreenInfo navigation={ navigation }/> 
    </View>
  );
}

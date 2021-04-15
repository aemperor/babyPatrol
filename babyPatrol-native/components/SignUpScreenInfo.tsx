import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';

import { styles } from '../styles/BaseStyle';
import { TextInput } from 'react-native-gesture-handler';


export default function SignUpScreenInfo() {

  return (
    <View style={styles.container}>
        <TextInput style={ styles.input }
          placeholder="Create username"
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <TextInput style={ styles.input }
          placeholder="E-mail"
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <TextInput style={ styles.input }
          placeholder="Create password"
          secureTextEntry
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <TouchableOpacity style={ styles.button }>
          <Text>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}


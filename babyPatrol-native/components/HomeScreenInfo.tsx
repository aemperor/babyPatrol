import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/BaseStyle';
import { Headline, Avatar } from 'react-native-paper';
import { View } from './Themed';

export default function HomeScreenInfo({ username } : { username : string}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Headline>Welcome, {username}!</Headline>
      <Avatar.Image style={styles.signUpImage} size={150} source={require('../assets/images/babyPatrolLogo/babyPatrolLogo.002.png')} />
    </View>
  );
}
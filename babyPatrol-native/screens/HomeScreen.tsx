import * as React from 'react';

import BabyPatrolHamburgerHeader from '../components/HamburgerHeader';
import HomeScreenInfo from '../components/HomeScreenInfo';
import { Text, View } from '../components/Themed';

import { styles } from '../styles/BaseStyle';

export default function HomeScreen({ username, navigation }: { username:string, navigation:any }) {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Welcome, {username}!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreenInfo path="/screens/HomeScreen.tsx" /> 
    </View>
  );
}
 
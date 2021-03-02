import * as React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

import BabyPatrolHeader from '../components/Header';
import HomeScreenInfo from '../components/HomeScreenInfo';
import { Text, View } from '../components/Themed';

console.log(Constants.statusBarHeight);
 
export default function HomeScreen({ username, navigation }: { username:string, navigation:any }) {
  return (
    <View style={styles.container}> 
      <BabyPatrolHeader navigation={navigation} />
      <Text style={styles.title}>Welcome, {username}!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreenInfo path="/screens/TabOneScreen.tsx" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

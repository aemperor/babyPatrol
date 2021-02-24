import * as React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreenInfo from '../components/HomeScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen({ username }: { username:string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, ${username}!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

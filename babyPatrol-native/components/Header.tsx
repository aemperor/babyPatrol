import * as React from 'react';

import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';
import { StyleSheet } from 'react-native';


export default function BabyPatrolHeader({ navigation }: {navigation : any}) {
  return (
    <Header style={styles.header} leftComponent={<Icon style={styles.hamgburgerIcon} name="menu" onPress={() => navigation.openDrawer()} />} />
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    marginTop: Constants.statusBarHeight,
  },
  hamgburgerIcon: {
    marginBottom: 15,
    marginLeft: 10
  }
});

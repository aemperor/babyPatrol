import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { View } from '../components/Themed';
import { styles } from '../styles/BaseStyle';
import HomeScreenInfo from '../components/HomeScreenInfo';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Home() {
  const username = 'myUser'; // TODO: pull from redux
  return(
    <View style={styles.homeContainer}>
      <Appbar.Header>
        <Appbar.Content title="Home"/>
      </Appbar.Header>
      <HomeScreenInfo username={ username }/>
    </View>
  );
}

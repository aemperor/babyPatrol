import * as React from 'react';

import { Header } from 'react-native-elements';
import { Icon } from 'native-base';

import { styles } from '../styles/BaseStyle';

export default function BabyPatrolHamburgerHeader({ navigation }: {navigation : any}) {
  return (
    <Header style={styles.header} leftComponent={<Icon style={styles.hamgburgerIcon} name="menu" onPress={() => navigation.openDrawer()} />} />
  )
}

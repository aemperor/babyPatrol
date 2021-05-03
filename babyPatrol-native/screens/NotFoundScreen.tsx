import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation/navigationParamList';
import { styles } from '../styles/BaseStyle';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

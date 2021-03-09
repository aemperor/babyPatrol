import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import * as React from 'react';
import { Icon } from 'native-base';
// options={{ headerTitle: 'Home' }}
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TabOneParamList, TabTwoParamList, HomeParamList, SignUpParamList } from '../types';
import { styles } from '../styles/BaseStyle';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() { 
  return (
    <Drawer.Navigator
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
      />
      <Drawer.Screen
        name="Sign Up"
        component={SignUpNavigator}
      />
      <Drawer.Screen
        name="TabTwo"
        component={TabTwoNavigator}
      />
    </Drawer.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: styles.header,
          headerLeft: (navigation) => (
            <Icon style={styles.hamgburgerIcon} name="menu" onPress={() => navigation.openDrawer()} />
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

const SignUpStack = createStackNavigator<SignUpParamList>();

function SignUpNavigator() {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </SignUpStack.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

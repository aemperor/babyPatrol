import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const SignUpRoute = () => <SignUpScreen />;

const LoginRoute = () => <SignUpRoute />;

const HomeRoute = () => <HomeScreen username='person' />;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomTabNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'signup', title: 'SignUp', icon: 'pencil' },
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'recents', title: 'Recents', icon: 'history' },
    { key: 'login', title: 'Login', icon: 'lock'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    signup: SignUpRoute,
    home: HomeRoute,
    recents: RecentsRoute,
    login: LoginRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabNavigation;
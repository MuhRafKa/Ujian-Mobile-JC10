import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import Home from './Home';
import StackProfile from './StackProfile';
import PostPhoto from './PostPhoto';

export default createAppContainer(createBottomTabNavigator(
  {
    Home: Home,
    PostPhoto: PostPhoto,
    Profile: StackProfile  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if(routeName === 'Profile') {
          iconName = `account-box`;
        } else if(routeName === 'PostPhoto') {
          iconName = `add-box`;
        }
        // You can return any component that you like here!
        return <Icon 
                  name={iconName} 
                  size={35} 
                  color={tintColor}
                />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false
    },
  }
));
// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
// import { Image } from 'react-native';
// import SkillsForm from '../Components/SkillsForm';
// import Threads from '../Components/Threads';
// import Ask from '../Components/Ask';
// import Profile from '../Components/Profile';

// const profilePic = require('../assets/profile.jpg');
// const askIcon = require("../assets/ask.jpg");

// const BottomNavigationBar = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'threads', title: 'Threads', icon: 'home' },
//     { key: 'Ask', title: 'Ask', icon: askIcon },
//     { key: 'SkillsForm', title: 'Skills Form', icon: 'format-list-bulleted' },
//     { key: 'Profile', title: 'Profile', icon: profilePic },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     threads: Threads,
//     Ask: Ask,
//     SkillsForm: SkillsForm,
//     Profile: Profile,
//   });

//   // const renderIcon = ({ route, focused, color, size } : { route: any; focused: boolean; color: string; size: number }) => {
//   //   return (
//   //     <Image
//   //       source={route.icon}
//   //       style={{ width: size, height: size, backgroundColor: 'transparent' }} // Adjust size and color as needed
//   //     />
//   //   );
//   // };

//   const renderIcon = ({ route, focused, color }: { route: any; focused: boolean; color: string }) => {
//   const { key, icon } = route;
//   let iconSource = null;

//   // Determine the icon source based on the route key
//   switch (key) {
//     case 'threads':
//       iconSource = require('../assets/logo.png');
//       break;
//     case 'Ask':
//       iconSource = require("../assets/ask.jpg");
//       break;
//     case 'SkillsForm':
//       // Adjust this path as needed
//       iconSource = require("../assets/skills.jpg");
//       break;
//     case 'Profile':
//       // Adjust this path as needed
//       iconSource = require("../assets/profile.jpg");
//       break;
//     default:
//       iconSource = null;
//   }

//   // Render the icon image
//   return iconSource ? <Image source={iconSource} style={{ width: 24, height: 24, tintColor: color }} /> : null;
// };

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//       renderIcon={renderIcon}
//       barStyle={{ backgroundColor: 'transparent' }}
//     />
//   );
// };

// export default BottomNavigationBar;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Image, ImageStyle} from 'react-native';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import ProjectForm from '../Components/ProjectForm';
import Register from '../Components/Register';
import RoadmapComponent from '../Components/RoadMap';
import SkillsForm from '../Components/SkillsForm';
import Threads from '../Components/Threads';
import UserProfile from '../Components/UserProfile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppAll"
        component={AppNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RoadMap"
        component={RoadmapComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconStyle: ImageStyle = {width: 24, height: 24};
          if (route.name === 'Threads') {
            iconName = focused
              ? require('../assets/logo.png') // Image for active state
              : require('../assets/logo.png'); // Image for inactive state
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../assets/profile.png') // Image for active state
              : require('../assets/profile.png'); // Image for inactive state
          } else if (route.name === 'SkillsForm') {
            iconName = focused
              ? require('../assets/skills.png') // Image for active state
              : require('../assets/skills.png'); // Image for inactive state
          } else if (route.name === 'ProjectForm') {
            iconName = focused
              ? require('../assets/profile.png') // Image for active state
              : require('../assets/profile.png'); // Image for inactive state
          }

          // Add outline style if focused
          if (focused) {
            iconStyle = {...iconStyle, borderWidth: 2, borderColor: 'blue'};
          }
          // You can return any component here
          return <Image source={iconName} style={{width: 24, height: 24}} />;
        },
      })}>
      <Tab.Screen name="Threads" component={Threads} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="SkillsForm" component={SkillsForm} />
      <Tab.Screen name="ProjectForm" component={ProjectForm} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigator;

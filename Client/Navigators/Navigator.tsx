import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hello from '../Components/Hello';
import ProjectForm from '../Components/ProjectForm';
import SkillsForm from '../Components/SkillsForm';
import Threads from '../Components/Threads';

//Tabs
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === 'threads') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile') {
            // Handle other cases if needed
          }
          // Return your icon component here based on the conditions
        },
      })}>
      <Tab.Screen name="threads" component={Threads} />
      <Tab.Screen name="hello" component={Hello} />
      <Tab.Screen name="SkillsForm" component={SkillsForm} />
      <Tab.Screen name="ProjectForm" component={ProjectForm} />
    </Tab.Navigator>
  );
}

function Navigator() {
  return <TabGroup />;
}

export default Navigator;

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task1 from './src/screens/Task1';

const navigator = createStackNavigator(
  {    
    Task1:Task1
  },
  {
    initialRouteName: 'Task1',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
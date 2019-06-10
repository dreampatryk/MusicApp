import {createStackNavigator, createAppContainer} from 'react-navigation';

import Menu from './src/components/Menu/Menu';
import Training from "./src/components/Menu/Training";
import { Platform } from '@unimodules/core';

const MainNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Training: {screen: Training}
}, 
{
  headerMode: 'none'
});

const App = createAppContainer(MainNavigator);

export default App;

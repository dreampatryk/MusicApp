import {createStackNavigator, createAppContainer} from 'react-navigation';

import MenuScreen from './src/components/Screens/MainMenu/MenuScreen';
import Training from "./src/components/Screens/Training/Training";
import TutorialMenu from "./src/components/Screens/Tutorial/TutorialMenu";
import { Platform } from '@unimodules/core';

const MainNavigator = createStackNavigator({
  Menu: {screen: MenuScreen},
  Training: {screen: Training},
  Tutorial: {screen: TutorialMenu}
},
{
  headerMode: 'none'
});

const App = createAppContainer(MainNavigator);

export default App;

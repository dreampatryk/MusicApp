import {createStackNavigator, createAppContainer} from 'react-navigation';

import MenuScreen from './src/components/Screens/MainMenu/MenuScreen';
import Training from "./src/components/Screens/Training/Training";
import TutorialMenu from "./src/components/Screens/Tutorial/TutorialMenu";
import Tutorial from "./src/components/Screens/Tutorial/Tutorial";

const MainNavigator = createStackNavigator({
  Menu: {screen: MenuScreen},
  Training: {screen: Training},
  TutorialMenu: {screen: TutorialMenu},
  Tutorial: {screen: Tutorial}
},
{
  headerMode: 'none'
});

const App = createAppContainer(MainNavigator);

export default App;

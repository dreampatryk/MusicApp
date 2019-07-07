import { createAppContainer, createStackNavigator } from 'react-navigation';
import Level from './src/components/Screens/Game/Level';
import StartGameMenu from './src/components/Screens/Game/StartGameMenu';
import MenuScreen from './src/components/Screens/MainMenu/MenuScreen';
import Training from './src/components/Screens/Training/Training';
import Tutorial from './src/components/Screens/Tutorial/Tutorial';
import TutorialMenu from './src/components/Screens/Tutorial/TutorialMenu';

const MainNavigator = createStackNavigator(
  {
    Menu: { screen: MenuScreen },
    Training: { screen: Training },
    TutorialMenu: { screen: TutorialMenu },
    Tutorial: { screen: Tutorial },
    StartGameMenu: { screen: StartGameMenu },
    Level: { screen: Level },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;

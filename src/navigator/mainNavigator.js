import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps96153Navigator from '../features/Maps96153/navigator';
import Add-Item96152Navigator from '../features/Add-Item96152/navigator';
import Maps96148Navigator from '../features/Maps96148/navigator';
import UserProfile96144Navigator from '../features/UserProfile96144/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps96153: { screen: Maps96153Navigator },
Add-Item96152: { screen: Add-Item96152Navigator },
Maps96148: { screen: Maps96148Navigator },
UserProfile96144: { screen: UserProfile96144Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import InformCoffee from './src/components/screen/InformCoffee'
import Food from './src/components/screen/Food'
AppRegistry.registerComponent(appName, () => App);

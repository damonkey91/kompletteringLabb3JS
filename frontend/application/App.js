import React from 'react';
import { Home } from './views/Home.js';
import {createStackNavigator} from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: { screen: Home },
},
{
  initialRouteName: "HomeRT"
});

export default class App extends React.Component {
  render() {
    {console.log("app");}
    return (
      <MyRoutes/>
    );
  }
}

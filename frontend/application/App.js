import React from 'react';
import { Home } from './views/Home.js';
import { AddQuote } from './views/AddQuote.js'
import {createStackNavigator} from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: { screen: Home },
  AddRT: { screen: AddQuote},
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

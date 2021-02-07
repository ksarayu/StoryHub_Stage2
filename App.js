import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import ReadingScreen from './screens/ReadingScreen';
import WritingScreen from './screens/WritingScreen';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}

const navigator = createBottomTabNavigator({
  Reading : {screen : ReadingScreen},
  Writing : {screen : WritingScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Reading"){
        return(
          <Image
          source={require("./assets/images/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Writing"){
        return(
          <Image
          source={require("./assets/images/write.png")}
          style={{width:45, height:45}}
        />)
        
      }
    }
  })
})

const AppContainer = createAppContainer(navigator)
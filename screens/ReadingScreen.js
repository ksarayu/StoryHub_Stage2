import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadingScreen extends React.Component{
    render(){
        return (
            <View>
              <Text style = {{textAlign : 'center', marginTop : 180, fontSize : 30}}>
                Welcome to the StoryHub reading page! Have fun reading our vast collection of online books.
              </Text>
            </View>
        );
    }
}
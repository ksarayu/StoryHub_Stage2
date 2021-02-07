import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import firebase from 'firebase'
import fs from '../Config'

export default class WritingScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            title : '',
            author : '',
            story : ''
        }
    }

    submitStory = () => {
        fs.collection("Stories").add({
            Title : this.state.title,
            Author : this.state.author,
            Story : this.state.story
        })
    }

    render(){
        return (
            <View style = {styling.container}>

                <Text style = {{textAlign : 'center', fontSize : 23, marginBottom : 30}}>
                    Start writing your story below
                </Text>

                <View style = {styling.inputView}>
                    <TextInput
                    placeholder = "Story Title"
                    style = {styling.inputBox}
                    onChangeText = {(text) => {
                        this.setState({
                          title : text
                        })
                    }}>
                    </TextInput>
                </View>

                <View style = {styling.inputView}>
                    <TextInput
                    placeholder = "Author"
                    style = {styling.inputBox}
                    onChangeText = {(text) => {
                        this.setState({
                          author : text
                        })
                      }}>
                    </TextInput>
                </View>

                <View style = {styling.inputView}>
                    <TextInput
                    placeholder = "Write your story"
                    style = {styling.inputBox}
                    multiline = {true}
                    onChangeText = {(text) => {
                        this.setState({
                          story : text
                        })
                      }}>
                    </TextInput>
                </View>

                <View>
                    <TouchableOpacity
                    style = {styling.submitButton}
                    onPress = {async () => {
                        this.submitStory
                    }}>
                        <Text style = {styling.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20
    },
    submitButton:{
        backgroundColor: 'white',
        marginTop : 25,
        padding : 10,
        width: 100,
        borderWidth: 3,
        borderColor : "cadetblue"
    },
    submitButtonText : {
        fontSize: 15,
        textAlign: 'center',
        color : 'cadetblue'
    }
})
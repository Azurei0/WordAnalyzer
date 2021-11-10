/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from "react";
 import {StyleSheet, Text, View, TextInput, Button, useColorScheme} from "react-native";
  

  export default class App extends Component{

    constructor(){
      super();
      this.state = {
        wordInput: ' ',
        totalCharacter: 0,
        vowelCount: 0,
        consonantCount: 0,
      }
    }

    
    updateCount(){ 
      var inputArray = this.state.wordInput.split('');
      this.setState({totalCharacter: 0, consonantCount: this.state.consonantCount= 0, vowelCount: this.state.vowelCount= 0});
      this.setState({totalCharacter: inputArray.length});
      for(var i=0;i < inputArray.length; i++){
        
        switch(inputArray[i]){
          case'A':case'E':case'I':case'O':case'U':case'a':case'e':case'i':case'o':case'u': {this.setState({vowelCount: this.state.vowelCount+=1});}break;
          case ' ': break;
          default:  this.setState({consonantCount: this.state.consonantCount+=1});
        }
      }
    }

  
    render(){
      return(
        <View style={styles.container}>
              <Text style={styles.apptitle}>Word Analyzer 2000</Text>
              <Text style={styles.prompt}>Word Input</Text>
              <TextInput style={styles.inputstyle}
                //defaultValue='Type Here!'
                placeholder='Type Here!'
                onChangeText={(text) => this.setState({wordInput: text})}
                />
              <Button title='Analyze!' onPress={() => this.updateCount()}/>
              <Text style={styles.output}>Word: {this.state.wordInput}</Text>
              <Text style={styles.output}>Vowels: {this.state.vowelCount}</Text>
              <Text style={styles.output}>Consonants: {this.state.consonantCount}</Text>
              <Text style={styles.output}>No of Characters: {this.state.totalCharacter}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      borderColor: 'blue',
      borderWidth: 2,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#D6D5D5',
    },

    apptitle: {
      padding: 25,
      color: '#2716C2',
      fontSize: 35,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    
    prompt: {
      fontSize: 28,
      color: 'green',
      padding: 15,
    },

    inputstyle: {
      padding: 25,
      color: 'black',
      borderWidth: 2,
      borderColor: 'red',
      margin: 25,
    },

    output: {
      padding: 20,
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      fontSize: 20,

    }
    
  })

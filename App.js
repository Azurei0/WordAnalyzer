/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from "react";
 import {StyleSheet, Text, View, TextInput, Button} from "react-native";
  
//    render() { 
//      return ( 
//        <View style={styles.container}> 
//          <Text style={styles.header}>My Biodata</Text> 
//          <Text style={styles.contents}>My name is: {this.state.name}</Text>  
//          <Text style={styles.contents}>Address: {this.state.address}</Text>
//          <Text style={styles.counter}onPress={() => this.updateCount()}> {this.state.count} </Text> 
//          <Text style={styles.contents}onPress={() => this.setState({count: 0})}> Reset</Text>  
//        </View> 
//      );  
//    } 
//  } 
    
 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  *
  * @format
  * @flow strict-local
  */ 

  export default class App extends Component{

    constructor(){
      super();
      this.state = {
        wordInput: ' ',
        totalCharacter: 0,
        vowelCount: 0,
        consonantCount: 0,
        //inputArray: [],
      }
    }

    // splitCountWordInput(){
    //   var inputArray = [];
    //   inputArray = this.state.wordInput.split('');
    //   var vowelCount = 0, consonantCount = 0;
    //   for(var i=0;i <= inputArray.length; i++){
    //     switch(this.state.inputArray[i]){
    //       case'A','E','I','O','U','a','e','i','o','u': vowelCount+=1;;
    //       default:  consonantCount+=1;
    //     }
    //   }
    // }
    
    updateCount(){ 
      var inputArray = this.state.wordInput.split('');
      this.setState({totalCharacter: this.state.totalCharacter=0, consonantCount: this.state.consonantCount= 0, vowelCount: this.state.vowelCount= 0});
      this.setState({totalCharacter: inputArray.length});
      for(var i=0;i < inputArray.length; i++){
        
        switch(inputArray[i]){
          case'A':case'E':case'I':case'O':case'U':case'a':case'e':case'i':case'o':case'u': {this.setState({vowelCount: this.state.vowelCount+=1});}
          default:  this.setState({consonantCount: this.state.consonantCount+=1});
        }
      }
    }

  
    render(){
      return(
        <View>
              <Text>Word Analyzer 2000</Text>
              <Text>Word Input</Text>
              <TextInput
                //defaultValue='Type Here!'
                placeholder='Type Here'
                onChangeText={(text) => this.setState({wordInput: text})}
                />
              <Button title='Analyze!' onPress={() => this.updateCount()}/>
              <Text>Word: {this.state.wordInput}</Text>
              <Text>Vowels: {this.state.vowelCount}</Text>
              <Text>Consonants: {this.state.consonantCount}</Text>
              <Text>No of Characters: {this.state.totalCharacter}</Text>
        </View>
      );
    }
  }
  
  //export default App;
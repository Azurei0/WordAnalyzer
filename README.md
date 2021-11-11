# Word Analyzer

Pseudocode

- initialize app State
```
constructor() {
		initialize state:
		wordInput=' ' // to initialize type string to get TextInput
		totalCharacter= 0 // to count total characters typed
		vowelCount= 0 //  counter for vowels
		consonantCount= 0 // counter for consonants
{
```
- render user interface
```
<View>
<Text>Word Analyzer</Text> //title
<Text>Prompt Word</Text> //input prompt
<TextInput
	placeholder= 'Type Here!' // secondary input prompt in text space
	onChangeText = (text) => setState(wordInput: text) // update text into WordInput
													   // on every text change
/>
<Button
	title= 'Analyze!' // text on the button
	onPress = () => updateCount() // call updateCount function to analyze word
/>
<Text>Word: {this.state.wordInput}</Text> // output for words user typed
<Text>Vowels: {this.state.vowelCount}</Text> // output for vowel counter
<Text>Consonants: {this.state.ConsonantCount}</Text> // output for consonant counter
<Text>No of Characters: {this.state.totalCharacter}</Text> // output for total character 
														   // counter
</View>
```
- function and logic for the application
```
updateCount(){
	inputArray = this.state.wordInput.split() // split wordInput string into array of char
	setState(totalCharacter: 0, consonantCount: 0, vowelCount: 0) // reinitialize on every function call
	setState(totalCharacter: inputArray.length) // set totalCharacter to inputArray length
	for(i=0; i<inputArray.length; i++){ // loop for switch checks
		switch(inputArray[i]){
		case '<vowels>': setState(vowelCount+=1); break; // increase counter for vowel
		case ' ': break; // for not counting whitespaces
		default: setState(consonantCount+=1); break; // increase counter for consonant by default
		}
	}
}
```

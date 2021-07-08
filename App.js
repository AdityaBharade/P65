import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
/*import db from './localdb';*/


export default class App extends React.Component {

  constructor() {

    
    super();


    this.state = {
      name:''
    };

    speak = () => {
      var thingToSay=this.state.name;
      Speech.speak(thingToSay)
  }
  }
  render () {

    return (
     
<View>

<Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: 'Text To Speech',
            style: { color: 'black', fontSize: 20, fontWeight: 'bold' },
          }}
        />

      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => {
          this.setState({
            name: text,
          });
        }}
        value={this.state.message}
      />
      <TouchableOpacity
          style={styles.button}
          onPress={this.state.speak}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}> ENTER</Text>
        </TouchableOpacity>
</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    borderRadius: 50,
  },
  inputBox: {
    backgroundColor: 'white',
    borderWidth: 3,
    marginTop: 20,
    height: 40,
    textAlign: 'center',
    borderRadius: 20,
    width: 170,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 40,
    marginLeft: 17,
    textAlign: 'center',
    borderRadius: 20,
    width: 150,
    alignSelf: 'center',
  },
});


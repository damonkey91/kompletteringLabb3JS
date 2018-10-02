import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export class AddQuote extends React.Component {
  static navigationOptions = {
    header: null
  }

constructor(props){
  super(props)
  this.state = {text: ""}
}

sendQuoteToDB(){
  fetch('http://192.168.1.75:3000/', {
    body: JSON.stringify({quote: this.state.text}),
    headers:{
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(response => response.json())
  .then(result => {
    console.log('Här postas till databasen');
  })
}

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {this.setState({text})}}
          value={this.state.text}
          placeholder='Positive quote'
          multiline={true}
          underlineColorAndroid='transparent'/>
        <Button
          style={styles.button}
          title="Send"
          onPress={() => {
            this.sendQuoteToDB()
            this.setState({text: ""})
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#737373',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor:'purple',
    borderBottomWidth:1,
    marginBottom: '5%'
  },
  button: {

  }
})

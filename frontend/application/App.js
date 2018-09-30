import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import iconAdd from './assets/add.png';

export default class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    quote: " "
  }
}

  fetchPositiveQute(){
      fetch('http://127.0.0.1:3000/one')
      .then(response => response.json())
      .then(result => {
        console.log('Här fetchas från databasen');
        console.log(result);
        this.setState({quote: result.quote})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.quote}</Text>
        <Button
          onPress={() => this.fetchPositiveQute()}
          title="Get positive quote"
          color="#841584"
        />
      <TouchableHighlight style={styles.imageContainer} onPress={() => {console.log("frefrefrefrefrefrefrefrefre");}}>
        <Image

          source={require('./assets/add.png')}
          style={styles.iconButton}
          />
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#737373',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    margin: '5%',
    borderRadius: 360,
    backgroundColor: '#41727E',
    elevation: 5
  },
  iconButton: {
    borderRadius: 360,
  }
});

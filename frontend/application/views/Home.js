import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
constructor(props) {
  super(props)
  this.state = {
    quote: " "
  }
}

fetchPositiveQute(){
  console.log("i fetchen");
    fetch('http://192.168.1.75:3000/one')
    .then(response => response.json())
    .then(result => {
      console.log('Här fetchas från databasen');
      console.log(result);
      this.setState({quote: result.quote})
    })
}

  render() {
    const {navigate} = this.props.navigation;
    {console.log("home");}
    return (
      <View style={styles.container}>
        <Text>{this.state.quote}</Text>
        <Button
          onPress={() => this.fetchPositiveQute()}
          title="Get positive quote"
          color="#841584"
        />
      <TouchableHighlight style={styles.imageContainer} onPress={() => {navigate("AddRT")}}>
        <Image

          source={require('../assets/add.png')}
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text,

} from 'react-native';
import ChoiceButtons from './Components/ChoiceButtons';
import CHOICES from './choices'
import ChoiceCard from './Components/ChoiceCard';
import Header from './Components/Header';
import {randomComputerChoice,getRoundOutcome} from './untils'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: 'Make your choice'
    }
  }

  onChoicePress = (choice) => {
    const userChoice = CHOICES.find(item => item.name === choice)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    this.setState({ userChoice, computerChoice, result })

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header result={this.state.result} />
        </View>
        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <ChoiceCard playerName="YOU"
              choice={this.state.userChoice}
            />
            <Text>VS</Text>
            <ChoiceCard playerName="COMP"
              choice={this.state.computerChoice} />
          </View>

        </View>
        <View style={styles.choiceButtons}>
          <View style={styles.buttonContainer}>
            <ChoiceButtons onButtonPress={this.onChoicePress} ></ChoiceButtons>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.15,
  },
  playArea: {
    flex: 0.55,

  },
  choiceButtons: {
    flex: 0.3,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 20,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },

});

export default App;

// Dice.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dice = ({ value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.dice}>
        <Text style={styles.diceValue}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  diceValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Dice;


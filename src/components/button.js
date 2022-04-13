import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
export function Button({ onPress }){
  return (
    <TouchableOpacity 
    style={styles.button}
    activeOpacity={.7}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00F9AC',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#1f1e25',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
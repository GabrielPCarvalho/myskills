import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest } : ButtonProps){
  return (
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.7}
    {...rest}
  >
    <Text style={styles.buttonText}>{title}</Text>
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
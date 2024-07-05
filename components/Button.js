import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, buttonColor, textColor, width, height, borderColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: buttonColor, width: width, height: height, borderColor: borderColor }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    // paddingVertical: 12,
    // paddingHorizontal: 24,
    // marginVertical: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Button;

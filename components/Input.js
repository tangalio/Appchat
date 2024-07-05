import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ 
  placeholder, 
  value, 
  onChangeText, 
  inputColor, 
  textColor, 
  width, 
  height, 
  borderColor,
  placeholderTextColor
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        { 
          backgroundColor: inputColor, 
          width: width, 
          height: height, 
          borderColor: borderColor, 
          color: textColor 
        }
      ]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || '#999'}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
  },
});

export default Input;

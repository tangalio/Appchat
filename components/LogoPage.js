import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'; // Đường dẫn tới file Button.js

const LogoPage = () => {
  const handlePress = () => {
    console.log("Let's Go button pressed");
    // Thêm logic xử lý khi nhấn nút
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Let's Go"
          onPress={handlePress}
          buttonColor="#4F4F4F" // Màu nền nút
          textColor="#FFFFFF"  // Màu chữ nút
          width="90%"
          height={48}
          borderColor="#4F4F4F"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Màu nền xám nhạt
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    // padding: 16,
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
});

export default LogoPage;

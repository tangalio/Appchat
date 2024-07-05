// LogoScreen.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
const LogoScreen = ({ navigation }) => {
    const [text, setText] = useState('');

    const handleTextChange = (newText) => {
        setText(newText);
    };

    const handlePress = () => {
        // Xử lý khi nút được nhấn
        console.log('Button pressed');
    };
    const handleLetsGoPress = () => {
        // Xử lý sự kiện khi nhấn vào nút "Let's Go"
        // Ví dụ: Chuyển hướng đến màn hình tiếp theo
        navigation.navigate('Home'); // Thay 'Home' bằng tên màn hình mong muốn
    };

    return (
        <View style={styles.container}>
            <Button
                title="Let's go"
                onPress={handlePress}
                buttonColor="#505050"
                textColor="#FFFFFF"
                width={"90%"}
                height={"5%"}
                borderColor="#505050"
            />
            <Input
                placeholder="Enter text"
                value={text}
                onChangeText={handleTextChange}
                inputColor="#FFFFFF"
                textColor="#000000"
                width={"90%"}
                height={"7%"}
                borderColor="#CCCCCC"
                placeholderTextColor="#AAAAAA"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LogoScreen;

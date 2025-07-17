import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const About = () => {
    return (
        <ImageBackground
            source={require("../assets/images/bg.jpg")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.contentContainer}>
                    <Ionicons name="information-circle" size={48} color="white" style={styles.icon} />
                    <Text style={styles.title}>About Our App</Text>
                    
                    <Text style={styles.description}>
                        This is a powerful task management application designed to help you organize your daily activities efficiently.
                        {"\n\n"}
                        Developed with ❤️ using React Native and Expo Router for seamless navigation.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(86, 4, 86, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    contentContainer: {
        width: '90%',
        maxWidth: 400,
        alignItems: 'center'
    },
    icon: {
        marginBottom: 15
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        lineHeight: 24,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    }
});

export default About;
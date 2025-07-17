// Importing the core React library so we can use JSX and create components
import React from 'react';
import { Link } from "expo-router";

// Importing specific components from the React Native Library
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

// Creating a functional component called Index
const Index = () => {
  // The component returns JSX (React's syntax extension for rendering UI)
  return (
   <ImageBackground
  source={require("../assets/images/bg.jpg")}
  style={styles.background}
  resizeMode="cover" // Ensures the image covers the whole screen properly
>
  <View style={styles.overlay}>
    <Text style={styles.title}>Welcome to Task Manager</Text>
  </View>

  <Link href="/TaskInput" asChild>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Add a Task</Text>
    </TouchableOpacity>
  </Link>
</ImageBackground>
  );
};

// StyleSheet for the component
const styles = StyleSheet.create({
   background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(86, 4, 86, 0.5)", 
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff", // Coral color for better visibility
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    opacity: 0.3,
    marginTop: 20, // Adds spacing below the title
  },
  buttonText: {
    color: "black", // Ensures text is visible    
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default Index;
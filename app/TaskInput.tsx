import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

const Index = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
      setIsInputVisible(false);
    }
  };

  const deleteTask = (key: number) => {
    const updatedTasks = tasks.filter((task, index) => index !== key);
    setTasks(updatedTasks);
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Tasks</Text>
        <ScrollView style={styles.taskList}>
          {tasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskText}>{task}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(index)}
              >
                <Text style={styles.deleteButtonText}>-</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {!isInputVisible && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setIsInputVisible(true)}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        )}

        {isInputVisible && (
          <TextInput
            style={styles.input}
            placeholder="Enter new task..."
            placeholderTextColor="#aaa"
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={addTask}
          />
        )}
      </View>
    </ImageBackground>
  );
};

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
    width: '90%',
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  taskList: {
    width: '100%',
    maxHeight: '60%',
    marginBottom: 20,
  },
  taskItem: {
    backgroundColor: 'rgba(231, 222, 232, 0.2)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'lilac',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Index;
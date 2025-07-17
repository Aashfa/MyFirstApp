import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#be92cbff',
          borderTopWidth: 1,
          borderTopColor: '#bd80cbff',
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarIconStyle: {
          marginBottom: -5,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="TaskInput" 
        options={{ 
          title: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done" color={color} size={size} />
          ),
        }} 
      />
    </Tabs>
  );
}
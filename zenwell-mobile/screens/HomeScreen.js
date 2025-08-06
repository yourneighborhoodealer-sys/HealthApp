import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to ZenWell</Text>
      <Text style={styles.paragraph}>
        ZenWell is your personal wellness companion. Track your habits, jot down
        your thoughts in the journal, and engage in AI-assisted conversations to
        keep your mind and body in harmony.
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Personal journal for daily reflections</Text>
        <Text style={styles.listItem}>• Habit tracker for water, sleep, exercise and more</Text>
        <Text style={styles.listItem}>• AI chat for on-demand wellness advice (coming soon)</Text>
        <Text style={styles.listItem}>• Settings to customize your experience</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 20,
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
  },
});
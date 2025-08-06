import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HabitsScreen() {
  const [habits, setHabits] = useState({ water: 0, sleep: 0, exercise: 0 });

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('zenwell_habits');
        if (stored) setHabits(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to load habits', err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('zenwell_habits', JSON.stringify(habits));
      } catch (err) {
        console.error('Failed to save habits', err);
      }
    })();
  }, [habits]);

  const updateHabit = (name, value) => {
    if (isNaN(value)) return;
    setHabits((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Water (glasses)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={habits.water.toString()}
          onChangeText={(val) => updateHabit('water', val)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Sleep (hours)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={habits.sleep.toString()}
          onChangeText={(val) => updateHabit('sleep', val)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Exercise (min)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={habits.exercise.toString()}
          onChangeText={(val) => updateHabit('exercise', val)}
        />
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Today's Summary</Text>
        <Text>Water: {habits.water} glasses</Text>
        <Text>Sleep: {habits.sleep} hours</Text>
        <Text>Exercise: {habits.exercise} minutes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  input: {
    width: 80,
    padding: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  summary: {
    marginTop: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#374151',
  },
});
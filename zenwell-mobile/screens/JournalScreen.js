import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JournalScreen() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Load entries from AsyncStorage on mount
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('zenwell_journal');
        if (stored) {
          setEntries(JSON.parse(stored));
        }
      } catch (err) {
        console.error('Failed to load journal entries', err);
      }
    })();
  }, []);

  useEffect(() => {
    // Save entries whenever they change
    (async () => {
      try {
        await AsyncStorage.setItem('zenwell_journal', JSON.stringify(entries));
      } catch (err) {
        console.error('Failed to save journal entries', err);
      }
    })();
  }, [entries]);

  const addEntry = () => {
    if (!entry.trim()) return;
    const newEntry = {
      id: Date.now().toString(),
      text: entry.trim(),
      date: new Date().toLocaleString(),
    };
    setEntries([newEntry, ...entries]);
    setEntry('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      <TextInput
        style={styles.input}
        value={entry}
        onChangeText={setEntry}
        placeholder="Write your thoughts here..."
        multiline
      />
      <Button title="Save Entry" onPress={addEntry} color="#4f46e5" />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryDate}>{item.date}</Text>
            <Text style={styles.entryText}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No entries yet.</Text>}
      />
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
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
  entry: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  entryDate: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  entryText: {
    fontSize: 16,
    color: '#374151',
  },
  empty: {
    marginTop: 20,
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});
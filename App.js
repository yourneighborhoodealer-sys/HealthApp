import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Platform, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
    scheduleDailyNotifications();
  }, []);

  async function scheduleDailyNotifications() {
    const times = ['09:00', '14:00', '20:00'];
    const messages = [
      'Take a deep breath. Inhale... exhale. Just for 1 minute.',
      'Ground yourself. Feel your feet on the floor.',
      'Pause and scan your body. Let go of tension.'
    ];

    for (let i = 0; i < times.length; i++) {
      const [hour, minute] = times[i].split(':').map(Number);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '🧘 Grounding Reminder',
          body: messages[i],
          sound: true,
        },
        trigger: {
          hour,
          minute,
          repeats: true,
        },
      });
    }
  }

  async function registerForPushNotificationsAsync() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission not granted for notifications');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ZenWell</Text>
      <Text style={styles.instructions}>Daily grounding reminders will be sent at 9AM, 2PM, and 8PM.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
  },
});


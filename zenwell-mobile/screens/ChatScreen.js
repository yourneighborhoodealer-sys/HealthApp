import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const placeholderResponses = [
    'I\'m here to support you. Tell me more.',
    'That sounds challenging. How are you feeling about it?',
    'Remember to breathe and be kind to yourself.',
    'Focusing on small steps can make a big difference.',
  ];

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMessage = { id: Date.now().toString(), sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    const aiMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text:
        placeholderResponses[Math.floor(Math.random() * placeholderResponses.length)],
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 600);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <Text style={styles.title}>Zen Chat</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === 'user' ? styles.messageUser : styles.messageAI,
            ]}
          >
            <Text style={item.sender === 'user' ? styles.textUser : styles.textAI}>
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  messagesContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  message: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  messageUser: {
    backgroundColor: '#4f46e5',
    alignSelf: 'flex-end',
  },
  messageAI: {
    backgroundColor: '#e5e7eb',
    alignSelf: 'flex-start',
  },
  textUser: {
    color: '#fff',
  },
  textAI: {
    color: '#374151',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginLeft: 8,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
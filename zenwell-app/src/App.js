import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

// Import page components
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import HabitsPage from './pages/HabitsPage';
import ChatPage from './pages/ChatPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation bar */}
      <NavBar />
      {/* Main content */}
      <main className="flex-1 p-4 container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
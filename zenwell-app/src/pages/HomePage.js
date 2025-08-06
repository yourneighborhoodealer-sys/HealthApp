import React from 'react';

/**
 * Home page component. Provides an overview of the ZenWell app.
 */
function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">Welcome to ZenWell</h1>
      <p className="text-gray-700 max-w-prose">
        ZenWell is your personal wellness companion. Track your habits, jot down
        your thoughts in the journal, and engage in AI-assisted conversations to
        keep your mind and body in harmony. Designed with care and simplicity,
        ZenWell helps you build healthy habits and reflect on your wellbeing.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>📝 Personal journal for daily reflections</li>
        <li>📊 Habit tracker for water, sleep, exercise and more</li>
        <li>🤖 AI chat for on-demand wellness advice (coming soon)</li>
        <li>⚙️ Customizable settings to suit your lifestyle</li>
      </ul>
    </div>
  );
}

export default HomePage;
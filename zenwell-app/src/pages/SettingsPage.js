import React, { useState, useEffect } from 'react';

/**
 * Settings page component. Allows the user to configure basic preferences.
 */
function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('zenwell_dark_mode');
    if (stored) setDarkMode(stored === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('zenwell_dark_mode', darkMode.toString());
    // Apply or remove dark mode class on body element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Settings</h2>
      <div className="flex items-center space-x-4">
        <span>Dark Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-indigo-600 relative transition-colors">
            <span
              className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"
            />
          </div>
        </label>
      </div>
      <p className="text-gray-500 max-w-prose">
        More customization options will be added here soon. Let us know what you'd
        like to see!
      </p>
    </div>
  );
}

export default SettingsPage;
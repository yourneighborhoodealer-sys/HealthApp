import React, { useState, useEffect } from 'react';

/**
 * Journal page component. Users can write daily entries that are stored in localStorage.
 */
function JournalPage() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  // Load journal entries from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('zenwell_journal');
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  // Save entries to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('zenwell_journal', JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    if (!entry.trim()) return;
    const newEntry = {
      id: Date.now(),
      text: entry.trim(),
      date: new Date().toLocaleString(),
    };
    setEntries([newEntry, ...entries]);
    setEntry('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Journal</h2>
      <div className="space-y-4">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-32 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addEntry}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Save Entry
        </button>
      </div>
      <div className="space-y-4">
        {entries.length === 0 && (
          <p className="text-gray-500">No entries yet. Start writing to see them here.</p>
        )}
        {entries.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow-sm rounded-md border border-gray-200"
          >
            <div className="text-sm text-gray-500 mb-2">{item.date}</div>
            <p className="text-gray-700 whitespace-pre-line">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JournalPage;
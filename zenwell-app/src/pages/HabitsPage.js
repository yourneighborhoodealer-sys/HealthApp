import React, { useState, useEffect } from 'react';

/**
 * Habits page component. Allows users to track simple daily habits such as water intake,
 * sleep hours, and exercise minutes. Data is stored in localStorage.
 */
function HabitsPage() {
  // Define default state
  const defaultHabits = {
    water: 0, // glasses
    sleep: 0, // hours
    exercise: 0, // minutes
  };
  const [habits, setHabits] = useState(defaultHabits);

  useEffect(() => {
    const stored = localStorage.getItem('zenwell_habits');
    if (stored) {
      setHabits(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('zenwell_habits', JSON.stringify(habits));
  }, [habits]);

  const updateHabit = (name, value) => {
    setHabits((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Habit Tracker</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="w-32">Water (glasses)</label>
          <input
            type="number"
            min="0"
            max="20"
            value={habits.water}
            onChange={(e) => updateHabit('water', parseInt(e.target.value) || 0)}
            className="w-20 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-32">Sleep (hours)</label>
          <input
            type="number"
            min="0"
            max="24"
            value={habits.sleep}
            onChange={(e) => updateHabit('sleep', parseInt(e.target.value) || 0)}
            className="w-20 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-32">Exercise (min)</label>
          <input
            type="number"
            min="0"
            max="300"
            value={habits.exercise}
            onChange={(e) => updateHabit('exercise', parseInt(e.target.value) || 0)}
            className="w-20 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">Today's Summary</h3>
        <p>Water: {habits.water} glasses</p>
        <p>Sleep: {habits.sleep} hours</p>
        <p>Exercise: {habits.exercise} minutes</p>
      </div>
    </div>
  );
}

export default HabitsPage;
# ZenWell

ZenWell is an open-source wellness companion built with **React** and **Tailwind CSS**. It helps you record journal entries, track your daily habits, and interact with an AI chat assistant (coming soon). This project is intended to serve as a foundation for a more comprehensive wellness application.

## Features

* **Journal** – Write daily reflections and keep them safe in your browser's local storage.
* **Habit Tracker** – Monitor key wellness habits like water intake, sleep and exercise.
* **AI Chat (placeholder)** – A simple chat interface ready to be connected to an AI backend.
* **Settings** – Toggle dark mode and prepare for future customization.

## Getting Started

These instructions will help you set up ZenWell locally.

### Prerequisites

* **Node.js** (version ≥ 16)
* **npm** (version ≥ 6)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourneighborhoodealer-sys/HealthApp.git
   cd HealthApp/zenwell-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   Your app should now be running at `http://localhost:3000`.

## Roadmap

This is an early prototype. The following improvements are planned:

* Integrate with a backend (e.g. Firebase or a custom API) to persist data across devices.
* Connect the chat interface to OpenAI's API for real-time wellness coaching.
* Expand the habit tracker with more customizable habits and analytics.
* Implement authentication so users can log in and sync data.
* Add push notifications for reminders and encouragement.

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request with your enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Mobile Version

If you want to run ZenWell as a native Android app, see the [`zenwell-mobile`](../zenwell-mobile) directory. It contains a React Native implementation built with Expo that can be run in the Expo Go app or via Android Studio.
# ZenWell Mobile

ZenWell Mobile is the React Native version of the ZenWell wellness companion, built with **Expo** for easy deployment to Android devices. This app allows you to track your daily habits, journal your thoughts, chat with an AI assistant (placeholder) and manage simple settings. It is designed to run natively on Android and can be previewed using **Expo Go**.

## Features

* **Home** – Overview of the application and core features.
* **Journal** – Write and save daily reflections, stored locally on the device via `AsyncStorage`.
* **Habit Tracker** – Monitor water intake, sleep hours and exercise minutes.
* **Chat** – Simple chat interface with placeholder AI responses ready to be connected to a backend.
* **Settings** – Toggle dark mode (persisted via `AsyncStorage`; UI theming not yet applied).

## Installation

### Prerequisites

* Node.js ≥ 16
* npm or Yarn
* Expo CLI (install globally with `npm install -g expo-cli`)
* Android device (e.g. Google Pixel) with **Expo Go** installed from the Play Store

### Setup

1. **Clone the repository** (if you haven’t already) and change into the mobile project:
   ```bash
   git clone https://github.com/yourneighborhoodealer-sys/HealthApp.git
   cd HealthApp/zenwell-mobile
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Expo development server**:
   ```bash
   npm start
   ```
   A QR code will appear in your terminal or browser.

## Running on your Android phone

1. **Make sure your computer and phone are on the same Wi‑Fi network.**
2. **Open Expo Go** on your Google Pixel.
3. **Scan the QR code** displayed in the terminal or the browser window after running `npm start`.
4. **Allow Expo Go to load the app**. It may take a moment to bundle the JavaScript.

### Alternate: Using Android Studio

If you prefer to run the app via Android Studio or a physical device without Expo Go:

1. Install Android Studio and set up the Android SDK.
2. Run:
   ```bash
   npm run android
   ```
   Expo CLI will build and install the app on the connected emulator or device.

## Roadmap

The mobile app is currently a prototype. Planned enhancements include:

* Integration with a backend (Firebase or custom API) for synchronizing data across devices.
* Real AI chat via the OpenAI API or similar service.
* Enhanced theming including dark mode support throughout the UI.
* Push notifications for reminders and encouragement.
* Additional habit categories and analytics dashboards.

## Contributing

Contributions are welcome! Fork the repository, create a branch, and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
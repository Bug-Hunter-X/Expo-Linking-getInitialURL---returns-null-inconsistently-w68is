# Expo Linking.getInitialURL() Inconsistent null Return

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where the function sometimes returns `null`, even when a deep link has successfully opened the app. This inconsistency causes unexpected behavior in apps that rely on handling initial URLs.

## Bug Reproduction

1. Clone this repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Run the app on an iOS or Android device/emulator.
4. Open a deep link (as specified in `App.js`).
5. Observe the console output.  The `getInitialURL` function will inconsistently return null, even though the deep link opened the app.

## Solution

The provided `bugSolution.js` demonstrates a workaround to mitigate this issue by using a combination of `Linking.addEventListener` and `Linking.getInitialURL`. This approach ensures that the initial URL is always captured. However, a more robust solution is needed from the Expo team to improve the consistency of `getInitialURL()`.
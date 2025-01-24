import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (event) => {
      setInitialUrl(event.url);
    };

    // Add event listener for url changes
    const subscription = Linking.addEventListener('url', handleUrl);

    // Get initial url
    Linking.getInitialURL().then((url) => {
      setInitialUrl(url);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (initialUrl) {
    return (
      <div>
        <h1>Initial URL: {initialUrl}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Waiting for deep link...</h1>
      </div>
    );
  }
}

export default App;
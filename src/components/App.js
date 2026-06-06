import React, { useState, useEffect } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontFamily: 'serif', marginTop: '20px', marginLeft: '20px' }}>
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default App;
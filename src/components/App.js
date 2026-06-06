import React, { useState, useEffect } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Increment seconds every second
    }, 1000); // Update every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    // What is unmounting? Unmounting is the process of removing a component from the DOM. When a component is unmounted, it is no longer rendered on the screen, and any resources associated with it are released. In React, you can use the useEffect hook to perform cleanup actions when a component is unmounted. In this case, we clear the interval to prevent memory leaks and ensure that the timer stops when the component is no longer in use.
    // how to know component is unmounted? You can determine if a component is unmounted by using the cleanup function in the useEffect hook. When you return a function from useEffect, that function will be called when the component is unmounted. In this case, we return a function that clears the interval, which indicates that the component has been unmounted and the timer should stop.
    // Can we know it when we refresh the page ? When you refresh the page, the component will be unmounted and then remounted. During the unmounting phase, the cleanup function will be called, which will clear the interval. When the page is refreshed, the component will be re-rendered, and the timer will start again from zero. So, while you can't directly detect a page refresh, you can infer that it has happened because the component will be unmounted and then remounted, causing the timer to reset.
  }, []);

  return (
    <div style={{ fontFamily: 'serif', marginTop: '20px', marginLeft: '20px' }}>
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default App;
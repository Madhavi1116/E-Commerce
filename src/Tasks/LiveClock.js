import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
    
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Live Clock</h1>
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default LiveClock;

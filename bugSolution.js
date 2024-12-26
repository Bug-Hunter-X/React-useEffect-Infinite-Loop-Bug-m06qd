```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array now includes 'count'.
    // The effect only runs when 'count' changes.
    // This fixes the infinite loop.
    // However, this will still cause a warning as count is modified in this hook.
    // For a more practical solution you should use a variable outside of the hook,  as shown below
    // setCount(count + 1);
    console.log('Count updated:', count);
  }, [count]);
  // More practical solution
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Count: {count}</div>;
}

export default MyComponent;
```
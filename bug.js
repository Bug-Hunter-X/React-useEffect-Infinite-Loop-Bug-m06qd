```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the component
    // re-renders every time the count changes, and the effect
    // is set to run after every render.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```
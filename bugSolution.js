```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        setCount(count + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function: Remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```
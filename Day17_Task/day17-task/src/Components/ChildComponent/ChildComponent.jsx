function ChildComponent({ message, updateMessage }) {
  const handleClick = () => {
    updateMessage("Hello from Child!");
  };

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <p>Received Message: {message}</p>
      <button onClick={handleClick}>Change Message from Child</button>
    </div>
  );
}

export default ChildComponent;

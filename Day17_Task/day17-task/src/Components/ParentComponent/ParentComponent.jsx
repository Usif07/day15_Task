import { useState } from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent!");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Parent Component</h2>
      <p>Message: {message}</p>

      <ChildComponent message={message} updateMessage={updateMessage} />
    </div>
  );
}

export default ParentComponent;

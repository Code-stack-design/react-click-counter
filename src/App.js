import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>You clicked the button {count} times.</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

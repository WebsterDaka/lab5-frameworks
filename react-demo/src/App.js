import React, { useState } from "react";

function App(props) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="App">
      <h1>Welcome{props.name}!</h1>
      <button
        onClick={() => setShowMessage(!showMessage)}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Toggle Message
      </button>
      {showMessage && <p>This is a hidden message!</p>}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "	https://grgkukhak5.execute-api.eu-central-1.amazonaws.com/sendEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: "samu.hujanen@tuni.fi",
          senderEmail: `${email}`,
          message: "Hello, this is a test message",
          date: new Date(),
        }),
      }
    );
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Send email</button>
      </form>
    </div>
  );
};

export default App;

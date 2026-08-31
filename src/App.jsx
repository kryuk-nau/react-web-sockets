import './App.css';

// Note: please, do not change the next things:
// - name of App prop,
// - placeholder and aria-label values
// - text on the button

function App({ ws }) {
  return (
    <div className="App">
      <h1>Web Sockets</h1>
      <div>
        <textarea rows="30" cols="60" readOnly aria-label="chat" />
      </div>
      <input placeholder="Your nickname" size="11" />
      <input placeholder="Type your message" size="40" />
      <button>Send</button>
    </div>
  );
}

export default App;

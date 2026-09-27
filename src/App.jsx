import './App.css';
import { useState, useEffect } from 'react';

// Note: please, do not change the next things:
// - name of App prop,
// - placeholder and aria-label values
// - text on the button

function App({ ws }) {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState('');

  useEffect(() => {
    if (!ws) return;

    // Отримання повідомлень від сервера та виведення кожного з нового рядка
    ws.onmessage = (event) => {
      setChatHistory((prev) => (prev ? `${prev}\n${event.data}` : event.data));
    };
  }, [ws]);

  const handleSend = () => {
    if (nickname.trim() && message.trim()) {
      // Формат відправки: "nickname: message"
      const formattedMessage = `${nickname}: ${message}`;
      ws.send(formattedMessage);
      setMessage(''); // Очищуємо поле введення повідомлення
    }
  };

  return (
    <div className="App">
      <h1>Web Sockets</h1>
      <div>
        <textarea 
          rows="30" 
          cols="60" 
          readOnly 
          aria-label="chat" 
          value={chatHistory}
        />
      </div>
      <input 
        placeholder="Your nickname" 
        size="11" 
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input 
        placeholder="Type your message" 
        size="40" 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;

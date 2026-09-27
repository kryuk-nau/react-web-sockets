const { WebSocketServer } = require('ws');

// Створюємо WebSocket-сервер на порту 8082[cite: 1]
const wss = new WebSocketServer({ port: 8082 });

wss.on('connection', (ws) => {
  // Отримуємо повідомлення від одного з клієнтів[cite: 1]
  ws.on('message', (data) => {
    // Розсилаємо це повідомлення всім підключеним клієнтам (використовуючи вбудовану властивість wss.clients)[cite: 1]
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(data.toString());
      }
    });
  });
});

// Do not remove this export. wss should be the name of you WebSocket Server instance.
module.exports = wss;

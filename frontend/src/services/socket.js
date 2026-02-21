export function connectSocket(onMessage) {
  const socket = new WebSocket("ws://localhost:8000/ws/gesture");

  socket.onopen = () => {
    console.log("WebSocket Connected");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket Closed");
  };

  return socket;
}
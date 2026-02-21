import { useState } from "react";
import "../styles/index.css";

export default function Home() {
  const [mode, setMode] = useState("Presentation");
  const [gesture, setGesture] = useState("None");

  return (
    <div className="dashboard">

      {/* HEADER */}
      <header className="header">
        <h1>AuraControl AI</h1>
        <span>Universal Contactless Interface</span>
      </header>

      {/* STATUS BAR */}
      <div className="status-bar">
        <div>🟢 Camera: Connected</div>
        <div>🎯 Gesture: {gesture}</div>
        <div>⚡ FPS: 30</div>
        <div>📡 Latency: 12ms</div>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid">

        {/* CAMERA PANEL */}
        <div className="panel camera-panel">
          <h2>Live Camera Feed</h2>
          <div className="camera-box">
            <video autoPlay muted playsInline></video>
            <div className="overlay-text">Waiting for camera stream...</div>
          </div>
        </div>

        {/* GESTURE PANEL */}
        <div className="panel gesture-panel">
          <h2>Gesture HUD</h2>
          <div className="gesture-box">
            <p className="gesture-text">{gesture}</p>
          </div>
        </div>

        {/* CONTROL PANEL */}
        <div className="panel control-panel">
          <h2>Control Modes</h2>

          <div className="mode-buttons">
            {["Presentation", "Media", "Gaming", "Smart Home"].map((m) => (
              <button
                key={m}
                className={mode === m ? "active" : ""}
                onClick={() => setMode(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="system-log">
            <h3>System Log</h3>
            <ul>
              <li>✔ WebSocket Connected</li>
              <li>✔ AI Model Loaded</li>
              <li>✔ Camera Initialized</li>
            </ul>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        AuraControl AI © 2026 | Gesture Powered Interface
      </footer>

    </div>
  );
}
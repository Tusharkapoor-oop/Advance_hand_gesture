export default function HUD({ mode, gesture }) {
  return (
    <div className="hud">
      <h1>AuraControl AI</h1>
      <p>Mode: <span>{mode}</span></p>
      <p>Gesture: <span>{gesture}</span></p>
    </div>
  );
}
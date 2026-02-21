const modes = ["Security", "Creative", "Efficiency", "Utility"];

export default function ModeSelector({ mode, setMode }) {
  return (
    <div className="mode-selector">
      {modes.map((m) => (
        <button
          key={m}
          className={mode === m ? "active" : ""}
          onClick={() => setMode(m)}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
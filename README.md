# AuraControl — Frontend

**The control surface for [AuraControl](https://github.com/Tusharkapoor-oop/auracontrol-backend): live hand-landmark streaming, gesture telemetry, and mode switching.**

> This repository is the **frontend only** (React + Vite). The vision/backend engine lives in
> [`Tusharkapoor-oop/auracontrol-backend`](https://github.com/Tusharkapoor-oop/auracontrol-backend).

---

## What you see

- **Landmark stream** — 21 MediaPipe hand landmarks rendered from normalised coordinates pushed by the vision engine.
- **Dashboard** — connection status, current gesture, measured round-trip latency, measured stream FPS. When the engine is offline the panel says *disconnected*; it never renders placeholder numbers.
- **Mode selector** — Presentation / Media / Canvas / Utility modes sent with each frame so the backend's context engine can resolve the right OS action.
- **Event log** — last 8 connection/telemetry transitions with timestamps.

```
Home.jsx ── connects ──▶ services/socket.js ── WebSocket ──▶ FastAPI backend (:8000)
   │                          │
   ├─ Dashboard (props)       └─ default: ws://localhost:8000/ws/gesture
   ├─ GestureTrail                  override: VITE_WS_URL
   ├─ HUD / ModeSelector
   └─ log (8 entries)
```

---

## Requirements

- Node 18+
- A running AuraControl backend (see upstream repo quick start)

## Run

```bash
npm install
npm run dev          # http://localhost:5173
```

Connect to a backend:

```bash
# .env.local
VITE_WS_URL=ws://localhost:8000/ws/gesture
```

> **Backend contract note:** the current backend exposes `/ws`. Set `VITE_WS_URL` to the route
> your backend actually serves (`/ws` or `/ws/gesture`) — the two repos are being unified on `/ws`.

## Build

```bash
npm run build        # vite build → dist/
npm run preview      # serve the production build locally
```

---

## Architecture notes

- **State:** local React state only — no store needed for a single-page telemetry surface.
- **Telemetry math:** latency is the time between consecutive frames (`receivedAt - lastSeen`); FPS is arrivals in a rolling 1-second window. Both reset to `null` on disconnect (not `0`, which would look like real data).
- **Socket lifecycle:** every state transition (`open`, `lost`, `error`, `closed`) is reported to the UI so what's displayed is what's true.

## Known limitations

- Single-page app; no routing (deliberate).
- `recharts` appears in `package.json` but is not yet used — candidate for removal.
- No automated tests yet — planned: a socket-mock test for `Home.jsx` telemetry math.

## License

No license file yet — MIT intended (to be added by the repository owner).

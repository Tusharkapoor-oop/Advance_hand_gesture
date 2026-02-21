# Advance_hand_gesture
---
```
auracontrol-ai/
│
├── backend/
│   ├── app/
│   │   ├── main.py                 # FastAPI entry point
│   │   ├── config.py               # Environment configs
│   │   ├── requirements.txt        # Python dependencies
│   │
│   │   ├── core/                   # AI & gesture engines
│   │   │   ├── camera.py           # Webcam capture service
│   │   │   ├── landmark_engine.py  # MediaPipe hand landmarks
│   │   │   ├── gesture_engine.py   # Gesture recognition logic
│   │   │   ├── context_engine.py   # Context switching (mode brain)
│   │   │   ├── physics_engine.py   # Momentum & velocity math
│   │   │   ├── security_engine.py  # Air-signature authentication
│   │   │   ├── creative_engine.py  # Virtual canvas & physics UI
│   │   │   ├── efficiency_engine.py# Presentation/media control
│   │   │   └── utility_engine.py   # Low-light & messy-hands mode
│   │
│   │   ├── services/               # External integrations
│   │   │   ├── os_controller.py    # PyAutoGUI & pynput actions
│   │   │   ├── auth_service.py     # User auth & signature storage
│   │   │   └── mode_service.py     # Mode management logic
│   │
│   │   ├── api/                    # API layer
│   │   │   ├── websocket.py        # Real-time gesture streaming
│   │   │   ├── routes.py           # REST endpoints
│   │   │   └── schemas.py          # Pydantic models
│   │
│   │   ├── models/                 # Database models
│   │   │   └── user.py             # User & signature schema
│   │
│   │   ├── utils/                  # Helpers
│   │   │   ├── logger.py           # Logging system
│   │   │   └── helpers.py          # Math & utilities
│   │
│   │   ├── tests/                  # Unit tests
│   │   │   ├── test_gesture.py
│   │   │   ├── test_security.py
│   │   │   └── test_physics.py
│   │
│   │   └── __init__.py
│   │
│   └── Dockerfile                  # Backend container
│
├── notebooks/                      # R&D & experiments (.ipynb)
│   ├── 01_hand_landmark_test.ipynb
│   ├── 02_gesture_detection_experiments.ipynb
│   ├── 03_air_signature_matching.ipynb
│   ├── 04_physics_momentum_model.ipynb
│   ├── 05_low_light_utility_mode.ipynb
│   ├── 06_performance_benchmark.ipynb
│   └── 07_visualization_dashboard.ipynb
│
├── frontend/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── Dockerfile
│   │
│   ├── src/
│   │   ├── App.jsx                 # Main React app
│   │   ├── main.jsx
│   │
│   │   ├── pages/
│   │   │   └── Home.jsx            # Dashboard page
│   │
│   │   ├── components/
│   │   │   ├── HUD.jsx             # Gesture overlay
│   │   │   ├── ModeSelector.jsx    # Switch modes
│   │   │   ├── GestureTrail.jsx    # Finger trajectory
│   │   │   └── Dashboard.jsx       # Stats & controls
│   │
│   │   ├── services/
│   │   │   └── socket.js           # WebSocket connection
│   │
│   │   └── styles/
│   │       └── index.css
│
├── data/
│   ├── gestures/
│   │   └── air_signatures.csv      # Stored gesture patterns
│   ├── samples/
│   │   └── demo_frames/
│   └── models/
│       └── configs.json
│
├── docs/
│   ├── architecture.md
│   ├── api_documentation.md
│   ├── setup_guide.md
│   └── user_manual.md
│
├── docker-compose.yml              # Full system run
├── .env                            # Secrets
├── .gitignore
└── README.md

```
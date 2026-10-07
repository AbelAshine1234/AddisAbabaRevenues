# Addis Ababa City Administration Revenues Bureau (AARB)
## Confidential Incident & Revenue Misconduct Platform

A full-stack digital solution for the Addis Ababa City Administration Revenues Bureau (የአዲስ አበባ ከተማ አስተዳደር ገቢዎች ቢሮ) designed to empower citizens and taxpayers to report tax evasion, bribery, fake receipts, and employee misconduct confidentially.

---

### Project Structure
```
AddisAbabaRevenues/
├── apps/
│   ├── backend/             # NestJS 10 + TypeORM + PostgreSQL + Swagger API
│   │   ├── src/             # Modules: reports, chat, health, auth
│   │   ├── Dockerfile       # Production multi-stage Docker build
│   │   └── package.json
│   └── mobile_app/          # Flutter 3.44 + Material 3 + Bloc Mobile App
│       ├── android/         # Branded launcher icons & package metadata
│       ├── assets/images/   # Official Revenues Bureau logo
│       ├── lib/             # Screens: Home, Chat AI, Reports, Track, Create Report
│       └── pubspec.yaml
├── docker-compose.yml       # Full stack: PostgreSQL 16, Redis 7, Backend
├── .env.example
└── README.md
```

---

### Running the Backend with Docker
```bash
# 1. Start database, cache, and backend containers
docker compose up -d --build

# 2. View backend logs
docker compose logs -f backend

# 3. Access Swagger API documentation
http://localhost:5001/api/docs
```

---

### Running the Mobile App on Phone
```bash
cd apps/mobile_app
flutter pub get
flutter run -d <device_id>
```

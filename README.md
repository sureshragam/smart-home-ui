# Smart Home UI

A modern React dashboard for monitoring and controlling ESP32-based smart home devices.

## 📸 Dashboard

![Smart Home Dashboard](docs/dashboard.png)

## 🚀 Features

- 📊 Dashboard overview
- 📡 Device monitoring
- 🚶 Motion detection history
- ❤️ System health monitoring
- 🔄 Spring Boot REST API integration
- ⚡ Fast data fetching with TanStack Query
- 🎨 Responsive Material UI interface

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Material UI (MUI)
- TanStack Query
- Axios
- React Router

## 📂 Project Structure

```text
src
├── api
├── app
├── assets
├── components
├── constants
├── hooks
├── layouts
├── mappers
├── pages
├── theme
├── types
└── utils
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 20+
- npm

### Clone the Repository

```bash
git clone https://github.com/sureshragam/smart-home-ui.git
cd smart-home-ui
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:5173
```

## 🔗 Backend

This application communicates with the **Smart Home API**, built using Spring Boot.

Backend Repository:

```text
smart-home-api
```

Expected backend URL:

```text
http://localhost:8080/api
```

## 📋 Roadmap

- [x] Dashboard UI
- [x] Spring Boot API integration
- [x] Device monitoring
- [x] Activity monitoring
- [x] System health monitoring
- [ ] MySQL integration
- [ ] ESP32 integration
- [ ] Real-time updates (WebSocket)
- [ ] Authentication
- [ ] Device control
- [ ] Notifications

## 📄 License

This project is licensed under the MIT License.

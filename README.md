# 🚀 React Pipeline Forge

> A visual, drag-and-drop pipeline builder that helps you construct and analyze directed acyclic graphs (DAGs) for LLM workflows.

[![Vercel App](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://react-pipeline-forge.vercel.app/)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/Frontend-React-61DAFB.svg)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688.svg)

## 📖 Overview

**React Pipeline Forge** is a modern web application designed to create, visualize, and validate node-based pipelines. Built with **React Flow** on the frontend and **FastAPI** on the backend, it allows users to chain together Inputs, LLMs, and Outputs to form complex workflows.

The application features a robust **validity checker** that runs a DAG (Directed Acyclic Graph) analysis on the backend to ensure your pipelines are logically sound (i.e., no infinite loops!).

---

## ✨ Key Features

*   **🎨 Visual Canvas**: Intuitive drag-and-drop interface powered by React Flow.
*   **🧩 Custom Nodes**: Includes specialized nodes for `Input`, `LLM`, `Output`, `Text`, `Transform`, and more.
*   **🔄 DAG Detection**: Backend validation to detect cycles and ensure the pipeline is a valid Directed Acyclic Graph.
*   **🔌 Dynamic Abstractions**: Clean separation between the UI presentation and the underlying graph logic.
*   **🌐 Frontend Demo Mode**: Capable of running as a standalone frontend with simulated backend responses for easy hosting (e.g., Vercel).
*   **🛠️ Modular Architecture**: Separate frontend and backend directories for scalability.

---

## 🛠️ Tech Stack

### Frontend
*   **React** (v18)
*   **React Flow** (Visualizing node graphs)
*   **Zustand** (State management)
*   **Axios / Fetch API** (HTTP requests)

### Backend
*   **FastAPI** (High-performance Python framework)
*   **Pydantic** (Data validation)
*   **Uvicorn** (ASGI server)
*   **NetworkX** (Graph algorithms - *optional implementation*)

---

## 📂 Project Structure

```bash
react-pipeline-forge/
├── .gitignore          # Root gitignore
├── README.md           # Project documentation
│
├── frontend/           # React Application
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── nodes/      # Custom React Flow Node components
│   │   ├── submit.js   # Submission logic (API integration + Mock fallback)
│   │   ├── ui.js       # Main canvas and drag-and-drop logic
│   │   └── store.js    # Zustand state store
│   └── package.json    # Frontend dependencies
│
└── backend/            # Python API
    ├── main.py         # FastAPI application entry point & DAG logic
    └── requirements.txt # Python dependencies
```

---

## 🚀 Getting Started

### Prerequisites
*   **Node.js** (v14+)
*   **Python** (v3.8+)
*   **Git**

### 1. Installation

Clone the repository:
```bash
git clone https://github.com/shesh96/react-pipeline-forge.git
cd react-pipeline-forge
```

### 2. Running the Backend (FastAPI)
The backend handles the graph analysis logic.

```bash
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
python -m uvicorn main:app --reload --port 8000
```
*The API will be available at `http://127.0.0.1:8000`*

### 3. Running the Frontend (React)
Open a new terminal window.

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```
*The app will open at `http://localhost:3000`*

---

## 🕹️ How to Use

1.  **Add Nodes**: Drag nodes (Input, LLM, etc.) from the sidebar toolbar onto the canvas.
2.  **Connect Nodes**: Click and drag from a handle (dot) on one node to a handle on another to create an edge.
3.  **Configure**: Fill in text fields or select options within the nodes.
4.  **Submit**: Click the **"Submit"** button at the bottom.
    *   **If Backend is Running**: It will send the graph data to the API, which returns the number of nodes, edges, and whether it forms a valid DAG.
    *   **If Backend is Offline**: The frontend will automatically switch to "Demo Mode" and simulate a successful response, allowing you to test the UI interactions.

---

## ☁️ Deployment

### Frontend Only (Vercel / Netlify)
This project is configured to work as a standalone frontend demo.

1.  Push your code to GitHub.
2.  Import the repository into Vercel.
3.  Set the **Root Directory** to `frontend`.
4.  Deploy!
5.  *(Optional)* Set the `REACT_APP_API_URL` environment variable if you deploy a backend later.

### Full Stack
Deploy the `frontend` directory to a static host (Vercel) and the `backend` directory to a Python host (Render, Railway, or AWS).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

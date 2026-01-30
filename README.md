# React Pipeline Forge

A full-stack application with a React frontend (using React Flow) and a FastAPI backend.

## Project Structure

- `frontend/`: React application created with Create React App.
- `backend/`: FastAPI application.

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)

## Setup & Running

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   *(If `pip` is not in your PATH, try `python -m pip install -r requirements.txt`)*

3. Run the server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
   *(Or `python -m uvicorn main:app --reload --port 8000`)*

   The backend will start at `http://127.0.0.1:8000`.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will open in your browser at `http://localhost:3000`.

## Features

- **Pipeline Builder**: Drag and drop nodes to create pipelines.
- **DAG Detection**: The backend verifies if the pipeline is a Directed Acyclic Graph (DAG).

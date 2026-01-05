# Full Stack Calculator Demo 🚀

A simple full stack application built to practice connecting a **React** frontend with a **FastAPI** backend.

**LIVE DEMO**
* **Frontend (App):** [https://fast-api-testi.vercel.app/](https://fast-api-testi.vercel.app/)
* **Backend (API Docs):** [https://fastapi-testi-e9sl.onrender.com/docs](https://fastapi-testi-e9sl.onrender.com/docs)
* Note: The backend is hosted on Render's free tier, so the first request may take up to a minute to wake up the server.

---

### 🛠️ Tech Stack
* **Frontend:** React, Vite, JavaScript (Hosted on **Vercel**)
* **Backend:** Python, FastAPI (Hosted on **Render**)
* **Features:** REST API communication, CORS configuration, JSON data handling.

### 📂 How it works
1.  User inputs numbers in the React UI.
2.  Frontend sends a `POST` request to the Python backend.
3.  Backend calculates the sum and returns the result via JSON.

---

### 💻 Run Locally

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

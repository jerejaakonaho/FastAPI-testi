from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# --- CORS SETUP ---
# This allows your React app to talk to this API
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DATA MODEL ---
# This defines the data we expect from React
class InputData(BaseModel):
    input1: int
    input2: int

# --- ENDPOINTS ---
@app.get("/")
def read_root():
    return {"message": "FastAPI is running!"}

@app.post("/api/add")
def add_data(data: InputData):
    # Logic: Combine the two inputs
    result = data.input1 + data.input2
    return {"result": result}
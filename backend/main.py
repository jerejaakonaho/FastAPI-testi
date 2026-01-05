from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Start the app
app = FastAPI()

# Tell the server who is allowed to talk to it (Our frontend)
origins = [
    "http://localhost:5173",              # Local React development
    "https://fast-api-testi.vercel.app",  # The live website on Vercel
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Only allow the sites listed above
    allow_credentials=True,
    allow_methods=["*"],    # Allow all types of requests (GET, POST, etc.)
    allow_headers=["*"],
)

# This ensures that the data sent from React contains exactly
# two numbers ('int'). If data is wrong, it rejects the request automatically.
class InputData(BaseModel):
    input1: int
    input2: int

# Simple check to see if the server is online.
@app.get("/")
def read_root():
    return {"message": "FastAPI is running!"}

# Accepts data (validated by InputData above).
# Adds the numbers together.
# Sends the result back as JSON.
@app.post("/api/add")
def add_data(data: InputData):
    result = data.input1 + data.input2
    return {"result": result}
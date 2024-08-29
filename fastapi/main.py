from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

from Services import Service

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React app's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers (Authorization, etc.)
)


@app.get("/")
async def main():
    return {"message": "Hello dWorld"}

@app.post("/file_upload")
async def upload_file(file: UploadFile= File(...)):
    try:
        file_location=f"Document/{file.filename}"
        with open(file_location, 'wb') as f:
            f.write(await file.read())

        Load=Service(f"Document/{file.filename}")
        df=Load.load()
        
        return df
    except Exception as e:
        return {"error": str(e)}
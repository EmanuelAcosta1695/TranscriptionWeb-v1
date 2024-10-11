from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

import sys
sys.path.append('./')

from routes.transcription import transcription

# uvicorn app:app --reload  
app = FastAPI(
    openapi_tags=[{
        "Title": "REST API with FastAPI",
        "description": "Transcription API",
        "name" : "Transcription",
    }]
)

# Configuración de los orígenes permitidos (origins)
origins = ["*"]

# Configuración del middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(transcription)

@app.get('/')
def home():
    return "Transcription API!"


if __name__ == '__main__':
    uvicorn.run("app:app", host="0.0.0.0", port=8000)
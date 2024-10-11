from pydantic import BaseModel

class TranscriptionResponse(BaseModel):
    texto_transcrito: str

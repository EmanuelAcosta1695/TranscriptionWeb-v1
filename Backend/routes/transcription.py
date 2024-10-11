from fastapi import File, HTTPException, Form, UploadFile
from fastapi.responses import JSONResponse
import speech_recognition as sr
from fastapi import APIRouter, HTTPException
import tempfile
import shutil
import soundfile as sf
from models.transcriptionResponse import TranscriptionResponse


# Tupla de extensiones válidas
extensiones_validas = ['wav', 'aiff', 'aif', 'flac', 'mp3', 'ogg']

# Diccionario de idiomas soportados
idiomas_validos = {
    "Spanish": "es-es",
    "English": "en-us",
    "Italian": "it-it",
    "French": "fr-fr",
    "German": "de-de",
    "Arab": "ar-qa",
    "Japanese": "ja",
    "Korean": "ko",
    "Mandarin Chinese": "zh-cn",
    "Traditional Chinese": "zh-yue",
    "Russian": "ru"
}


transcription = APIRouter()

@transcription.post("/transcription", response_model=TranscriptionResponse, tags=["transcription"])
async def post_audiofile(audiofile: UploadFile = File(...), language: str = Form(...), filename: str = Form(...)):
    try:
        extension = filename.lower().split(".")[-1]

        print(f"extension: {extension}")

        if extension not in extensiones_validas:
            detail: str = f"Archivo de audio no compatible: {extension}"
            raise HTTPException(status_code=400, detail=detail)

        if language not in idiomas_validos:
            raise HTTPException(status_code=400, detail="Idioma no compatible")

        with tempfile.NamedTemporaryFile(delete=False, suffix='.flac') as tmp_audio_file:
            if extension == 'mp3':
                data, samplerate = sf.read(audiofile.file)
                sf.write(tmp_audio_file.name, data, samplerate, format='flac')
            elif extension == 'ogg':
                ogg_data, ogg_samplerate = sf.read(audiofile.file)
                sf.write(tmp_audio_file.name, ogg_data, ogg_samplerate, format='flac')
            else:
                shutil.copyfileobj(audiofile.file, tmp_audio_file)

        recognizer = sr.Recognizer()
        
        with sr.AudioFile(tmp_audio_file.name) as fuente:
            recognizer.adjust_for_ambient_noise(fuente)
            audio = recognizer.record(fuente)

        texto_transcrito = recognizer.recognize_google(audio, language=idiomas_validos[language])

        return TranscriptionResponse(texto_transcrito=texto_transcrito)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en el servidor: {str(e)}")
